import { InferGetServerSidePropsType, NextPageContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { initializeApollo } from "../../../../apolloClient";
import LinkCardImg from "../../../../components/LinkCardImg";
import Section from "../../../../components/Section";
import { routes } from "../../../../constants/routes";
import { GET_ELECTEDS_BY_BRANCH_ID } from "../../../../graphql/elected/queries";
import {
  IElected,
  IGetElectedsByBranchIdData,
  IGetElectedsByBranchIdVariables,
} from "../../../../graphql/elected/types";
import { combineStrings } from "../../../../utils";

interface IQuery {
  query: { branchId: string };
}

export async function getServerSideProps({
  query: { branchId },
}: NextPageContext & IQuery) {
  const client = initializeApollo();
  const {
    data: { electedsByBranchId: electeds },
  } = await client.query<
    IGetElectedsByBranchIdData,
    IGetElectedsByBranchIdVariables
  >({
    query: GET_ELECTEDS_BY_BRANCH_ID,
    variables: { args: { id: branchId } },
  });

  return { props: { electeds } };
}

export default function Branch({
  electeds,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const {
    query: { title, branchId },
  } = useRouter();

  console.log(electeds);
  return (
    <>
      <Head>
        <title>DigiEssaouira | المنتخبين</title>
      </Head>
      <main className="mt-20">
        <Section className="py-20" childrenClassName="w-full px-24">
          <div className="flex flex-col gap-y-12">
            <h2 className="text-primaryDarker text-3xl text-center font-bold">
              {title}
            </h2>
            <div className="grid gap-3 gap-y-8 md:grid-cols-4 ">
              {(electeds as IElected[])?.map(
                ({
                  id,
                  lastName,
                  firstName,
                  post: { name: post },
                  pictureUrl ,
                }) => (
                  <div key={id}>
                    <LinkCardImg
                      imageProps={{
                        src: `/images/electeds/${pictureUrl}`,
                      }}
                      linkProps={{
                        href: `${routes.branch.path}/${branchId}/elected/${id}`,
                      }}
                      customizedTitle={
                        <div className="flex flex-col items-center ">
                          <span>{combineStrings([firstName, lastName])}</span>
                          <span className="text-base font-normal">{post}</span>
                        </div>
                      }
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}
