import { Student, Course } from '../../types';
import { StudentAddCourse } from './StudentAddCourse'

interface StudentListProps {
    students: Student[];
    courses: Course[];
    onCourseSelected: (studentId: number, courseId: number) => void;
}


export const StudentList: React.FC<StudentListProps> = ({students = [], courses = [], onCourseSelected}) => {

    const handleCourseSelect = (studentId, courseId) => {
        onCourseSelected(studentId, courseId);
    };

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-3">#</th>
                                    <th scope="col" className="px-6 py-3">Nombre</th>
                                    <th scope="col" className="px-6 py-3">Apellido</th>
                                    <th scope="col" className="px-6 py-3">Trabajo</th>
                                    <th scope="col" className="px-6 py-3">Curso activo</th>
                                    <th scope="col" className="px-6 py-3">Progreso del curso activo</th>
                                    <th scope="col" className="px-6 py-3">Cursos terminados</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    students.map( (student: Student) => {
                                        const finishedCourses = student.courses
                                            .filter(course => course.isFinished)
                                            .map(course => course.name)
                                            .join(', ');

                                        const availableCourses = courses.filter(course => !student.courses.some(studentCourse => studentCourse.isFinished && studentCourse.courseId === course.id));

                                        return (
                                                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-200" key={student.id}>
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{student.id}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{student.name}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{student.subName}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{student.job}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{student.activeCourse ? student.activeCourse.name : <StudentAddCourse student={student} courses={availableCourses} onCourseSelect={handleCourseSelect}/>}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {student.activeCourse 
                                                            ? `${Math.round(student.courses.find(course => student.activeCourse && course.courseId === student.activeCourse.id)?.progress || 0)}%` 
                                                            : '-'
                                                        }
                                                    </td>                                                    
                                                    <td className="whitespace-nowrap px-6 py-4">{finishedCourses || 'Ninguno'}</td>                                                                            
                                                </tr>
                                            )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}