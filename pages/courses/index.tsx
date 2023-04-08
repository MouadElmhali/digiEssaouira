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
        title = "مساقات تدريبية متخصصة في مجال المشاركة العامة الديمقراطية"
        image = "/images/courses-svg.svg"
      >
       
      </Header>

      <main>
        <Section>
          <div className="grid  grid-cols-1 sm:grid-cols-4 gap-5">
            {courses.map(({ id, name, pictureUrl }) => (
              <div key={id} className="min-w-[180px]">
                <Link href={{
                  pathname: `${routes.courses.path}/${name}`,
                  query: {courseId : id},
                }}>
                <a className="flex flex-col gap-4  h-full">
                  <Image height={250} width={200} className="object-fill h-[75%]"  alt="" src={`/images/courses/${pictureUrl}`} />
                  <div className="bg-primary text-white font-bold text-lg text-center py-5 px-3 h-[25%]">
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
