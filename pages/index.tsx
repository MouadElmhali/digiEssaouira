import type { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BenfitItem from "../components/BenefitItem";
import Footer from "../components/Footer";

import Header from "../components/Header";
import LinkCard from "../components/LinkCard";
import Section from "../components/Section";
import { routes } from "../constants/routes";
import { connectToDatabase } from "../src/mongodb";
import styles from "./index.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import InteractiveMap from "../components/interactiveMap";

// Import Swiper styles
import "swiper/css";

export async function getServerSideProps() {
  try {
    await connectToDatabase();

    return {
      props: {
        isConnected: true,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        isConnected: false,
      },
    };
  }
}

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>DigiEssaouire | الرئيسية</title>
      </Head>
      <Header />
      <main className={`${styles.main} flex flex-col`}>
        <Section
          title="أريد أن..."
          description="لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص"
          className={`${styles["i-want-section"]} flex flex-col gap-10`}
        >
          <div className="flex gap-4 justify-between">
            <LinkCard
              linkTo={routes.courses.path}
              imgSrc="/images/iWant/courses.jpg"
              title="ألتحق بمسار تدريبي"
            />
            <LinkCard
              linkTo={routes.candidates.path}
              imgSrc="/images/iWant/vote.jpg"
              title="أتعرف على المنتخبين"
            />
            <LinkCard
              linkTo={routes.about.path}
              imgSrc="/images/iWant/puzzle.jpg"
              title="أتعرف على النسيج الجمعوي"
            />
            <LinkCard
              linkTo="/"
              imgSrc="/images/iWant/question-mark.png"
              title="أطرح سؤالا"
            />
            <LinkCard
              linkTo="/"
              imgSrc="/images/iWant/share-experience.jpg"
              title="أشارك تجربتي"
            />
          </div>
        </Section>
        <Section
          className={`${styles["courses-section"]} bg-gray-100`}
          title="تعرف على مساقاتنا التعليمية"
          description="لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني."
        >
          <Link href={routes.courses.path}>
            <a className="primary-button">مساقاتنا التعليمية</a>
          </Link>
          <video autoPlay src="/videos/Spaceman-Jellyfish.mp4"></video>
        </Section>
        <Section
          className={styles["about-section"]}
          title="من نحن؟"
          description="
        م(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص
        م(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص
        م(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص"
        >
          <Link href={routes.about.path}>
            <a className="primary-button"> المزيد ...</a>
          </Link>
          <div className={styles.img}>
            <Image
              src="/images/logo.png"
              width="100%"
              height="100%"
              layout="responsive"
              alt=""
            />
          </div>
        </Section>

        <Section
          title="ماذا ستستفيد؟"
          className={`${styles["benefits-section"]} bg-gray-100 flex flex-col gap-y-10`}
        >
          <div className="flex flex-col gap-20 items-center sm:flex-row">
            <BenfitItem
              imgSrc="/images/benefits/strength.png"
              title="تقوية القدرات"
            />
            <BenfitItem
              imgSrc="/images/benefits/chat.png"
              title="التواصل مع صناع القرار"
            />
            <BenfitItem
              imgSrc="/images/benefits/opinions.png"
              title="مشاركة أرائك ومقترحاتك"
            />
          </div>
        </Section>

        <InteractiveMap />

        <Section
          className={`${styles["infos-section"]}`}
          title="الشركاء ومعلومات الإتصال"
        >
          <div className=" flex gap-20  w-full">
            <Swiper spaceBetween={50} slidesPerView={3} className="h-150">
              <SwiperSlide>
                <Image
                  src="/images/partners/partner-1.jpeg"
                  layout="fixed"
                  height={150}
                  width={150}
                  alt=""
                  objectFit="contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/partners/partner-2.png"
                  layout="fixed"
                  height={150}
                  width={150}
                  alt=""
                  objectFit="contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/partners/partner-3.png"
                  layout="fixed"
                  height={150}
                  width={150}
                  alt=""
                  objectFit="contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/partners/partner-4.png"
                  layout="fixed"
                  height={150}
                  width={150}
                  alt=""
                  objectFit="contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/partners/partner-5.png"
                  layout="fixed"
                  height={150}
                  width={150}
                  alt=""
                  objectFit="contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/partners/partner-6.jpg"
                  layout="fixed"
                  height={150}
                  width={150}
                  alt=""
                  objectFit="contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/partners/partner-7.png"
                  layout="fixed"
                  height={150}
                  width={150}
                  alt=""
                  objectFit="contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/partners/partner-8.jpg"
                  layout="fixed"
                  height={150}
                  width={150}
                  alt=""
                  objectFit="contain"
                />
              </SwiperSlide>
            </Swiper>
       
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
