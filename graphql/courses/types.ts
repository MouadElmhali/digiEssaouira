import { ISection } from "../../src/course/schemas/course.shcema";
import { IInstructor } from "../instructor/types";

export interface ICourse {
  id: string;
  name: string;
  description: string;
  pictureUrl: string;
  sections: ISection[];
  instructor: IInstructor;
  quiz: IQuiz;
}

export interface IGetCoursesData {
  courses: ICourse[];
}

export interface IGetCourseByIdData {
  course: ICourse;
}

export interface IGetCourseByIdVariables {
  args: {
    id: string;
  };
}
export interface IGetQuizByCourseIdData {
  quizByCourseId: IQuiz;
}

export interface IGetQuizByCourseIdVariables {
  args: {
    id: string;
  };
}

export interface IOption {
  id: string;
  option: string;
}

export interface IAnswer {
  question: string;
  givenAnswer: string;
  correctAnswer: string;
}

export interface IQuestion {
  id: string;
  question: string;
  options: IOption[];
  correctAnswer: string;
}

export interface IQuiz {
  questions: IQuestion[];
}
