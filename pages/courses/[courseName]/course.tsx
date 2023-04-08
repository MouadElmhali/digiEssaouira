import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import YouTube from "react-youtube";
import { useState } from "react";

import Link from "next/link";
import { initializeApollo } from "../../../apolloClient";
import {
  IGetCourseByIdData,
  IGetCourseByIdVariables,
} from "../../../graphql/courses/types";
import { GET_COURSE_BY_ID } from "../../../graphql/courses/queries";
import { routes } from "../../../constants/routes";

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
  course: { name, sections, id },
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const youtube_parser = (url: string): any => {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  };

  const [videoUrl, setVideoUrl] = useState<string>(
    youtube_parser(sections[0].content[0])
  );

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const [hide,setHide] = useState(true);

  return (
    <div className="grid sm:grid-cols-4 w-full mt-32 sm:mt-40 ">
      <div className="sidebar hidden sm:block  lg:left-0 p-2 w-full overflow-y-auto text-center bg-gray-50">
        <div className=" text-xl">
          <div className="p-2.5 mt-1 flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>

            <h1 className="font-bold text-black  text-[15px] ml-3">
              محتوى الدورة
            </h1>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        {sections.map((section) => {
          return (
            <div
              key={section.title}
              className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-primary text-black "
              onClick={() => setVideoUrl(youtube_parser(section.content[0]))}
            >
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
              <span className="text-[15px] mr-2">{section.title}</span>
            </div>
          );
        })}
        <div className=" text-xl mt-10">
          <div className="p-2.5 mt-1 flex items-center gap-x-2">
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
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>

            <h1 className="font-bold text-black  text-[15px] ml-3">اختبار</h1>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]" />
          <Link
            href={{
              pathname: routes.quiz.makePath?.(name),
              query: { courseId: id },
            }}
          >
            <a>
              <div className="flex rounded-md px-2 justify-between items-center hover:bg-primary hover:text-white hover:cursor-pointer">
                اختبار
                <span className="text-3xl">&#8598;</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="sm:col-span-3">
        <div className="bg-primary w-full text-white p-5 ">
          <div className="flex items-center justify-between">
            <button className="sm:hidden" onClick={()=>{setHide(!hide)}}>
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
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <span>{name}</span>
          </div>
          <div className={`sm:hidden text-xl ${hide ? "hidden":"visible"}`}>
            <div className="p-2.5 mt-1 flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>

              <h1 className="font-bold text-white  text-[15px] ml-3">
                محتوى الدورة
              </h1>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>
          {sections.map((section) => {
            return (
              <div
                key={section.title}
                className={` ${hide ? "hidden":"visible"} sm:hidden p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-primary text-white `}
                onClick={() => setVideoUrl(youtube_parser(section.content[0]))}
              >
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
                <span className="text-[15px] mr-2 text-white">{section.title}</span>
              </div>
            );
          })}
          <div className={` ${hide ? "hidden":"visible"} sm:hidden text-xl mt-5 `}>
            <div className="p-2.5 mt-1 flex items-center gap-x-2">
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
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>

              <h1 className="font-bold text-white  text-[15px] ml-3">اختبار</h1>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]" />
            <Link
              href={{
                pathname: routes.quiz.makePath?.(name),
                query: { courseId: id },
              }}
            >
              <a>
                <div className="flex rounded-md px-2 justify-between items-center hover:bg-primary hover:text-white hover:cursor-pointer">
                  اختبار
                  <span className="text-3xl">&#8598;</span>
                </div>
              </a>
            </Link>
          </div>
        </div>

        <YouTube
          videoId={videoUrl}
          opts={opts}
          className="w-full h-60 sm:h-[600px]"
        />
      </div>
    </div>
  );
}
