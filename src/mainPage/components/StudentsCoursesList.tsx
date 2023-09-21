import { Student, Course } from '../../types/index.d'
import MultipleSelectCheckmarks from '../../ui/components/multipleSelectorUI';

interface StudentsCoursesListProps {
  students: Student[];
  onBlocksChange: (studentId: number, checkedNames: string[]) => void;
  finishCourse: (studentId: number) => void;
}

export const StudentsCoursesList: React.FC<StudentsCoursesListProps> = ({students, onBlocksChange, finishCourse}) => {
  const activeCourses: Course[] = []
  students.forEach(student => {
    if(student.activeCourse?.id && !activeCourses.find(course => course.id === student.activeCourse?.id)) {
      activeCourses.push(student.activeCourse);
    }
  });

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
              {
                  activeCourses.map(course => (
                    <div key={course.id} className="mb-32">
                      <h2 className="mb-4">
                        {course.name}
                      </h2>
                      <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                          <tr>
                            <th scope="col" className="px-6 py-3">#</th>
                            <th scope="col" className="px-6 py-3">Nombre</th>
                            <th scope="col" className="px-6 py-3">Apellido</th>
                            <th scope="col" className="px-6 py-3">Trabajo</th>
                            <th scope="col" className="px-6 py-3">Progreso del curso activo</th>
                            <th scope="col" className="px-6 py-3">Fecha de inicio</th>
                            <th scope="col" className="px-6 py-3">Bloques terminados</th>

                          </tr>
                        </thead>
                        <tbody>
                          {
                            students.filter(student => student.activeCourse?.id === course.id).map( (student: Student) => {
                              const activeCourse = student.courses.find(course => course.courseId === student.activeCourse?.id);
                              const startDate = activeCourse && activeCourse.startDate ? new Date(activeCourse.startDate) : undefined;    
                              const allBlocksFinished = student.activeCourse?.blocks?.every(block => block.isFinished) || false;
                          
                              return (
                                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-200" key={student.id}>
                                  <td className="whitespace-nowrap px-6 py-4 font-medium"></td>
                                  <td className="whitespace-nowrap px-6 py-4">{student.name}</td>
                                  <td className="whitespace-nowrap px-6 py-4">{student.subName}</td>
                                  <td className="whitespace-nowrap px-6 py-4">{student.job}</td>
                                  <td className="whitespace-nowrap px-6 py-4"><progress value={student.courses.find(course => course.courseId === student.activeCourse?.id)?.progress || 0} max="100"></progress></td>
                                  <td className="whitespace-nowrap px-6 py-4">{startDate instanceof Date ? startDate.toLocaleDateString() : ''}</td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    <div className="flex">
                                      <div className="flex-grow">
                                        <MultipleSelectCheckmarks 
                                          tag="Bloques" 
                                          names={student.activeCourse?.blocks?.map(block => block.name) || []}
                                          checkedNames={student.activeCourse?.blocks?.filter(block => block.isFinished).map(block => block.name) || []}                                      
                                          onCheckChange={(checkedNames) => {
                                            onBlocksChange(student.id, checkedNames);
                                          }}
                                        />
                                      </div>
                                    </div>
                                      {allBlocksFinished && (
                                        <div className="flex items-center justify-center">
                                          <button 
                                            className="flex-none mx-auto block border-2 bg-teal-500 text-white border-500 rounded text-center text-xs h-8 leading-tight whitespace-nowrap px-2 ml-2 " 
                                            onClick={() => finishCourse(student.id)}>
                                            Finalizar curso
                                          </button>
                                        </div>
                                      )}
                                  </td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                  ))
                }
              </div>
            </div>
        </div>
    </div>
  )
}
