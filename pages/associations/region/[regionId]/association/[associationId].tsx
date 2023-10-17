import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Image from "next/image";

import { initializeApollo } from "../../../../../apolloClient";
import Header from "../../../../../components/Header";
import Section from "../../../../../components/Section";
import { GET_ASSOCIATION_BY_ID } from "../../../../../graphql/association/queries";

interface IContext {
  params: { associationId: string };
}

export async function getServerSideProps({
  params: { associationId },
}: IContext) {
  const client = initializeApollo();

  const { data: association } = await client.query({
    query: GET_ASSOCIATION_BY_ID,
    variables: { id: associationId },
  });

  return { props: { association } };
}

export default function Association({
  association,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const {
    name,
    fieldOfWork,
    prisident,
    pictureUrl,
    pictureGallery,
    email,
    phone,
    facebook,
    instagram,
    twitter,
  } = association["getAssociationById"];

  return (
    <>
      <Head>
        <title>DigiEssaouira | المنتخبين</title>
      </Head>

      <main className="mt-20 text-center md:text-right">
        <Section className="py-20" childrenClassName="w-full md:px-24">
          <div className="flex flex-col items-center justify-center gap-y-5  gap-x-8 sm:grid sm:grid-cols-[auto,_1fr] sm:grid-rows-[repeat(4,_auto)] shadow-w">
            <div className="row-span-full ">
              <Image
                alt=""
                width={300}
                height={350}
                src={`/images/association/${pictureUrl}`}
                objectFit="cover"
                layout="fixed"
              />
            </div>
            <div className="flex flex-col items-center md:items-start  gap-3">
              <p className="text-primaryDarker text-4xl font-bold">{name}</p>
              <div className="text-xl mt-5"> الرئيس: {prisident}</div>
              <div className="text-xl mt-5">مجال الإشتغال: {fieldOfWork}</div>
              <div className="text-xl mt-5">
                {phone} - {email}
              </div>
              <div className="flex justify-center md:justify-start mt-5 w-full ">
                <a
                  href={facebook}
                  className="transition ease-in-out duration-200 hover:scale-110"
                >
                  <Image
                    alt=""
                    width={32}
                    height={32}
                    src={`/images/icons/facebook.png`}
                    objectFit="cover"
                    layout="fixed"
                  />
                </a>
                <a
                  href={instagram}
                  className="mr-3 transition ease-in-out duration-200 hover:scale-110"
                >
                  <Image
                    alt=""
                    width={32}
                    height={32}
                    src={`/images/icons/instagram.png`}
                    objectFit="cover"
                    layout="fixed"
                  />
                </a>
                <a
                  href={twitter}
                  className="mr-3 transition ease-in-out duration-200 hover:scale-110"
                >
                  <Image
                    alt=""
                    width={32}
                    height={32}
                    src={`/images/icons/twitter.png`}
                    objectFit="cover"
                    layout="fixed"
                  />
                </a>
              </div>
            </div>
          </div>
          <h1 className="text-primaryDarker text-4xl text-center font-bold my-10">
            معرض الصور
          </h1>
          <div className="grid md:grid-cols-4 gap-4 items-center justify-center">
            {
              // @ts-ignore
              pictureGallery.map((picture, index) => {
                return (
                  <div
                    key={index}
                    className="relative w-64 h-72  bg-black overflow-hidden shadow-lg transition ease-in-out duration-200 hover:scale-105 rounded-lg"
                  >
                    <Image
                      layout="fill"
                      src={`/images/association/${picture}`}
                      objectFit="contain"
                      className="cursor-pointer w-full h-full  bg-white bg-[url('/images/loading.gif')] bg-no-repeat bg-center"
                    />
                  </div>
                );
              })
            }
          </div>
        </Section>
      </main>
    </>
  );
}
