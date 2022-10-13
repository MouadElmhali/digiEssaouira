import { Service } from "typedi";
import { Course } from "./models/course.model";
import { courseModel } from "./schemas/course.shcema";

@Service()
export class CourseService {
  async getCourses(): Promise<Course[]> {
    return courseModel.find();
  }

  async getCourse(id: string): Promise<Course | null> {
    return courseModel.findById(id);
  }
}
