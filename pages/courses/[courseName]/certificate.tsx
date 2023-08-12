import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TextOnImage from "../../../components/certificateDownload";
import { getCurrentUser } from "../../../components/utils";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { initializeApollo } from "../../../apolloClient";
import {
  IGetCourseByIdData,
  IGetCourseByIdVariables,
} from "../../../graphql/courses/types";
import { GET_COURSE_BY_ID } from "../../../graphql/courses/queries";
import { ParsedUrlQuery } from "querystring";

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

export default function Quiz({
  course: { description, sections, instructor, video, name, id },
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  const { courseName } = useRouter().query;
  const query = useRouter().query;
  const currentUser = getCurrentUser();

  useEffect(() => {
    if (!currentUser) router.push("/signIn");

    setIsClient(true);
  }, []);

  return (
    <div className="mt-40 py-10 px-5 min-h-[65vh] w-full flex flex-col items-center sm:h-screen">
      <div className="text-center text-2xl">
        <h1>لقد أكملت دورة </h1>
        <h1 className="font-bold"> {courseName} </h1>
      </div>
      <Image
        src="/images/certification.png"
        alt="certification"
        width={300}
        height={300}
        objectFit="cover"
      />

      <TextOnImage
        text={currentUser?.user_userName ?? ""}
        userName={currentUser?.user_userName ?? ""}
        courseName={courseName}
        instructor={instructor}
      />
    </div>
  );
}
