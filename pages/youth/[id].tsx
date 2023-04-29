import React from 'react'
import Head from "next/head";
import { initializeApollo } from '../../apolloClient';
import { GET_ARTICLES, GET_ARTICLE_BY_ID } from '../../graphql/article/queries';
import { InferGetServerSidePropsType } from 'next';
import ArticleSection from '../../components/ArticleSection/ArticleSection'

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

  
  const {
      data: { articles
      },
  } = await client.query({
      query: GET_ARTICLES,
  });

    

  return { props: { article, id, articles } };
}

export default function Young ({
    article,
    articles
  }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
    const {title, body, pictureUrl} = article.article
    return (
        <>
            <Head>
                <title>DigiEssaouira | فضاء الشباب</title>
            </Head>
            <ArticleSection articles={articles}>
              <main className='mt-48 mb-48 flex flex-col items-center justify-center gap-12'>
                      <p className='my-5 font-black text-3xl text-center' dangerouslySetInnerHTML={{ __html: title }}></p>
                      <img src={"/images/articles/" + pictureUrl} alt="object-cover w-full" />
                      <p className='leading-8' dangerouslySetInnerHTML={{ __html: body }}></p>
              </main>

            </ArticleSection>
        </>
    )
}