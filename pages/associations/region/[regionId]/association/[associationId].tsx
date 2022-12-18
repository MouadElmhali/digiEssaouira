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

      <main className="mt-20">
        <Section className="py-20">
          <div className="flex flex-col items-center gap-y-5  gap-x-8 sm:grid sm:grid-cols-[auto,_1fr] sm:grid-rows-[repeat(4,_auto)] shadow-w">
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
            <div className="flex flex-col gap-3">
              <p className="text-primaryDarker text-4xl font-bold">{name}</p>
              <div className="text-xl mt-5"> الرئيس: {prisident}</div>
              <div className="text-xl mt-5">مجال الإشتغال: {fieldOfWork}</div>
              <div className="text-xl mt-5">
                {phone} - {email}
              </div>
              <div className="flex mt-5 w-full">
                <a href={facebook}>
                  <Image
                    alt=""
                    width={32}
                    height={32}
                    src={`/images/icons/facebook.png`}
                    objectFit="cover"
                    layout="fixed"
                  />
                </a>
                <a href={instagram} className="mr-3">
                  <Image
                    alt=""
                    width={32}
                    height={32}
                    src={`/images/icons/instagram.png`}
                    objectFit="cover"
                    layout="fixed"
                  />
                </a>
                <a href={twitter} className="mr-3">
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
          <div className="grid items-center justify-center md:grid-cols-4 gap-4">
            {
              // @ts-ignore
              pictureGallery.map((picture, index) => {
                return (
                  <Image
                    alt=""
                    width={300}
                    height={350}
                    src={`/images/association/${picture}`}
                    objectFit="cover"
                    layout="fixed"
                    key={index}
                    className="transform transition duration-500 hover:scale-125"
                  />
                );
              })
            }
          </div>
        </Section>
      </main>
    </>
  );
}
