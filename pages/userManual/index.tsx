import Head from "next/head";
import Header from "../../components/Header";

export default function SignIn(): JSX.Element {
  return (
    <>
      <Head>
        <title>DigiEssaouira | دليل الموارد الرقمية</title>
      </Head>
      <Header
        isHero
        styles="bg-[url('/images/pdf-hero.jpg')] after:bg-black/40"
      >
        <h1 className="text-7xl">دليل الموارد الرقمية</h1>
      </Header>
    </>
  );
}
