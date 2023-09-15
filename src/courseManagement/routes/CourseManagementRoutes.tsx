import { Navigate, Route, Routes } from 'react-router-dom';
import { StudentsPage, CoursesPage, MainPage } from '../pages/index.d';
import { Navbar } from '../../ui/components/index.d';


export const CourseManagementRoutes = () => {
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path="alumnos" element={< StudentsPage/>} />
          <Route path="cursos" element={< CoursesPage />} />
          <Route path="inicio" element={< MainPage />} />
          <Route path="/" element={<Navigate to="/inicio" />} />
        </Routes>
      </div>
    </>
  );
}

