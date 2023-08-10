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
        <Section className="py-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {
              // @ts-ignore
              resources?.map((resource, key): any => {
                return (
                  <Link key={key} href={`/pdfs/${resource.url}`}>
                    <a className="flex flex-col gap-4 flex-1" target="_blank">
                      <Image
                        height={200}
                        width={150}
                        alt=""
                        src={`/images/resources/${resource.image}`}
                        objectFit={"contain"}
                      />
                      <div className="relative self-center -z-10 -top-36 h-24 w-24 bg-white  bg-[url('/images/loading.gif')] bg-cover bg-no-repeat bg-center"></div>
                      <span className="text-primaryDarker text-center font-bold text-lg">
                        {resource.name}
                      </span>
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
