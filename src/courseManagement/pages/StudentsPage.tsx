import { useState, useContext } from 'react'

import { useForm } from '../../hooks/index.d'
import { AppContext } from '../../appContext/AppContext'

import { StudentList, StudentCreateButton } from '../../students/components/index.d'

const createUserFormFields = {
  id: new Date().getTime(),
  name: '',
  subName: '',
  job: ''
}

export const StudentsPage = () => {
  const { name, subName, job, onInputChange:handleChange, onResetForm } = useForm(createUserFormFields);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error("AppContext is null");
  }

  const { students, setStudents, courses } = appContext;

  const handleCourseSelect = (studentId, courseId) => {
    appContext.updateStudentCourse(studentId, courseId);
  };

  const addStudent = (newStudent) => {
    newStudent.courses = [];
    setStudents(prevStudents => [...prevStudents, newStudent]);
    onResetForm();
  };

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <>
    <div className="m-20">
      <div className="grid grid-cols-10 grid-rows-10">
        <div className="col-end-11">
          <StudentCreateButton 
            formFields={{ name, subName, job }}
            handleChange={handleChange}
            onSubmit={addStudent}
            modalIsOpen={modalIsOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
        </div>
        <div className="row-start-4 col-start-2 col-end-9">
          <StudentList
            students={students}
            courses={courses}
            onCourseSelected={handleCourseSelect}
          />
        </div>
      </div>
    </div>
    </>
  )
}