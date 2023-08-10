import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { initializeApollo } from "../../apolloClient";
import Header from "../../components/Header";
import LinkCard from "../../components/LinkCard";
import Section from "../../components/Section";
import { routes } from "../../constants/routes";
import { GET_GRADUATES } from "../../graphql/graduates/queries";
import { IGetCoursesData } from "../../graphql/courses/types";
import Link from "next/link";
import Image from "next/image";


export async function getServerSideProps() {
    const client = initializeApollo();
    const {
        data: { getGraduates
        },
    } = await client.query({
        query: GET_GRADUATES,
    });

    return {
        props: {
            getGraduates
        },
    };
}

export default function Graduates({
    getGraduates
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
    return (
        <>
            <Head>
                <title>DigiEssaouira |  خريجي</title>
            </Head>
            <main>
                <Section>
                    <h1 className="text-2xl font-semibold text-center text-primaryDarker mt-36 mb-10">خريجي DIGIESSAOUIRA</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 ">
                        {getGraduates.map(({ id, post, name, pictureUrl }) => (
                            <div key={id} className="min-w-[180px] rounded overflow-hidden">
                                <Link href={{
                                    pathname: `${routes.graduates.path}/${id}`,
                                }}>
                                    <a className="flex flex-col gap-4 flex-1 h-full">
                                    <Image height={400} width={400} className="object-fill bg-white  bg-[url('/images/loading.gif')] bg-cover bg-no-repeat bg-center" alt="" src={`/images/graduates/${pictureUrl}`} 
                                    />

                                        <div className="bg-primary text-white font-bold text-lg text-center py-5 px-3 rounded overflow-hidden">
                                            {name} <br />
                                            {post}
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
