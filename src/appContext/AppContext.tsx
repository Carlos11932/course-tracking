import React from 'react';
import { Student, Course } from "../types";

type AppContextType = {
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  updateStudentCourse: (studentId: number, courseId: number) => void;
  updateStudentBlocks: (studentId: number, checkedNames: string[]) => void;
};

export const AppContext = React.createContext<AppContextType | null>(null);