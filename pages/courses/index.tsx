import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { initializeApollo } from "../../apolloClient";
import Header from "../../components/Header";
import { GET_COURSES_NAME_AND_PICTURE } from "../../graphql/courses/queries";
import { IGetCoursesData } from "../../graphql/courses/types";
import { useRouter } from "next/router";
import CourseCard from "../../components/CourseCard";

export async function getServerSideProps() {
  const client = initializeApollo();
  const {
    data: { courses },
  } = await client.query<IGetCoursesData>({
    query: GET_COURSES_NAME_AND_PICTURE,
  });

  return {
    props: { courses },
  };
}

export default function Courses({
  courses,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>DigiEssaouira | المساقات</title>
      </Head>

      <Header
        isHero
        title="مساقات تدريبية متخصصة في مجال المشاركة العامة الديمقراطية"
        image="/images/courses-svg.svg"
      ></Header>

      <main>
        <div className="mb-48 2xl:max-w-[120rem]">
          <div className="mt-24 mx-auto xl:mx-44 2xl:mx-64 flex flex-row flex-wrap gap-8  justify-center items-center">
            {courses.map(({ id, name, pictureUrl }) => (
              <CourseCard
                key={id}
                onClick={() => {
                  router.push({
                    pathname: "/courses/" + name,
                    query: { courseId: id },
                  });
                }}
                src={"/images/courses/" + pictureUrl}
                text={name.length > 85 ? name.slice(0, 85) + " ..." : name}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
