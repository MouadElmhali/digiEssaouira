import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { initializeApollo } from "../../apolloClient";
import Header from "../../components/Header";
import LinkCard from "../../components/LinkCard";
import Section from "../../components/Section";
import { routes } from "../../constants/routes";
import { GET_REGION } from "../../graphql/region/queries";

export async function getServerSideProps() {
  const client = initializeApollo();

  const {
    data: { regions },
  } = await client.query({
    query: GET_REGION,
  });

  return { props: { regions } };
}

export default function Regions({
  regions,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  return (
    <>
      <Head>
        <title>DigiEssaouira | الجمعيات</title>
      </Head>
      <Header
        isHero
        styles="bg-[url('/images/hero/hero-association.jpeg')] bg-no-repeat bg-cover bg-center bg-contain   h-[35vh] mt-10"
      >
      </Header>
      <main>
        <Section className="py-20" childrenClassName="w-full px-24">
          <h1 className="text-primaryDarker text-center text-4xl mb-10 ">
          قاعدة البيانات الموحدة لجمعيات المجتمع المدني           
          </h1>
          <div className="flex flex-col gap-y-28">
            {
              // @ts-ignore
              regions?.map(({ pictureUrl, name, id }) => (
                <LinkCard
                  key={id}
                  title={name}
                  linkProps={{
                    href: {
                      pathname: `${routes.associations.path}/region/${id}`,
                      query: { name },
                    },
                  }}
                  imageProps={{
                    src: `/images/communs/${pictureUrl}`,
                    objectFit: "contain",
                  }}
                />
              ))
            }
          </div>
        </Section>
      </main>
    </>
  );
}
