import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Image from "next/image";

import { initializeApollo } from "../../../../../apolloClient";
import Header from "../../../../../components/Header";
import Section from "../../../../../components/Section";
import { GET_ELECTED } from "../../../../../graphql/elected/queries";
import {
  IElected,
  IGetElectedData,
  IGetElectedVariables,
} from "../../../../../graphql/elected/types";
import { combineStrings } from "../../../../../utils";

interface IContext {
  params: { electedId: string };
}

export async function getServerSideProps({ params: { electedId } }: IContext) {
  const client = initializeApollo();

  const {
    data: { elected },
  } = await client.query<IGetElectedData, IGetElectedVariables>({
    query: GET_ELECTED,
    variables: { args: { id: electedId } },
  });

  return { props: { elected } };
}

export default function Branch({
  elected,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const {
    pictureUrl,
    firstName,
    lastName,
    post: { name: post },
    party: { name: party },
    phoneNumber,
  } = elected as IElected;

  return (
    <>
      <Head>
        <title>DigiEssaouira | المنتخبين</title>
      </Head>
      {/* <Header
        isHero
        styles="bg-[url('/images/elections-hero.jpg')] after:bg-black/40"
      >
        <h1 className="text-7xl">المنتخبين</h1>
      </Header> */}
      <main className="mt-20">
        <Section className="py-20">
          <div className="flex flex-col items-center gap-y-5  gap-x-8 sm:grid sm:grid-cols-[auto,_1fr] sm:grid-rows-[repeat(4,_auto)] shadow-w">
            <div className="row-span-full ">
              <Image
                alt=""
                width={300}
                height={350}
                src={`/images/electeds/${pictureUrl}`}
                objectFit="cover"
                layout="fixed"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-primaryDarker text-4xl font-bold">
                {combineStrings([firstName, lastName])}
              </p>
              <p className="text-3xl ">{post}</p>
              <p className="text-2xl ">{party}</p>
            </div>
            <button className="primary-button row-start-4 justify-self-start">
              اتصل بالمسؤول المنتخب
            </button>
          </div>
        </Section>
      </main>
    </>
  );
}
