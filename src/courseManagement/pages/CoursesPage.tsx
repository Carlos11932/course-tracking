import { useState, useContext } from 'react'

import { useForm } from '../../hooks/index.d'
import { AppContext } from '../../appContext/AppContext'

import { CourseList, CourseCreateButton } from '../../courses/components/index.d'

const createCourseFormFields = {
  id: new Date().getTime(),
  name: '',
  type: '',
  isFinished: [],
  minutes: 0,
  blocks: []
}

export const CoursesPage = () => {
  const { name, type, isFinished, blocks, onInputChange:handleChange, onResetForm } = useForm(createCourseFormFields);

  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error("AppContext is null");
  }

  const { courses, setCourses, setStudents } = appContext;

  const updateCourseTime = (courseId: number) => {
    setCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === courseId
          ? {
              ...course,
              minutes: course.blocks.reduce((total, block) => total + block.minutes, 0)
            }
          : course
      )
    );
  };

  const addCourse = (newCourse) => {
    const totalMinutes = newCourse.blocks.reduce((sum, block) => sum + block.minutes, 0);
    newCourse.minutes = totalMinutes;
    setCourses(prevCourses => [...prevCourses, newCourse]);
    onResetForm();
  };

  const editCourse = (editedCourse) => {
    setCourses(prevCourses => prevCourses.map(course => 
      course.id === editedCourse.id ? editedCourse : course
    ));
    updateCourseTime(editedCourse.id);
    setStudents(prevStudents => prevStudents.map(student => {
      if (student.activeCourse && student.activeCourse.id === editedCourse.id) {
        return { ...student, activeCourse: editedCourse };
      } else {
        return student;
      }
    }));
  };

  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  return (
    <>
    <div className="m-20">
      <div className="grid grid-cols-10 grid-rows-10">
        <div className="col-end-11">
        <CourseCreateButton 
          formFields={{ name, type, isFinished, blocks }}
          handleChange={handleChange}
          onSubmit={addCourse}
          modalIsOpen={createModalIsOpen}
          openModal={() => setCreateModalIsOpen(true)}
          closeModal={() => setCreateModalIsOpen(false)}
        />
        </div>
        <div className="row-start-4 col-start-2 col-end-9">
          <CourseList
            courses={courses}
            onCourseEdit={editCourse}
            modalIsOpen={editModalIsOpen}
            openModal={() => setEditModalIsOpen(true)}
            closeModal={() => setEditModalIsOpen(false)}
          />
        </div>
      </div>
    </div>
    </>
  )
}