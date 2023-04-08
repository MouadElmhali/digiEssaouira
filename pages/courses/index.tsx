import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { initializeApollo } from "../../apolloClient";
import Header from "../../components/Header";
import LinkCard from "../../components/LinkCard";
import Section from "../../components/Section";
import { routes } from "../../constants/routes";
import { GET_COURSES_NAME_AND_PICTURE } from "../../graphql/courses/queries";
import { IGetCoursesData } from "../../graphql/courses/types";
import Link from "next/link";
import Image from "next/image";


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
  return (
    <>
      <Head>
        <title>DigiEssaouira | المساقات</title>
      </Head>

      <Header
        isHero
        title="مساقات تدريبية متخصصة في مجال المشاركة العامة الديمقراطية"
        image="/images/courses-svg.svg"
      >

      </Header>

      <main>
        <Section>
          <div className="grid  grid-cols-1 sm:grid-cols-4 gap-5">
            {courses.map(({ id, name, pictureUrl }) => (
              <div key={id} className="bg-primary shadow-2xl overflow-hidden flex-1 2xl:mx-10 xl:mx-5 md:mx-2 sm:w-[220px] pb-2"
              >
                <Link href={{
                  pathname: `${routes.courses.path}/${name}`,
                  query: { courseId: id },
                }}>
                  <a className="flex flex-col gap-4  h-full">
                    <img src={`/images/courses/${pictureUrl}`} className="w-full h-60 object-cover" />
                    <div
                      className="px-4 py-2 pb-px">
                      <p className="text-white px-3 text-center">{name}</p>
                    </div>
                  </a>
                </Link>
              </div>

            ))}
          </div>
        </Section>
      </main >
    </>
  );
}
