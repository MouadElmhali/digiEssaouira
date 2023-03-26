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
    facebook,
    gmail,
    instagram
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
              <div className="flex gap-3">
                <a href={facebook} title="Share on Facebook">
                  <svg
                    className="fill-primary text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="35"
                    height="35"
                    viewBox="0 0 50 50"
                  >
                    <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23c12.683,0,23-10.317,23-23S37.683,2,25,2z M32,16h-3.29 C26.772,16,26,16.455,26,17.806V21h6l-1,5h-5v13h-6V26h-3v-5h3v-2.774C20,14.001,21.686,11,26.581,11C29.203,11,32,12,32,12V16z"></path>
                  </svg>
                </a>
                <a href={instagram}>
                  <svg
                    className="fill-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 250 250"
                    width="35"
                    height="35"
                  >
                    <g id="surface15890269">
                      <path d="M 80 15 C 44.148438 15 15 44.148438 15 80 L 15 170 C 15 205.851562 44.148438 235 80 235 L 170 235 C 205.851562 235 235 205.851562 235 170 L 235 80 C 235 44.148438 205.851562 15 170 15 Z M 185 55 C 190.5 55 195 59.5 195 65 C 195 70.5 190.5 75 185 75 C 179.5 75 175 70.5 175 65 C 175 59.5 179.5 55 185 55 Z M 125 70 C 155.351562 70 180 94.648438 180 125 C 180 155.351562 155.351562 180 125 180 C 94.648438 180 70 155.351562 70 125 C 70 94.648438 94.648438 70 125 70 Z M 125 80 C 100.199219 80 80 100.199219 80 125 C 80 149.800781 100.199219 170 125 170 C 149.800781 170 170 149.800781 170 125 C 170 100.199219 149.800781 80 125 80 Z M 125 80 " />
                    </g>
                  </svg>
                </a>
                <a href={`mailto:${gmail}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35"
                    height="35" className="fill-primary font-bold" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 88.86"><path d="M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z" /></svg>

                </a>
              </div>
              <ShareButton url={asPath} />
            </div>
          </div>

        </Section>
      </main>
    </>
  );
}
