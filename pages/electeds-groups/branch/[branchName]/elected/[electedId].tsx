import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";

import { initializeApollo } from "../../../../../apolloClient";
import Section from "../../../../../components/Section";
import { routes } from "../../../../../constants/routes";
import { GET_ELECTED } from "../../../../../graphql/elected/queries";
import {
  IGetElectedData,
  IGetElectedVariables,
} from "../../../../../graphql/elected/types";
import { combineStrings } from "../../../../../utils";

interface IParams extends ParsedUrlQuery {
  electedId: string;
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const { electedId: id } = params as IParams;

  const client = initializeApollo();
  const {
    data: { elected },
  } = await client.query<IGetElectedData, IGetElectedVariables>({
    query: GET_ELECTED,
    variables: { args: { id } },
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
  } = elected;

  return (
    <>
      <Head>
        <title>DigiEssaouira | المنتخبين</title>
      </Head>
      <main className="mt-32 mb-20 min-h-[60vh]">
        <Section className="md:pt-20 " childrenClassName="w-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="row-span-full overflow-hidden rounded-xl relative h-96 w-72">
              <Image
                alt={combineStrings([firstName, lastName])}
                src={`/images/electeds/${pictureUrl}`}
                layout="fill"
                objectFit= 'cover'
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="text-primaryDarker text-4xl font-bold">
                {combineStrings([firstName, lastName])}
              </p>
              <p className="text-3xl ">{post}</p>
              <p className="text-2xl ">{party}</p>
            </div>
            <Link href={routes.askQuestion.path ?? '#'}>
              <button className="primary-button row-start-4 justify-self-start rounded-lg transition ease-in-out duration-200 hover:scale-110">
 
                اتصل بالمسؤول المنتخب
              </button>
            </Link>
          </div>
        </Section>
      </main>
    </>
  );
}
