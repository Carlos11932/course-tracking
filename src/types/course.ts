export interface Course {
  id: number;
  name: string;
  type: string;
  minutes: number;
  students?: StudentProgress[];
  isFinished: number[];
  comments?: Comment[];
  blocks: Block[];
}

export interface StudentProgress {
  studentId: number;
  progress: number;
  isFinished: boolean;
}

export interface Comment {
  id: number;
  studentId: number;
  text: string;
  date: Date;
}

export interface Block {
  id: number;
  name: string;
  content: string;
  minutes: number;
  isFinished: boolean;
}