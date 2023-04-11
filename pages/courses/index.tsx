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
import { useRouter } from "next/router";


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
      >

      </Header>

      <main>
        
      <div className='mb-48 2xl:max-w-[120rem]'>
        <div className='mt-24 mx-auto xl:mx-44 2xl:mx-64 flex flex-row flex-wrap gap-8  justify-center items-center'>
          {courses.map(({ id, name, pictureUrl }) => (
              <button key={id} onClick={() => router.push(`${routes.courses.path}/${name}`)}>
                  <div
                      className="h-96 w-72 2xl:w-96 bg-black overflow-hidden shadow-xl"
                  >
                      <img 
                          src={"/images/courses/" + pictureUrl}
                          className="object-cover w-full h-72"
                      />
                      <div className='flex flex-col mx-5 my-2 items-center justify-center'>
                          <p className='text-white text-xl font-bold' dangerouslySetInnerHTML={{ __html: name.length > 85 ? name.slice(0, 85) + " ..." : name }}></p>
                      </div>
                  </div>
              </button>
          ))}
        </div>
      </div>
      </main >
    </>
  );
}
