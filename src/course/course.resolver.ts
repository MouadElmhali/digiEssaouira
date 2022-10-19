import { Types } from "mongoose";
import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { Inject, Service } from "typedi";
import { InstructorService } from "../instructor/instructor.service";
import { Instructor } from "../instructor/models/instructor.model";
import { CourseService } from "./course.service";
import { IGetCourseByIdDto } from "./dto/get-course-by-id.dto";
import { Course } from "./models/course.model";

@Service()
@Resolver((type) => Course)
export class CourseResolver {
  constructor(
    @Inject()
    private readonly courseService: CourseService,
    @Inject()
    private readonly instructorService: InstructorService
  ) {}

  @Query((returns) => [Course])
  async courses(): Promise<Course[]> {
    return await this.courseService.getCourses();
  }

  @Query((returns) => Course)
  async course(@Arg("args") { id }: IGetCourseByIdDto): Promise<Course | null> {
    return await this.courseService.getCourse(id);
  }

  @FieldResolver((type) => Instructor)
  async instructor(
    @Root("instructor") instructor: Types.ObjectId
  ): Promise<Instructor> {
    return await this.instructorService.getInstructor(instructor);
  }
}
