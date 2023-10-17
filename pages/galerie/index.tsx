import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { initializeApollo } from "../../apolloClient";
import { GET_ARTICLES } from "../../graphql/article/queries";
import { InferGetServerSidePropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import ShowImage from "../../components/ShowImage/ShowImage";

export async function getServerSideProps() {
  const client = initializeApollo();
  const {
    data: { articles },
  } = await client.query({
    query: GET_ARTICLES,
  });

  return {
    props: {
      articles,
    },
  };
}

export default function Youth({
  articles,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const router = useRouter();
  const [picture, setPicture] = useState("");
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <Head>
        <title>DigiEssaouira | معرض الصور</title>
      </Head>
      <main className="width-full flex flex-column justify-center ">
        <div className="mt-48 mb-48">
          <div className="flex flex-row  justify-center md:justify-start items-center gap-2">
            <div className="sm:w-5 md:w-60 h-px bg-black"></div>
            <div className="flex items-center justify-center w-full relative left-2 md:left-24 ">
              <h2 className="text-6xl font-bold text-blue">معرض الصور</h2>
            </div>
          </div>
          <div className="mt-24  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-y-10">
            {articles.map(({ id, pictureUrl }: any) => (
              <div
                key={id}
                className="relative lg:w-96 h-72 bg-black overflow-hidden shadow-xl transition ease-in-out duration-200 hover:scale-110 rounded-lg"
                onClick={() => {
                  setPicture(pictureUrl);
                  setShowImage(true);
                }}
              >
                <Image
                  layout="fill"
                  src={"/images/articles/" + pictureUrl}
                  objectFit="contain"
                  className="cursor-pointer w-full h-full  bg-white bg-[url('/images/loading.gif')] bg-no-repeat bg-center"
                />
              </div>
            ))}
            {showImage ? (
              <ShowImage
                src={"/images/articles/" + picture}
                width={800}
                height={500}
                onClick={() => {
                  setShowImage(false);
                }}
              />
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
}
