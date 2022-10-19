import { Types } from "mongoose";
import { Service } from "typedi";
import { Instructor } from "./models/instructor.model";
import { instructorModel } from "./schemas/instructor.schema";

@Service()
export class InstructorService {
  async getInstructor(id: Types.ObjectId): Promise<Instructor> {
    return (await instructorModel.findById(id)) as Instructor;
  }
}
