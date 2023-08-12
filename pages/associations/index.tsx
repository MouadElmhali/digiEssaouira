import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { initializeApollo } from "../../apolloClient";
import Header from "../../components/Header";
import LinkCard from "../../components/LinkCard";
import Section from "../../components/Section";
import { routes } from "../../constants/routes";
import { GET_ASSOCIATION_BY_REGION } from "../../graphql/association/queries";
import {
  IElected,
  IGetElectedsByBranchIdData,
  IGetElectedsByBranchIdVariables,
} from "../../graphql/elected/types";
import { combineStrings } from "../../utils";

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

export async function getServerSideProps() {
  const client = initializeApollo();
  const { data: associations } = await client.query({
    query: GET_ASSOCIATION_BY_REGION,
    variables: { id: "6340819929a52da453d49998" },
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
            <h2 className="text-primaryDarker text-2xl md:text-5xl text-center font-extrabold lg:font-bold">
              {name??"قاعدة البيانات الموحدة لجمعيات المجتمع المدني بالصويرة"}
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-y-10">
              <h2 className="text-primary text-2xl text-center font-black lg:font-bold">
                أضف جمعيتك من خلال ملئ الإستمارة
              </h2>
              <button onClick={() => router.push("/association")} className="bg-primary text-white rounded-full py-2 px-6 lg:mr-10 transition ease-in-out duration-200 hover:scale-110 active:bg-orange-400">أضف جمعيتك</button>
            </div>
            <div className="grid gap-10 lg:grid-cols-3 2xl:grid-cols-4 mx-8 md:mx-auto">
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
