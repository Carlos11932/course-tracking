import { useState, useEffect } from 'react';
import { AppContext } from './AppContext';
import { Student, Course } from "../types";
import { students as defaultStudents } from '../students/data/students';
import { courses as defaultCourses } from '../courses/data/courses';

export const AppProvider = ({ children }) => {
  const storedStudents = localStorage.getItem('students');
  const initialStudents = storedStudents ? JSON.parse(storedStudents) : defaultStudents;
  const [students, setStudents] = useState<Student[]>(initialStudents);

  const storedCourses = localStorage.getItem('courses');
  const initialCourses = storedCourses ? JSON.parse(storedCourses) : defaultCourses;
  const [courses, setCourses] = useState<Course[]>(initialCourses);

  const updateStudentBlocks = (studentId: number, checkedNames: string[]) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId
          ? {
              ...student,
              activeCourse: student.activeCourse
                ? {
                    ...student.activeCourse,
                    blocks: student.activeCourse.blocks.map(block =>
                      checkedNames.includes(block.name)
                        ? { ...block, isFinished: true }
                        : { ...block, isFinished: false }
                    ),
                  }
                : undefined,
              courses: student.courses.map(course =>
                course.courseId === student.activeCourse?.id
                  ? {
                      ...course,
                      progress: student.activeCourse
                        ? (student.activeCourse.blocks
                            .filter(block => checkedNames.includes(block.name))
                            .reduce((sum, block) => sum + block.minutes, 0) /
                            student.activeCourse.minutes) *
                          100
                        : 0,
                    }
                  : course
              ),
            }
          : student
      )
    );
  };

  const finishStudentCourse = (studentId: number) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId && student.activeCourse
          ? {
              ...student,
              activeCourse: undefined,
              courses: student.courses.map(course =>
                course.courseId === student.activeCourse?.id
                  ? { ...course, isFinished: true }
                  : course
              ),
            }
          : student
      )
    );
  
    setCourses(prevCourses =>
      prevCourses.map(course =>
        students.find(
          student =>
            student.id === studentId && student.activeCourse?.id === course.id
        )
          ? { ...course, isFinished: [...course.isFinished, studentId] }
          : course
      )
    );
  };

  const updateStudentCourse = (studentId: number, courseId: number) => {
    const courseToAdd = courses.find(course => course.id === courseId);

    if (!courseToAdd) {
      return;
    }
  
    setStudents(prevStudents => 
      prevStudents.map(student => 
        student.id === studentId 
          ? { 
              ...student,
              activeCourse: courseId !== 0 ? courseToAdd : undefined,
              courses: courseId !== 0 
                ? [...student.courses, {
                  courseId: courseId, 
                  name: courseToAdd.name, 
                  progress: 0, 
                  isFinished: false, 
                  startDate: new Date(),
                  blocks: []
                  }]
                : student.courses
            } 
          : student
      )
    );
  };

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [students, courses]);

  return (
    <AppContext.Provider value={{ students, setStudents, courses, setCourses, updateStudentCourse, updateStudentBlocks, finishStudentCourse }}>
      {children}
    </AppContext.Provider>
  );
};