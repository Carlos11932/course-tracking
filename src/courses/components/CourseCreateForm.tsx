import React, { useState } from 'react';
import { Block } from '../../types/course';

interface CourseCreateFormProps {
  formFields: {
    name: string;
    type: string;
    blocks: Block[];
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (newCourse) => void;
}

export const CourseCreateForm: React.FC<CourseCreateFormProps> = ({ formFields, handleChange, onSubmit }) => {
  const { name, type } = formFields;
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [newBlock, setNewBlock] = useState({ name: '', content: '', minutes: 0 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const totalMinutes = blocks.reduce((sum, block) => sum + block.minutes, 0);
    const newCourse = { id:  new Date().getTime(), name, type, minutes: totalMinutes, blocks };
    onSubmit(newCourse);
  };

  const handleAddBlock = () => {
    setBlocks(prevBlocks => [
      ...prevBlocks,
      {
        id: prevBlocks.length + 1,
        name: newBlock.name,
        content: newBlock.content,
        minutes: newBlock.minutes,
        isFinished: false,
      },
    ]);
    setNewBlock({ name: '', content: '', minutes: 0 }); // reset newBlock
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-20">
        <input
          type="text"
          placeholder="Nombre del nuevo Curso"
          className="text-black peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none"
          name="name"
          value={ name }
          onChange={ handleChange }
        />
      </div>
      <div className="mb-20">
        <input 
          type="text" 
          placeholder="Tipo del nuevo Curso"
          className="text-black peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none"
          name="type"
          value={ type }
          onChange={ handleChange }
        />
      </div>
      <div className="mb-20 text-white">
        Bloques: {blocks.map(block => block.name).join(', ')}
        <div className="">
          <input
            type="text"
            placeholder="Nombre del bloque"
            value={newBlock.name}
            className="text-black rounded border-0 px-3 py-[0.32rem] leading-[2.15] "
            onChange={event => setNewBlock({ ...newBlock, name: event.target.value })}
          />
          <input
            type="text"
            placeholder="Contenido del bloque"
            className="text-black mx-8 rounded border-0 px-3 py-[0.32rem] leading-[2.15]"
            value={newBlock.content}
            onChange={event => setNewBlock({ ...newBlock, content: event.target.value })}
          />
          <input
            type="text"
            placeholder="Tiempo del bloque"
            className="text-black mx-8 rounded border-0 px-3 py-[0.32rem] leading-[2.15]"
            value={newBlock.minutes}
            onChange={event => setNewBlock({ ...newBlock, minutes: Number(event.target.value)
          })}
          />
          <button type="button" onClick={handleAddBlock} className=" my-20 inline-flex items-center justify-center rounded bg-teal-400 p-2 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:text-teal-200 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Añadir bloque
          </button>
        </div>
      </div>
      <button
        type="submit"          
        className="mt-10 my-20 inline-flex items-center justify-center rounded bg-teal-400 p-2 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:text-teal-200 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
        Crear curso
      </button>
    </form>
  );
};