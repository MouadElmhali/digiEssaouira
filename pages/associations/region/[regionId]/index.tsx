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
  const router = useRouter();
  return (
    <>
      <Head>
        <title>DigiEssaouira | المنتخبين</title>
      </Head>

      <main className="mt-20">
        <Section className="py-20">
          <div className="flex flex-col gap-y-12">
            <h2 className="text-primaryDarker text-5xl text-center font-bold">
              {name}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center w-full">
              <h2 className="text-primary text-2xl text-center font-bold">
                أضف جمعيتك من خلال ملئ الإستمارة
              </h2>
              <button onClick={() => router.push("/association")} className="bg-primary text-white rounded-full p-2 px-6 mr-10">أضف جمعيتك</button>
            </div>
            <div className="grid gap-3 gap-y-8 md:grid-cols-4">
              {(
                associations["getAssociationByRegionId"] as IAssociation[]
              )?.map(({ id, name, pictureUrl }) => (
                <div key={id}>
                  <LinkCard
                    imageProps={{
                      src: `/images/association/${pictureUrl}`,
                      objectFit: "contain",
                    }}
                    linkProps={{
                      href: `${routes.associations.path}/region/${regionId}/association/${id}`,
                    }}
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
