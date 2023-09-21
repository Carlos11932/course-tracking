import { useContext } from 'react'

import { AppContext } from '../../appContext/AppContext'
import {StudentsCoursesList} from '../../mainPage/components/StudentsCoursesList'

export const MainPage = () => {

  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error("AppContext is null");
  }

  const { students, updateStudentBlocks, finishStudentCourse } = appContext;

  const handleBlocksChange = (studentId: number, checkedNames: string[]) => {
    updateStudentBlocks(studentId, checkedNames);
  }

  const handleFinishCourse = (studentId: number) => {
    finishStudentCourse(studentId);
  }


  return (
    <>
      <div className="m-20">
        <div className="grid grid-cols-10 grid-rows-10">
          <div className="row-start-4 col-start-2 col-end-9">
          <StudentsCoursesList 
            students={students}
            onBlocksChange={handleBlocksChange}
            finishCourse={handleFinishCourse}
          />
          </div>
        </div>
      </div>

    </>
  )
}
  