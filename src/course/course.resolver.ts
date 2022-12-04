import { Types } from "mongoose";
import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { Inject, Service } from "typedi";
import { InstructorService } from "../instructor/instructor.service";
import { Instructor } from "../instructor/models/instructor.model";
import { CourseService } from "./course.service";
import { IGetCourseByIdDto } from "./dto/get-course-by-id.dto";
import { IGetQuizByCourseIdDto } from "./dto/get-quiz-by-course-id.dto";
import { Course } from "./models/course.model";
import { Option, Quiz } from "./models/quiz.model";

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

  @Query((returns) => Quiz)
  async quizByCourseId(
    @Arg("args") { id }: IGetQuizByCourseIdDto
  ): Promise<Quiz> {
    return await this.courseService.getQuizByCourseId(id);
  }

  // @FieldResolver((type) => Instructor)
  // async correctAnswer(
  //   @Root("quiz") quiz: Quiz
  // ): Promise<Option> {
  //   const  {questions: } = quiz
  //   return await this.instructorService.getInstructor(instructor);
  // }

  @FieldResolver((type) => Instructor)
  async instructor(
    @Root("instructor") instructor: Types.ObjectId
  ): Promise<Instructor> {
    return await this.instructorService.getInstructor(instructor);
  }
}
