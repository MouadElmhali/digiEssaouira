import { ISection } from "../../src/course/schemas/section.schema";
import { IInstructor } from "../instructor/types";

export interface ICourse {
  id: string;
  name: string;
  description: string;
  pictureUrl: string;
  sections: ISection[];
  instructor: IInstructor;
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
