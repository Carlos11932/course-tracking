import { NavLink, useLocation } from 'react-router-dom';
import '../../index.css'


export const Navbar = () => {

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-3xl tracking-tight">Course tracker</span>
            </div>
            <div className="w-full block flex-right lg:flex lg:items-center lg:w-auto">
                <div className="text-xl lg:flex-grow">
                    <NavLink to="/inicio" className={`block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 mr-4 ${useLocation().pathname === "/inicio" ? "text-teal-800": "text-white" }`}>
                        Inicio
                    </NavLink>
                    <NavLink to="/alumnos" className={`block mt-4 lg:inline-block lg:mt-0  hover:text-teal-200 mr-4 ${useLocation().pathname === "/alumnos" ? "text-teal-800": "text-white" }`}>
                        Alumnos
                    </NavLink>
                    <NavLink to="/cursos" className={`block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 mr-4 ${useLocation().pathname === "/cursos" ? "text-teal-800": "text-white" }`}>
                        Cursos
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}