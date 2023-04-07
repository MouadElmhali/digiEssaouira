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
import Link from "next/link";
import { routes } from "../../../constants/routes";
import { getCurrentUser } from "../../../components/utils/index";
import YouTube from "react-youtube";

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
  course: { description, sections, instructor, video, name, id },
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const verifyToken = getCurrentUser();
  const youtube_parser = (url: string): any => {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  };
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <main className="mt-28 sm:mt-36 p-8 grid gap-8 sm:grid-cols-2 ">
      <div className="flex justify-center sm:col-span-2 ">
        <YouTube
          videoId={youtube_parser(video)}
          opts={opts}
          className="w-full sm:w-3/4 h-56 sm:h-[500px] mt-10"
        />
      </div>
      <div className="col-span-full flex justify-center">
        {verifyToken ? (
          <Link
            href={{
              pathname: routes.course.makePath?.(name),
              query: { courseId: id },
            }}
          >
            <a>
              <div className="flex gap-x-4 items-center bg-primary/30 py-2 px-4    hover:outline-primary hover:outline-2 hover:outline-dashed font-bold">
                ابدأ الدورة
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
            </a>
          </Link>
        ) : (
          <Link href={"/signIn"} >
            <a>
              <div className="flex gap-x-4 items-center text-white text-2xl bg-primary py-4 px-11  hover:outline-primary hover:outline-2 hover:outline-dashed font-bold">
                ابدأ الدورة
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
            </a>
          </Link>
        )}
      </div>
      <LittleSection title="المحتويات" className="col-span-full">
        <ul className="[&>li:not(:first-child)]:border-t-0 [&>li:first-child]:rounded-t-sm [&>li:last-child]:rounded-b-sm">
          {sections.map(({ title, content }) => (
            <li key={title} className="border-2 border-gray-200 bg-gray-100">
              {/* <details>
                <summary className="p-2 font-bold">{title}</summary>
                <ul className="p-2  border-t-2 border-gray-200 bg-white">
                  {content.map((part) => (
                    <li key={part}>{part}</li>
                  ))}
                </ul>
              </details> */}
              <summary className="p-2 font-bold">{title}</summary>
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
            src={`/images/instructors/${instructor?.pictureUrl}`}
            className="rounded-full"
            objectFit="cover"
            alt={`Picture of ${combineStrings([
              instructor?.firstName,
              instructor?.lastName,
            ])}`}
          />
          <div className="text-primaryDarker flex flex-col self-center gap-y-2">
            <p className="text-lg">
              {nameWithTitle(instructor?.firstName, instructor?.lastName, instructor?.title)}
            </p>
            <p className="font-bold text-sm">{instructor?.post?.name}</p>
          </div>
        </div>
      </LittleSection>

      <LittleSection
        title="شارك المساق مع الاخرين"
        className="[&>h2]:sm:text-center"
      >
        <div className="flex gap-4 sm:justify-center">
          {["twitter", "instagram", "facebook"].map((socialMedia) => (
            <Image
              key={socialMedia}
              alt=""
              height={50}
              width={50}
              src={`/images/icons/${socialMedia}.png`}
            />
          ))}
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
