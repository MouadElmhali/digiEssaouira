import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { initializeApollo } from "../../apolloClient";
import Header from "../../components/Header";
import LinkCard from "../../components/LinkCard";
import Section from "../../components/Section";
import { routes } from "../../constants/routes";
import { GET_COURSES_NAME_AND_PICTURE } from "../../graphql/courses/queries";
import { IGetCoursesData } from "../../graphql/courses/types";

export async function getServerSideProps() {
  const client = initializeApollo();
  const {
    data: { courses },
  } = await client.query<IGetCoursesData>({
    query: GET_COURSES_NAME_AND_PICTURE,
    
  });

  return {
    props: { courses },
  };
}

export default function HomeCourses({
  courses,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  return (
        <Section>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-5">
            {courses.map(({ id, name, pictureUrl }) => (
              <div key={id} className="min-w-[180px]">
                <LinkCard
                  title={name}
                  linkProps={{
                    href: {
                      pathname: `${routes.courses.path}/${name}`,
                      query: { courseId: id },
                    },
                  }}
                  imageProps={{
                    src: `/images/courses/${pictureUrl}`,
                  }}
                />
              </div>
            ))}
          </div>
        </Section>
  );
}
