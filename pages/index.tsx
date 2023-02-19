import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import BenefitItem from "../components/BenefitItem";
import Header from "../components/Header";
import LinkCard from "../components/LinkCard";
import Section from "../components/Section";
import { routes } from "../constants/routes";
import InteractiveMap from "../components/interactiveMap";
import HomeCourses from "../components/homePageCourses";
import { GET_COURSES_NAME_AND_PICTURE } from "../graphql/courses/queries";
import { initializeApollo } from "../apolloClient";
import { IGetCoursesData } from "../graphql/courses/types";
import { InferGetServerSidePropsType } from "next";

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
export default function Home({
  courses,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  return (
    <>
      <Head>
        <title>DigiEssaouire | الرئيسية</title>
      </Head>
      <Header isHero styles="bg-[url('/images/thumb1.jpg')]">
        <p className="text-5xl">كن مشاركا في التنمية</p>
        <p className="text-3xl text-center">
          تعرف على صناع القرار, قم بتطوير مهارات جديدة وساهم باقتراحاتك في
          التنمية المحلية
        </p>
        <button className="primary-button">اكتشف البرامج</button>
      </Header>
      <main className="flex flex-col">
        <Section
          title="أريد أن..."
          className="[&>div]:flex [&>div]:flex-col [&>div]:gap-y-16"
        >
          <div className="grid sm:grid-cols-4 gap-3">
            <div className="sm:col-span-2 sm:row-span-2">
              <Link  href={routes.courses.path}>
                <a className="flex flex-col gap-4 flex-1 h-full">
                  <Image height={500} width={200} alt=""  src={"/images/thumb6.jpg"} />
                  <div className="bg-primary text-white font-bold text-lg text-center py-5 px-3">
                  ألتحق بمسار تدريبي
                  </div>
                </a>
              </Link>
            </div>
            <div>
              <LinkCard
                title="أتعرف على المنتخبين"
                linkProps={{
                  href: routes.electeds.path,
                }}
                imageProps={{
                  src: "/images/thumb4.jpg",
                }}
              />
            </div>
            <div>
              <LinkCard
                title="أتعرف على النسيج الجمعوي"
                linkProps={{
                  href: routes.associations.path,
                }}
                imageProps={{
                  src: "/images/thumb5.jpg",
                }}
              />
            </div>
            <div>
              <LinkCard
                title="أطرح سؤالا"
                linkProps={{
                  href: routes.askQuestion.path,
                }}
                imageProps={{
                  src: "/images/thumb3.jpg",
                }}
              />
            </div>
            <div>
              <LinkCard
                title="أشارك تجربتي"
                linkProps={{
                  href: routes.contactUs.path,
                }}
                imageProps={{
                  src: "/images/thumb2.jpg",
                }}
              />
            </div>

          </div>
        </Section>
        <Section
          className="bg-gray-100 "
          title="تعرف على مساقاتنا التعليمية"
        >
          <div className="flex items-center flex-col sm:flex-row sm:flex-wrap gap-8 mt-8">
            {courses?.slice(0, 3).map(({ id, name, pictureUrl }) => (
              <div key={id} className="min-w-[180px]">
                <Link href={{
                  pathname: `${routes.courses.path}/${name}`,
                  query: { courseId: id },
                }}>
                  <a className="relative">
                    <Image height={200} width={350} alt="" className="backdrop-brightness-50" src={`/images/courses/${pictureUrl}`} />
                    <div className=" font-bold text-lg text-center absolute bottom-5 right-2 text-white">
                      {name}
                    </div>
                  </a>
                </Link>
              </div>

            ))}
          </div>
        </Section>


        <Section
          title="ماذا ستستفيد؟"
          className=" [&>div]:flex [&>div]:flex-col [&>div]:items-center  [&>div]:gap-y-10"
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
            <Swiper spaceBetween={0} slidesPerView={5} className="h-150">
              <SwiperSlide className="flex items-center justify-center">
                <Image
                  src="/images/partners/partner-1.jpg"
                  layout="fixed"
                  height={150}
                  width={150}
                  alt=""
                  objectFit="contain"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <Image
                  src="/images/partners/partner-2.jpg"
                  layout="fixed"
                  height={150}
                  width={150}
                  alt=""
                  objectFit="contain"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <Image
                  src="/images/partners/partner-3.jpg"
                  layout="fixed"
                  height={150}
                  width={150}
                  alt=""
                  objectFit="contain"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <Image
                  src="/images/partners/partner-4.jpg"
                  layout="fixed"
                  height={150}
                  width={150}
                  alt=""
                  objectFit="contain"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <Image
                  src="/images/partners/partner-5.jpg"
                  layout="fixed"
                  height={150}
                  width={150}
                  alt=""
                  objectFit="contain"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <Image
                  src="/images/partners/partner-6.jpg"
                  layout="fixed"
                  height={150}
                  width={150}
                  alt=""
                  objectFit="contain"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <Image
                  src="/images/partners/partner-7.jpg"
                  layout="fixed"
                  height={150}
                  width={150}
                  alt=""
                  objectFit="contain"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <Image
                  src="/images/partners/partner-9.jpg"
                  layout="fixed"
                  height={150}
                  width={150}
                  alt=""
                  objectFit="contain"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
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
