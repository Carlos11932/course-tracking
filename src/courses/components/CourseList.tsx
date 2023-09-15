import { useState } from 'react';
import Modal from 'react-modal';

import { CourseEditForm } from './CourseEditForm'
import { Course } from '../../types/course'

interface CourseListProps {
    courses: Course[];
    onCourseEdit: (editedCourse: Course) => void;
    modalIsOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

export const CourseList: React.FC<CourseListProps> = ({courses = [], onCourseEdit, openModal, modalIsOpen, closeModal}) => {

    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

    const editCourse = (editedCourse: Course) => {
        onCourseEdit(editedCourse);
        closeModal();
    }

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4">#</th>
                                    <th scope="col" className="px-6 py-4">Nombre del curso</th>
                                    <th scope="col" className="px-6 py-4">Tipo de curso</th>
                                    <th scope="col" className="px-6 py-4">Tiempo estimado del curso</th>
                                    <th scope="col" className="px-6 py-4">Número de estudiantes</th>
                                    <th scope="col" className="px-6 py-4">Finalizado</th>
                                    <th scope="col" className="px-6 py-4">Número de comentarios</th>
                                    <th scope="col" className="px-6 py-4">Número de bloques</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    courses.map( (course: Course) => (
                                        <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600" key={course.id}>
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{course.id}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{course.name}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{course.type}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{course.minutes}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{Array.isArray(course.students) ? course.students.length : 0}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{Array.isArray(course.isFinished) ? course.isFinished.length : 0}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{Array.isArray(course.comments) ? course.comments.length : 0}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{Array.isArray(course.blocks) ? course.blocks.length : 0}</td>
                                            <td>
                                                <button
                                                    type="button"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light"
                                                    className="flex items-center rounded bg-teal-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:text-teal-200 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                                    onClick={() => {
                                                        openModal();
                                                        setSelectedCourse(course);
                                                    }}
                                                >
                                                    Editar
                                                </button>
                                                <Modal
                                                    ariaHideApp={false}
                                                    className="text-white bg-teal-500 container mx-auto px-8 py-10 grid grid-cols-10 grid-rows-10 my-20"
                                                    isOpen={modalIsOpen}
                                                    onRequestClose={closeModal}
                                                    contentLabel="Example Modal"
                                                >
                                                    <div className="col-end-11 flex justify-end">
                                                    <button
                                                        type="button"
                                                        data-te-ripple-init
                                                        data-te-ripple-color="light"
                                                        onClick={closeModal}
                                                        className="inline-flex items-center justify-center rounded-full bg-teal-400 p-2 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:text-teal-200 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                                        <span className="material-icons-outlined">
                                                            close
                                                        </span>
                                                    </button>
                                                    </div>
                                                    <div className="col-start-2 col-end-9">
                                                    <CourseEditForm
                                                        course={selectedCourse}
                                                        onEdit={editCourse}
                                                    />
                                                    </div>
                                                </Modal>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}