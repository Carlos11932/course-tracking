import Modal from 'react-modal';

import { Block } from '../../types/course';
import { CourseCreateForm } from './CourseCreateForm';

interface CourseCreateButtonProps {
  formFields: {
    name: string;
    type: string;
    isFinished: number[];
    blocks: Block[];
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (newCourse) => void;
  modalIsOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const CourseCreateButton: React.FC<CourseCreateButtonProps> = ({ formFields, handleChange, onSubmit, modalIsOpen, openModal, closeModal }) => {
  const { name, type, blocks } = formFields;

  const addCourse = (newCourse) => {
    onSubmit(newCourse);
  };

  return (
    <>
      <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        className="flex items-center rounded bg-teal-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:text-teal-200 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        onClick={openModal}
        >
        <span className="material-icons-outlined mr-1">
            add
        </span>
        Añadir Curso
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
          <CourseCreateForm
            formFields={{ name, type, blocks }}
            handleChange={handleChange}
            onSubmit={addCourse}
          />
        </div>
      </Modal>
    </>
  )
}