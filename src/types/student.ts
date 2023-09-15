import { Course, Block } from './course'

export interface Student {
  id: number;
  name: string;
  subName: string;
  job: string;
  activeCourse: Course | undefined;
  activeCourseProgress: number | undefined;
  courses: StudentCourse[];
}

export interface StudentCourse {
  name: string
  courseId: number;
  progress: number;
  isFinished: boolean;
  startDate: Date;
  endDate?: Date;
  blocks: Block[]
}