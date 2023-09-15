
interface StudentCreateFormProps {
  formFields: {
    name: string;
    subName: string;
    job: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (newStudent) => void;
}

export const StudentCreateForm: React.FC<StudentCreateFormProps> = ({ formFields, handleChange, onSubmit }) => {
  const { name, subName, job } = formFields;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newStudent = { id:  new Date().getTime(), name, subName, job };
    onSubmit(newStudent);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-20">
      <input
        type="text"
        placeholder="Nombre del nuevo Alumno"
        className="text-black peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none"
        name="name"
        value={ name }
        onChange={ handleChange }
        />
      </div>
      <div className="mb-20">
        <input 
          type="text" 
          placeholder="Apellidos del nuevo Alumno"
          className="text-black peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none"
          name="subName"
          value={ subName }
          onChange={ handleChange }
          />
      </div>
      <div className="mb-20">
        <input 
          type="text" 
          placeholder="Especialidad del Alumno"
          className="text-black peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none"
          name="job"
          value={ job }
          onChange={ handleChange }
          />
      </div>
      <button 
        type="submit"          
        className=" my-20 inline-flex items-center justify-center rounded bg-teal-400 p-2 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:text-teal-200 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
        Crear estudiante
      </button>
    </form>
  );
};