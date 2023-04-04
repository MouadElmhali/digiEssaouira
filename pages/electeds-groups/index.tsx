import { GetServerSidePropsResult, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { initializeApollo } from "../../apolloClient";
import Header from "../../components/Header";
import LinkCard from "../../components/LinkCard";
import Section from "../../components/Section";
import { routes } from "../../constants/routes";
import { GET_GROUPS } from "../../graphql/group/queries";
import { IGetGroupsData, IGroup } from "../../graphql/group/types";

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<{ groups: IGroup[] }>
> {
  const client = initializeApollo();

  const {
    data: { groups },
  } = await client.query<IGetGroupsData>({
    query: GET_GROUPS,
  });

  return { props: { groups } };
}

export default function Electeds({
  groups,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  return (
    <>
      <Head>
        <title>DigiEssaouira | المنتخبين</title>
      </Head>
      <Header
        isHero
        styles="bg-[url('/images/hero/hero-electeds.jpeg')] bg-no-repeat bg-cover bg-center bg-contain   h-[35vh] mt-10"
      >
      </Header>
      <main>
        <Section className="py-20" childrenClassName="w-full px-24">
          <div className="flex flex-col gap-y-28 w-full">
            {groups?.map((group) => (
              <Group key={group.id} group={group} />
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}

interface IGroupProps {
  group: IGroup;
}

function Group({ group: { title, branches } }: IGroupProps): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-y-8">
      <h2 className="text-primaryDarker text-center font-bold text-3xl ">
        {title}
      </h2>
      <div className="flex flex-col gap-10 w-full sm:flex-row">
        {branches?.map(({ name, pictureUrl, id }) => (
          <LinkCard
            key={id}
            title={name}
            linkProps={{
              href: {
                pathname: `${routes.branch.path}/${name}`,
                query: { branchId: id, title },
              },
            }}
            imageProps={{
              src: `/images/communs/${pictureUrl}`,
              width: 200,
              height: 250,
              objectFit: "contain",
            }}
          />
        ))}
      </div>
    </div>
  );
}
