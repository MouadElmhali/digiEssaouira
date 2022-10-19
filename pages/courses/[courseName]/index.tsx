import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Image from "next/image";

import { ParsedUrlQuery } from "querystring";
import { ReactNode } from "react";
import { initializeApollo } from "../../../apolloClient";
import { GET_COURSE_BY_ID } from "../../../graphql/courses/queries";
import {
  IGetCourseByIdData,
  IGetCourseByIdVariables,
} from "../../../graphql/courses/types";
import { combineStrings, nameWithTitle } from "../../../utils";
import { qAndA } from "../../../data/q-and-a";

interface IQuery extends ParsedUrlQuery {
  courseId: string;
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const { courseId: id } = query as IQuery;
  const client = initializeApollo();
  const {
    data: { course },
  } = await client.query<IGetCourseByIdData, IGetCourseByIdVariables>({
    query: GET_COURSE_BY_ID,
    variables: { args: { id } },
  });

  return { props: { course } };
}

export default function Course({
  course: { description, sections, instructor },
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  return (
    <main className="mt-28 p-8 grid gap-8 sm:grid-cols-2">
      <video
        src="/videos/Spaceman-Jellyfish.mp4"
        className="sm:col-span-full"
      ></video>
      <LittleSection title="المحتويات" className="col-span-full">
        <ul className="[&>li:not(:first-child)]:border-t-0 [&>li:first-child]:rounded-t-sm [&>li:last-child]:rounded-b-sm">
          {sections.map(({ title, content }) => (
            <li key={title} className="border-2 border-gray-200 bg-gray-100">
              <details>
                <summary className="p-2 font-bold">{title}</summary>
                <ul className="p-2  border-t-2 border-gray-200 bg-white">
                  {content.map((part) => (
                    <li key={part}>{part}</li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </LittleSection>

      <LittleSection
        title="نبذة عن المساق"
        description={description}
        className="col-span-full"
      />

      <LittleSection title="مقدم المساق">
        <div className="flex gap-x-4">
          <Image
            width={112}
            height={112}
            src={`/images/instructors/${instructor.pictureUrl}`}
            className="rounded-full"
            objectFit="cover"
            alt={`Picture of ${combineStrings([
              instructor.firstName,
              instructor.lastName,
            ])}`}
          />
          <div className="text-primaryDarker flex flex-col self-center gap-y-2">
            <p className="text-lg">
              {nameWithTitle(instructor.firstName, instructor.lastName, "D")}
            </p>
            <p className="font-bold text-sm">{instructor.post.name}</p>
          </div>
        </div>
      </LittleSection>

      <LittleSection
        title="شارك المساق مع الاخرين"
        className="[&>h2]:sm:text-center"
      >
        <div className="flex gap-4 sm:justify-center">
          <Image
            alt=""
            height={50}
            width={50}
            src="/images/icons/twitter.png"
          />
          <Image
            alt=""
            height={50}
            width={50}
            src="/images/icons/instagram.png"
          />
          <Image
            alt=""
            height={50}
            width={50}
            src="/images/icons/facebook.png"
          />
        </div>
      </LittleSection>

      <LittleSection
        title="الأسئلة الشائعة"
        className="[&>h2]:sm:text-center sm:col-span-full"
      >
        <ul className="[&>li:not(:first-child)]:border-t-0 [&>li:first-child]:rounded-t-sm [&>li:last-child]:rounded-b-sm">
          {qAndA.map(({ question, answer }) => (
            <li key={question} className="border-2 border-gray-200 bg-gray-100">
              <details>
                <summary className="p-2 font-bold">{question}</summary>
                <ul className="p-2  border-t-2 border-gray-200 bg-white">
                  {Array.isArray(answer) ? (
                    answer.map((part) => <li key={part}>{part}</li>)
                  ) : (
                    <p>{answer}</p>
                  )}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </LittleSection>
    </main>
  );
}

interface LittleSectionProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

const LittleSection = ({
  title,
  description,
  children,
  className,
}: LittleSectionProps): JSX.Element => (
  <div className={`flex flex-col gap-y-5 ${className}`}>
    <h2 className="text-primaryDarker font-bold text-2xl">{title}</h2>
    {description ? <p className="text-gray-600 ">{description}</p> : children}
  </div>
);
