import { GetServerSidePropsResult, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { initializeApollo } from "../../apolloClient";
import Header from "../../components/Header";
import Section from "../../components/Section";
import { routes } from "../../constants/routes";
import { GET_RESOURCES } from "../../graphql/resources/queries";
import Link from "next/link";
import Image from "next/image";

export async function getServerSideProps() {
  const client = initializeApollo();

  const {
    data: { resources },
  } = await client.query({
    query: GET_RESOURCES,
  });
  return { props: { resources } };
}

export default function Resources({ resources }: any): JSX.Element {
  return (
    <>
      <Head>
        <title>DigiEssaouira | دليل الموارد الرقمية</title>
      </Head>
   
      <Header
        isHero
        title = "دليل الموارد الرقمية" 
        image = "/images/resources-svg.svg"
      ></Header>
      <main>
        <Section className="md:py-20 mx-14 md:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-24 md:gap-x-10">
            {
              // @ts-ignore
              resources?.map((resource, key): any => {
                return (
                  <Link key={key} href={`/pdfs/${resource.url}`}>
                    <a className="flex flex-col items-center justify-between gap-y-10 shadow-lg overflow-hidden rounded-xl transition duration-200 ease-in-out hover:scale-110 max-w-xs" target="_blank">
                      <Image
                        height={250}
                        width={200}
                        alt=""
                        src={`/images/resources/${resource.image}`}
                        objectFit={"cover"}
                        className="bg-[url('/images/loading.gif')] bg-contain bg-no-repeat bg-center" 
                      />
                      <div className="flex items-center justify-center bg-blue text-white text-center font-medium text-lg min-w-full min-h-[5rem]">
                        {resource.name}
                      </div>
                    </a>
                  </Link>
                );
              })
            }
          </div>
        </Section>
      </main>
    </>
  );
}
