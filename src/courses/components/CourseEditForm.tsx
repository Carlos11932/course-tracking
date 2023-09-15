import React, { useState, useEffect } from 'react';
import { Course, Block } from '../../types/course';

interface CourseEditFormProps {
  course: Course | null;
  onEdit: (editCourse: Course) => void;
}

export const CourseEditForm: React.FC<CourseEditFormProps> = ({ course, onEdit }) => {
  const [name, setName] = useState(course ? course.name : '');
  const [type, setType] = useState(course ? course.type : '');
  const [blocks, setBlocks] = useState<Block[]>(course ? course.blocks : []);
  const [newBlock, setNewBlock] = useState({ name: '', content: '', minutes: 0 });


  useEffect(() => {
    if (course) {
      setBlocks(course.blocks);
    }
  }, [course]);

  const handleBlockChange = <K extends keyof Block>(index: number, field: K, value: Block[K]) => {
    const newBlocks = [...blocks];
    newBlocks[index][field] = value;
    setBlocks(newBlocks);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (course) {
      const editedCourse = {
        ...course,
        name,
        type,
        blocks,
      };
      onEdit(editedCourse);
    }
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
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="mb-20">
        <input 
          type="text" 
          placeholder="Tipo del nuevo Curso"
          className="text-black peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none"
          name="type"
          value={type}
          onChange={e => setType(e.target.value)}
        />
      </div>
      <div className="mb-20">
        Bloques:
        <button type="button" onClick={handleAddBlock} className="ml-12 my-20 inline-flex items-center justify-center rounded bg-teal-400 p-2 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:text-teal-200 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Añadir bloque
          </button>
        {blocks.map((block, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              value={block.name}
              className="text-black rounded mr-8 border-0 px-3 py-[0.32rem] leading-[2.15]"
              onChange={(e) => handleBlockChange(index, 'name', e.target.value)}
            />
            <input
              type="text"
              value={block.content}
              className="text-black rounded mr-8 border-0 px-3 py-[0.32rem] leading-[2.15]"
              onChange={(e) => handleBlockChange(index, 'content', e.target.value)}
            />
            <input
              type="number"
              value={typeof block.minutes === 'number' ? block.minutes : 0}
              className="text-black rounded border-0 px-3 py-[0.32rem] leading-[2.15]"
              onChange={(e) => handleBlockChange(index, 'minutes', Number(e.target.value))}
            />
          </div>
        ))}
      </div>
      <button
        type="submit"          
        className="mt-10 my-20 inline-flex items-center justify-center rounded bg-teal-400 p-2 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:text-teal-200 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
        Editar curso
      </button>
    </form>
  );
};