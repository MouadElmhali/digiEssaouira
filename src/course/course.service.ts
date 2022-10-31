import { Types } from "mongoose";
import { Service } from "typedi";
import { Course } from "./models/course.model";
import { Quiz } from "./models/quiz.model";
import { courseModel } from "./schemas/course.shcema";

// const answerId = new Types.ObjectId();

// const quiz = {
//   questions: [
//     {
//       _id: new Types.ObjectId(),
//       question: "How old are u ?",
//       options: [
//         {
//           _id: new Types.ObjectId(),
//           option: "10",
//         },
//         {
//           _id: answerId,
//           option: "20",
//         },
//         {
//           _id: new Types.ObjectId(),
//           option: "30",
//         },
//         {
//           _id: new Types.ObjectId(),
//           option: "40",
//         },
//       ],
//       correctAnswer: answerId,
//     },
//   ],
// };

@Service()
export class CourseService {
  async getCourses(): Promise<Course[]> {
    return await courseModel.find();
  }

  async getCourse(id: string): Promise<Course | null> {
    return await courseModel.findById(id);
  }

  async getQuizByCourseId(id: string): Promise<Quiz> {
    return ((await courseModel.findById(id)) as Course).quiz;
  }
}
