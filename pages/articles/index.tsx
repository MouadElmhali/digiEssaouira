import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { initializeApollo } from "../../apolloClient";

import Section from "../../components/Section";
import { routes } from "../../constants/routes";
import { GET_ARTICLES } from '../../graphql/article/queries';

import Link from "next/link";
import Image from "next/image";


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

export default function Articles({
    articles
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
    return (
        <>
            <Head>
                <title>DigiEssaouira | المقالاة</title>
            </Head>
            <main>
                <Section className="w-full flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-semibold text-center text-primaryDarker mt-36 mb-10">المقالاة digiessaouira</h1>
                    <div className="flex flex-row flex-wrap items-center justify-center gap-x-5 gap-y-5">
                        {articles.map(({ id, title, body, pictureUrl }) => (
                            <div key={id} className="min-w-[180px] max-w-[260px] shadow-2xl">
                                <Link href={{
                                    pathname: `${routes.articles.path}/${id}`,
                                }}>
                                    <a className="flex flex-col gap-4 flex-1 h-full">
                                        <Image height={300} width={400} className="object-cover" alt="" src={`/images/articles/${pictureUrl}`} />
                                        <div className="bg-blue text-white font-bold text-lg text-center py-5 px-3 border">
                                            {title}
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </Section>
            </main >
        </>
    );
}
