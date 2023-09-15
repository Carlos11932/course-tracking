import { Route, Routes } from 'react-router-dom';

import { CourseManagementRoutes } from '../courseManagement/routes/CourseManagementRoutes';



export const AppRouter = () => {
  return (
    <>

        <Routes>
            <Route path="/*" element={ <CourseManagementRoutes /> } />
        </Routes>
    
    </>
  )
}
