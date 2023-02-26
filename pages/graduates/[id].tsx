import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Image from "next/image";

import Section from "../../components/Section";
import { GET_GRADUATES_BY_ID } from "../../graphql/graduates/queries";
import { initializeApollo } from "../../apolloClient";

interface IContext {
  params: { id: string };
}

export async function getServerSideProps({
  params: { id },
}: IContext) {
  const client = initializeApollo();

  const { data: getAssociationById } = await client.query({
    query: GET_GRADUATES_BY_ID,
    variables: { id: id },
  });

  return { props: { getAssociationById } };
}

export default function Association({
    getAssociationById,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const {
    post,
    name,
    bio,
    pictureUrl,
  } = getAssociationById["getGraduatesById"];
  return (
    <>
      <Head>
        <title>DigiEssaouira | المنتخبين</title>
      </Head>

      <main className="mt-20">
        <Section className="py-20">
          <div className="flex flex-col items-center gap-y-5  gap-x-8 sm:grid sm:grid-cols-[auto,_1fr] sm:grid-rows-[repeat(4,_auto)] shadow-w">
            <div className="row-span-full ">
              <Image
                alt=""
                width={300}
                height={350}
                src={`/images/graduates/${pictureUrl}`}
                objectFit="cover"
                layout="fixed"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-primaryDarker text-4xl font-bold">{name}</p>
              <div className="text-xl mt-5">  {post}</div>
              <div className="text-xl mt-5">
                {bio} 
              </div>
           
            </div>
          </div>

        </Section>
      </main>
    </>
  );
}
