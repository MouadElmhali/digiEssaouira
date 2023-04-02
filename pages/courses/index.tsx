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
        styles="bg-[url('/images/courses-hero.jpg')] after:bg-black/50"
      >
        <h1 className="text-7xl">المساقات</h1>
      </Header>

      <main>
        <Section>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
            {courses.map(({ id, name, pictureUrl }) => (
              <div key={id} className="min-w-[180px]">
                <Link href={{
                  pathname: `${routes.courses.path}/${name}`,
                  query: {courseId : id},
                }}>
                <a className="flex flex-col gap-4 flex-1 h-full flex-wrap">
                  <Image height={200} width={300} className="object-fill" alt="" src={`/images/courses/${pictureUrl}`} />
                  <div className="bg-primary text-white font-bold text-lg text-center py-5 px-3">
                    {name}
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
