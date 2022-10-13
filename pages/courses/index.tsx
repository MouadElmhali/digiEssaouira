import { GetStaticPropsResult } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import LinkCard from "../../components/LinkCard";
import Section from "../../components/Section";

export function getStaticProps(): GetStaticPropsResult<{}> {
  return {
    props: {},
  };
}

export default function Courses(): JSX.Element {
  return (
    <>
      <Head>
        <title>DigiEssaouira | المساقات</title>
      </Head>
      <Header
        isHero
        styles="bg-[url('/images/courses-hero.jpg')] after:bg-black/50"
      >
        <h1 className="text-7xl">المساقات</h1>
      </Header>
      <main>
        <Section>{/* <LinkCard ></LinkCard> */}</Section>
      </main>
    </>
  );
}
