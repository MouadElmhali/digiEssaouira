import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import BenefitItem from "../components/BenefitItem";
import Header from "../components/Header";
import LinkCard from "../components/LinkCard";
import Section from "../components/Section";
import { routes } from "../constants/routes";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import InteractiveMap from "../components/interactiveMap";

export async function getStaticProps() {
  return { props: {} };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>DigiEssaouire | الرئيسية</title>
      </Head>
      <Header isHero styles="bg-[url('/images/home-hero.jpg')]">
        <p className="text-5xl">كن مشاركا في التنمية</p>
        <p className="text-3xl text-center">
          تعرف على صناع القرار, قم بتطوير مهارات جديدة وساهم باقتراحاتك في
          التنمية المحلية
        </p>
        <button className="primary-button">اكتشف البرامج</button>
      </Header>
      <main className="flex flex-col [&>*]:py-20">
        <Section
          title="أريد أن..."
          description="لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص"
          className="[&>div]:flex [&>div]:flex-col [&>div]:gap-y-16"
        >
          <div className="flex gap-4 justify-center flex-wrap  [&>div]:min-w-[180px] [&>div]:max-w-[300px]  [&>div]:flex-1 ">
            <div>
              <LinkCard
                linkTo={routes.courses.path}
                imgSrc="/images/iWant/courses.jpg"
                title="ألتحق بمسار تدريبي"
                objectFit="cover"
              />
            </div>
            <div>
              <LinkCard
                linkTo={routes.electeds.path}
                imgSrc="/images/iWant/vote.jpg"
                title="أتعرف على المنتخبين"
              />
            </div>
            <div>
              <LinkCard
                linkTo={routes.associations.path}
                imgSrc="/images/iWant/puzzle.jpg"
                title="أتعرف على النسيج الجمعوي"
              />
            </div>
            <div>
              <LinkCard
                linkTo="/"
                imgSrc="/images/iWant/question-mark.png"
                title="أطرح سؤالا"
              />
            </div>
            <div>
              <LinkCard
                linkTo="/"
                imgSrc="/images/iWant/share-experience.jpg"
                title="أشارك تجربتي"
              />
            </div>
          </div>
        </Section>

        <Section
          className="bg-gray-100 [&>div]:grid [&>div]:sm:grid-cols-2  [&>div]:gap-y-6 [&>div]:gap-x-10"
          title="تعرف على مساقاتنا التعليمية"
          description="لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني."
        >
          <Link href={routes.courses.path}>
            <a className="primary-button">مساقاتنا التعليمية</a>
          </Link>
          <video
            autoPlay
            src="/videos/Spaceman-Jellyfish.mp4"
            className="row-start-2 sm:row-start-1 sm:row-end-4 sm:col-start-2 sm:self-center"
          />
        </Section>

        <Section
          className="[&>div]:grid  [&>div]:gap-y-6 [&>div]:gap-x-10 [&>div]:sm:grid-cols-[280px_auto]"
          title="من نحن؟"
          description="
        م(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص
        م(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص
        م(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص"
        >
          <Link href={routes.about.path}>
            <a className="primary-button place-self-start"> المزيد ...</a>
          </Link>
          <div className={`sm:row-start-1 sm:row-end-4 row-start-2`}>
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
          className="bg-gray-100  [&>div]:flex [&>div]:flex-col [&>div]:items-center  [&>div]:gap-y-10"
        >
          <div className="flex flex-col w-full gap-x-4 gap-y-10 md:gap-x-10 items-center sm:flex-row">
            <BenefitItem
              imgSrc="/images/benefits/strength.png"
              title="تقوية القدرات"
            />
            <BenefitItem
              imgSrc="/images/benefits/chat.png"
              title="التواصل مع صناع القرار"
            />
            <BenefitItem
              imgSrc="/images/benefits/opinions.png"
              title="مشاركة أرائك ومقترحاتك"
            />
          </div>
        </Section>

        <InteractiveMap />

        <Section
          className="[&>div>h2]:text-primary [&>div]:items-center [&>div]:flex [&>div]:flex-col  [&>div]:gap-y-16"
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
    </>
  );
}
