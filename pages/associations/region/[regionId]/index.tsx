import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { initializeApollo } from "../../../../apolloClient";
import Header from "../../../../components/Header";
import LinkCard from "../../../../components/LinkCard";
import Section from "../../../../components/Section";
import { routes } from "../../../../constants/routes";
import { GET_ASSOCIATION_BY_REGION } from "../../../../graphql/association/queries";
import {
  IElected,
  IGetElectedsByBranchIdData,
  IGetElectedsByBranchIdVariables,
} from "../../../../graphql/elected/types";
import { combineStrings } from "../../../../utils";

interface IContext {
  params: { regionId: string };
}

interface IAssociation {
  id: string;
  name: string;
  pictureUrl: string;
  region: string;
  email: string;
  phone: string;
  pictureGallery: string[];
}

export async function getServerSideProps({ params: { regionId } }: IContext) {
  const client = initializeApollo();
  const { data: associations } = await client.query({
    query: GET_ASSOCIATION_BY_REGION,
    variables: { id: regionId },
  });
  return { props: { associations } };
}

export default function Associations({
  associations,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const {
    query: { name, regionId },
  } = useRouter();
  console.log(associations);
  return (
    <>
      <Head>
        <title>DigiEssaouira | المنتخبين</title>
      </Head>
      {/* <Header
        isHero
        styles="bg-[url('/images/elections-hero.jpg')] after:bg-black/40"
      >
        <h1 className="text-7xl">المنتخبين</h1>
      </Header> */}
      <main className="mt-20">
        <Section className="py-20">
          <div className="flex flex-col gap-y-12">
            <h2 className="text-primaryDarker text-3xl text-center font-bold">
              {name}
            </h2>
            <div className="flex flex-col justify-center  gap-12 sm:flex-row">
              {(
                associations["getAssociationByRegionId"] as IAssociation[]
              )?.map(({ id, name, pictureUrl }) => (
                <div key={id}>
                  <LinkCard
                    imgSrc={`/images/association/${pictureUrl}`}
                    objectFit="contain"
                    linkTo={`${routes.associations.path}/region/${regionId}/association/${id}`}
                    customizedTitle={
                      <div className="flex flex-col items-center ">
                        <span>{name}</span>
                      </div>
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}
