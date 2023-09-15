import { useState } from 'react';
import { Student, Course } from '../../types';

interface StudentAddCourseProps {
  student: Student
  courses: Course[]
  onCourseSelect: (studentId: number, courseId: number) => void
}

export const StudentAddCourse: React.FC<StudentAddCourseProps> = ({student, courses = [], onCourseSelect}) => {
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleCourseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const courseValue = event.target.value;
    setSelectedCourse(courseValue);
    onCourseSelect(student.id, Number(courseValue));
  }

  return(
    <>
      <select
        value={selectedCourse}
        onChange={handleCourseChange}
        className="flex items-center rounded bg-teal-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:text-teal-200 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        <option value="">Añadir Curso</option>
        {courses.map((course, index) => (
          <option key={index} value={course.id}>{course.name}</option>
        ))}
      </select>
    </>
  )
}