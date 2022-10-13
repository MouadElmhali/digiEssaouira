import { InferGetServerSidePropsType, NextPageContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { initializeApollo } from "../../../../apolloClient";
import LinkCard from "../../../../components/LinkCard";
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

  return (
    <>
      <Head>
        <title>DigiEssaouira | المنتخبين</title>
      </Head>
      <main className="mt-20">
        <Section className="py-20">
          <div className="flex flex-col gap-y-12">
            <h2 className="text-primaryDarker text-3xl text-center font-bold">
              {title}
            </h2>
            <div className="flex flex-col justify-center  gap-12 sm:flex-row">
              {(electeds as IElected[])?.map(
                ({
                  id,
                  lastName,
                  firstName,
                  post: { name: post },
                  party: { pictureUrl },
                }) => (
                  <div key={id}>
                    <LinkCard
                      imageProps={{
                        src: `/images/parties/${pictureUrl}`,
                        objectFit: "contain",
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
