import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { initializeApollo } from "../../apolloClient";
import Header from "../../components/Header";
import LinkCard from "../../components/LinkCard";
import Section from "../../components/Section";
import { routes } from "../../constants/routes";
import { GET_GRADUATES } from "../../graphql/graduates/queries";
import { IGetCoursesData } from "../../graphql/courses/types";
import Link from "next/link";
import Image from "next/image";

export async function getServerSideProps() {
  const client = initializeApollo();
  const {
    data: { getGraduates },
  } = await client.query({
    query: GET_GRADUATES,
  });

  return {
    props: {
      getGraduates,
    },
  };
}

export default function Graduates({
  getGraduates,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  return (
    <>
      <Head>
        <title>DigiEssaouira | خريجي</title>
      </Head>
      <main>
        <Section className="mx-8 md:mx-auto">
          <h1 className="text-2xl font-semibold text-center text-primaryDarker mt-20 md:mt-36 mb-10">
            خريجي DIGIESSAOUIRA
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8 ">
            {getGraduates.map(({ id, post, name, pictureUrl }: any) => (
              <div
                key={id}
                className="max-w-[15rem] rounded-lg overflow-hidden shadow-lg transition ease-in-out duration-200 hover:scale-105"
              >
                <Link
                  href={{
                    pathname: `${routes.graduates.path}/${id}`,
                  }}
                >
                  <a className="flex flex-col h-full">
                    <Image
                      height={400}
                      width={400}
                      className="bg-white  bg-[url('/images/loading.gif')] bg-cover bg-no-repeat bg-center"
                      alt={name}
                      src={`/images/graduates/${pictureUrl}`}
                      objectFit="contain"
                    />

                    <div className="bg-primary text-white font-bold text-center py-3 overflow-hidden">
                      {name} <br />
                      {post}
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
