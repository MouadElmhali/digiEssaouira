import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { initializeApollo } from "../../apolloClient";
import Header from "../../components/Header";
import LinkCard from "../../components/LinkCard";
import Section from "../../components/Section";
import { routes } from "../../constants/routes";
// import Group from "../../components/Group";
import { GET_REGION } from "../../graphql/region/queries";
import { IGetGroupsData, IGroup } from "../../graphql/group/types";

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
      <Header isHero styles="bg-[url('/images/association-hero.png')] ">
        <h1 className="text-7xl">الجمعيات</h1>
      </Header>
      <main>
        <Section className="py-20">
          <h1 className="text-primaryDarker text-center text-4xl mb-10 ">
            تعرف على النسيج الجمعوي
          </h1>
          <div className="flex flex-col gap-y-28">
            {
              // @ts-ignore
              regions?.map(({ pictureUrl, name, id }) => (
                <LinkCard
                  key={id}
                  linkTo={`${routes.associations.path}/region/${id}`}
                  data={{ name }}
                  imgSrc={`/images/communs/${pictureUrl}`}
                  title={name}
                  objectFit="contain"
                />
              ))
            }
          </div>
        </Section>
      </main>
    </>
  );
}
