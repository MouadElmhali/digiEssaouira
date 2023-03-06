import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Image from "next/image";

import Section from "../../components/Section";
import { GET_GRADUATES_BY_ID } from "../../graphql/graduates/queries";
import { initializeApollo } from "../../apolloClient";
import { useRouter } from "next/router";

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

const ShareButton = ({ url }) => {

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: url,
      });
    }
  };

  return (

    <button className="flex items-center justify-center bg-primary  text-white font-bold py-2 px-4 rounded w-40" onClick={handleShare}>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    <span>شارك </span>
  </button>
  
  );
};


export default function Association({
  getAssociationById,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const {
    post,
    name,
    bio,
    pictureUrl,
  } = getAssociationById["getGraduatesById"];
  const router = useRouter();
  const { asPath } = router;
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
              <ShareButton url={asPath} />
            </div>
          </div>

        </Section>
      </main>
    </>
  );
}
