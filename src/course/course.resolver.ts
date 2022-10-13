import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import { Inject, Service } from "typedi";
import { InstructorService } from "../instructor/instructor.service";
import { Instructor } from "../instructor/models/instructor.model";
import { CourseService } from "./course.service";
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
    return this.courseService.getCourses();
  }

  @FieldResolver()
  async instructor(
    @Root("instructor") instructor: string
  ): Promise<Instructor> {
    return await this.instructorService.getInstructor(instructor);
  }
}
