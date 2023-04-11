import React from 'react'
import Head from "next/head";
import { initializeApollo } from '../../apolloClient';
import { GET_ARTICLE_BY_ID } from '../../graphql/article/queries';
import { InferGetServerSidePropsType } from 'next';

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

export default function Young ({
    article
  }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
    const {title, body, pictureUrl} = article.article
    return (
        <>
            <Head>
                <title>DigiEssaouira | فضاء الشباب</title>
            </Head>
            <main>
                <div className='mt-48 mb-48 flex flex-col items-center justify-center gap-12 mx-12 lg:mx-48'>
                    <p className='my-5 font-black text-3xl text-center' dangerouslySetInnerHTML={{ __html: title }}></p>
                    <img src={"/images/articles/" + pictureUrl} alt="object-cover w-full" />
                    <p className='leading-8' dangerouslySetInnerHTML={{ __html: body }}></p>
                </div>
            </main>
        </>
    )
}