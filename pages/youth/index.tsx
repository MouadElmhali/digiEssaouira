import React from 'react'
import Head from "next/head";
import { useRouter } from 'next/router';
import { initializeApollo } from '../../apolloClient';
import { GET_ARTICLES } from '../../graphql/article/queries';
import { InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

export async function getServerSideProps() {
    const client = initializeApollo();
    const {
        data: { articles
        },
    } = await client.query({
        query: GET_ARTICLES,
    });

    return {
        props: {
            articles
        },
    };
}

export default function Youth ({
    articles
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
    const router = useRouter();
    
    return (
        <>
            <Head>
                <title>DigiEssaouira | فضاء الشباب</title>
            </Head>
            <main className='width-full flex flex-column justify-center '>
                <div className='mt-48 mb-48'>
                    <div className="flex flex-row  justify-center md:justify-start items-center gap-2">
                        <div className="sm:w-5 md:w-60 h-px bg-black"></div>
                        <div className='flex items-center justify-center w-full relative left-2 md:left-24 '>
                            <h2 className="text-6xl font-bold text-blue">فضاء الشباب</h2>
                        </div>
                    </div>
                    <div className='mt-24  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-y-10'>
                        {articles?.toReversed().map(({id, title, body, pictureUrl} : any ) => (
                            <Link key={id} href={"/youth/" + id}>
                                <a  className="h-[20rem] w-72 bg-black overflow-hidden shadow-xl">
                                    
                                        <img 
                                            src={"/images/articles/" + pictureUrl}
                                            className="object-cover w-full h-44"
                                        />
                                        <div className='flex flex-col my-2 h-24 text-right mx-4'>
                                            <p className='text-white  text-sm text-justify ' dangerouslySetInnerHTML={{ __html: title }}></p>
                                            <p className='text-white font-thin text-xs mt-5 text-justify text-gray-300' dangerouslySetInnerHTML={{ __html: body.length > 80 ? body.slice(0, 80) + " ..." : body }}></p>
                                        </div>
                                    
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </main >
        </>
    )
}