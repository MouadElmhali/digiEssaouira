import React from 'react'
import Head from "next/head";
import { useRouter } from 'next/router';
import { initializeApollo } from '../../apolloClient';
import { GET_YOUTHARTICLES } from '../../graphql/youthArticle/queries';
import { InferGetServerSidePropsType } from 'next';

export async function getServerSideProps() {
    const client = initializeApollo();
    const {
        data: { youthArticles
        },
    } = await client.query({
        query: GET_YOUTHARTICLES,
    });

    return {
        props: {
            youthArticles
        },
    };
}

export default function Youth ({
    youthArticles
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
    const router = useRouter();
    
    return (
        <>
            <Head>
                <title>DigiEssaouira | فضاء الشباب</title>
            </Head>
            <main>
                <div className='mt-48 mb-48'>
                    <div className="flex flex-row  justify-center md:justify-start items-center gap-2">
                        <div className="sm:w-5 md:w-60 h-px bg-black"></div>
                        <div className='flex items-center justify-center w-full relative left-2 md:left-24 '>
                            <h2 className="text-6xl font-bold text-blue">فضاء الشباب</h2>
                        </div>
                    </div>
                    <div className='mt-24 mx-auto xl:mx-44 2xl:mx-64 flex flex-row flex-wrap gap-8 justify-center items-center'>
                        {youthArticles?.map(({id, title, body, pictureUrl}) => (
                            <button key={id} onClick={() => router.push("/youth/" + id)}>
                                <div
                                    className="h-72 w-72 bg-blue  overflow-hidden shadow-xl"
                                >
                                    <img 
                                        src={"/images/youthArticles/" + pictureUrl}
                                        className="object-cover w-full h-44"
                                    />
                                    <div className='flex flex-col mx-5 my-2'>
                                        <p className='text-white text-xl font-bold'>{title}</p>
                                        <p className='text-xs text-white mt-2'> {body.substr(0, 100) + " ..."}</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </main >
        </>
    )
}