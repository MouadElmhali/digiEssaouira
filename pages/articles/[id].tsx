import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Image from "next/image";

import Section from "../../components/Section";
import { GET_ARTICLE_BY_ID } from "../../graphql/article/queries"
import { initializeApollo } from "../../apolloClient";
import { useRouter } from "next/router";

interface IContext {
  params: { id: string };
}

export async function getServerSideProps({
  params: { id },
}: IContext) {
  const client = initializeApollo();

  const { data: article } = await client.query({
    query: GET_ARTICLE_BY_ID,
    variables: { id: id },
  });

  return { props: { article, id } };
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


export default function Article({
  article,
  id
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  
  const {
    body,
    title,
    pictureUrl,
  } = article.article;
  const router = useRouter();
  const { asPath } = router;
  return (
    <>
      

      

      <Head>
          <title>DigiEssaouira | المقالاة</title>
      </Head>
      <main>
          <div className='mt-48 mb-48 flex flex-col items-center justify-center gap-12 mx-12 lg:mx-48'>
              <p className='my-5 font-black text-5xl self-start'>{title}</p>
              <div className="max-h-96 overflow-hidden flex items-center justify-center">
                <img src={"/images/articles/" + pictureUrl} alt="object-cover w-full " />

              </div>
              <p className='leading-8'>{body}</p>
          </div>
      </main>
    </>
  );
}
