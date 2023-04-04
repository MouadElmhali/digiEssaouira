import React from 'react'
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import BenefitItem from "../components/BenefitItem";
import Header from "../components/Header";
import Section from "../components/Section";
import { GET_COURSES_NAME_AND_PICTURE } from "../graphql/courses/queries";
import { initializeApollo } from "../apolloClient";
import { IGetCoursesData } from "../graphql/courses/types";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import MyCard from "../components/homePageComponents/MyCard";
import { arabicOrder } from "../components/utils";
import { GET_GRADUATES } from "../graphql/graduates/queries";
import { GET_RESOURCES } from '../graphql/resources/queries';
import { GET_POSTS } from '../graphql/post/queries';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '../graphql/article/queries';

export async function getServerSideProps() {
  const client = initializeApollo();
  const {
    data: { courses },
  } = await client.query<IGetCoursesData>({
    query: GET_COURSES_NAME_AND_PICTURE,

  });

  const {
    data: { getGraduates
    },
  } = await client.query({
    query: GET_GRADUATES,
  });

  const {
    data: { resources },
  } = await client.query({
    query: GET_RESOURCES,
  });

  const {
    data: { articles },
  } = await client.query({
    query: GET_ARTICLES,
  });





  return {
    props: { courses, getGraduates, resources, articles },
  };
}
export default function Home({
  courses,
  getGraduates,
  resources,
  articles
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {

  const [graduatesCounter, setGraduatesCounter] = React.useState(0);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>DigiEssaouire | الرئيسية</title>
      </Head>
      <Header isHero styles="bg-[url('/images/thumb1.jpg')]">
        <p className="text-5xl mt-72 md:mt-auto">كن مشاركا في التنمية</p>
        <p className="text-3xl text-center ">
          تعرف على صناع القرار, قم بتطوير مهارات جديدة وساهم باقتراحاتك في
          التنمية المحلية
        </p>
        <div className="flex flex-row gap-x-10 relative md:top-48 xl:top-32 2xl:top-56 invisible w-0 md:w-auto overflow-hidden  md:visible ">
          <div className="flex flex-row justify-content items-center shadow-lg">
            <button
              onClick={() => {
                router.push("/map")
              }}
              className="flex flex-row justify-center items-center gap-x-2 bg-blue px-5"
            >
              <img src="/images/icons/locate.png" alt="icon" className="w-10 h-10" />
              <p className="w-12 font-md py-5 " >الخريطة تفاعلية</p>
            </button>
            <button
              onClick={() => {
                router.push("/courses")
              }}
              className="flex flex-row justify-center items-center bg-red px-2"
            >
              <img src="/images/icons/book.png" alt="icon" className="w-10 h-10" />
              <p className=" font-md w-24 py-5" onClick={() => {
                router.push("/courses")
              }}>اكتشف المسرات تدريبية</p>
            </button>
            <button
              onClick={() => {
                router.push("/#partners")
              }}
              className="flex flex-row justify-center items-center bg-blue px-2"

            >
              <p className="bg-blue font-md py-8 ">الشركاء</p>
              <img src="/images/icons/done.png" alt="icon" className="w-10 h-10" />
            </button>
          </div>

          <div className="flex flex-row justify-content items-center bg-white border border-gray-400">
            <button>
              <p className="text-gray-900 font-bold font-xl py-5 px-5" onClick={() => {
                router.push("/#graduated")
              }}>خريجين ديجي الصويرة</p>
            </button>
            <div className="h-12 w-px bg-orange-600"></div>
            <button>
              <p className="text-gray-900 font-bold font-xl py-5 px-5" onClick={() => {
                router.push("/contactUs")
              }}> تواصل معنا</p>
            </button>
          </div>
        </div>


      </Header>

      <main className="flex flex-col">
        <Section
          childrenClassName='md:mx-52'
          title="أريد أن"
          className="[&>div]:flex [&>div]:flex-col [&>div]:gap-y-10 -mt-12"
        >
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-x-5 gap-y-5">
            <button
              className=" w-72 md:w-96 h-44 md:h-96 bg-white shadow-xl border"
              onClick = {() => {
                router.push("/courses")
              }}
            >
              <img src="/images/courses.jpg" alt="Image" className="object-cover h-28 md:h-80 w-full" />
              <div className="px-4 py-4 ">
                <p className=" text-red font-bold text-lg px-3">ألتحق بمسار تدريبي</p>
              </div>
            </button>

            <div className="flex flex-col justify-center items-center gap-y-8">
              <button
                className="w-72 md:w-96 h-44 bg-white shadow-xl border"
                onClick = {() => {
                  router.push("/contactUs")
                }}
              >
                <img src="/images/share.jpg" alt="Image" className="object-cover h-28 w-full" />
                <div className="px-4 py-4">
                  <p className=" text-red font-bold text-md px-3">اشارك تجربتي</p>
                </div>
              </button>

              <button
                className="w-72 md:w-96 h-44 bg-white shadow-xl border"
                onClick = {() => {
                  router.push("/askQuestion")
                }}
              >
                <img src="/images/questions.jpg" alt="Image" className="object-cover h-28 w-full" />
                <div className="px-4 py-4">
                  <p className=" text-red font-bold text-md px-3">اطرح سؤال</p>
                </div>
              </button>

            </div>
          </div>
        </Section>

        <Section
          className="[&>div]:flex [&>div]:flex-col [&>div]:gap-y-10 -mt-12"
          title="تعرف على مساقاتنا التعليمية"
        >
          <div 
            className="flex flex-col items-center justify-center lg:flex-row  gap-y-5 mx-12 md:mx-auto "
          >
            {courses.length > 0 ? 
            
              courses.slice(courses.length - 3, courses.length).map(({ id, name, pictureUrl }, index) => (
                <MyCard key={id} onClick={() => {router.push({
                  pathname: "/courses/" + name,
                  query: { courseId: id },
                });}} title={"المساق " + arabicOrder(index)} text={name} picture={"/images/courses/" + pictureUrl} />
              ))
            
            : <></>}
          </div>
        </Section>

        <Section
          title="ماذا ستستفيد؟"
          className=" [&>div]:flex [&>div]:flex-col [&>div]:gap-y-10"
        >
          <div className="flex lg:flex-row flex-col flex-wrap w-full gap-x-4 gap-y-32  items-center">
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

        {/* <InteractiveMap /> */}

        <Section
          className="[&>div>h2]:text-primary  [&>div]:flex [&>div]:flex-col  [&>div]:gap-y-16 "
          title="الموارد الرقمية و الخريجين"
        >
          <div id="graduated" className="flex flex-row flex-wrap-reverse gap-y-10 justify-around items-center">

            <div className="flex flex-col md:flex-row items-center">

              <div className="bg-blue flex flex-col items-center h-72 py-2 w-44 shadow-xl ">
                <img src={"/images/resources/" + resources[resources?.length - 1]?.image} alt={resources[resources?.length - 1]?.name} className="h-44 object-cover" />
                <div className="flex flex-row justify-center items-center ">
                  <div className="relative -top-5 h-8 border-t-[34px] border-t-transparent border-l-[10px] border-l-orange-600 border-b-[0px] border-b-transparent"></div>
                  <div className="bg-orange-600 py-px px-8 relative -top-5" >
                    <p className="text-white  text-2xl ">الكتاب</p>
                  </div>
                  <div className="relative -top-5 h-8 border-t-[34px] border-t-transparent border-r-[10px] border-r-orange-600 border-b-[0px] border-b-transparent"></div>
                </div>
                <div className="py-2 px-4 relative -top-4">
                  <p className="text-white  text-md ">{resources[resources?.length - 1]?.name}</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col justify-center bg-gray-900 h-44 w-64 md:w-72 px-5 gap-y-5">
                  <div className="flex flex-col items-center">
                    <p className="text-bold text-xl text-white">{resources[resources?.length - 1]?.name}</p>
                  </div>
                  <div className="flex flex-row justify-around gap-x-5">
                    <button
                      className=""
                      onClick={() => router.push("/pdfs/" + resources[resources?.length - 1]?.url)}
                    >
                      <p className="py-2 px-4 bg-blue text-bold text-md text-center text-white">تحميل الكتاب</p>
                    </button>
                    <button
                      className=" "
                      onClick={() => router.push("/pdfs/" + resources[resources?.length - 1]?.url)}
                    >
                      <p className="py-2 px-4 bg-blue text-bold text-md text-center text-white">إقرا الكتاب</p>
                    </button>
                  </div>
                </div>
                <div className="h-44 invisible md:visible border-t-[175px] border-t-transparent border-r-[80px] border-r-gray-900 border-b-[0px] border-b-transparent"></div>
              </div>


            </div>
            {getGraduates.length > 0 ? 
            
              <div className="flex flex-row items-center gap-x-5">
                <button onClick={() => {
                  setGraduatesCounter( graduatesCounter === 0 ? 3 - 1 : graduatesCounter - 1);
                }}>
                  <p className="text-bold text-2xl text-blue">{"<"}</p>
                </button>
                <div className="ease-in-out flex flex-col items-center bg-blue shadow-2xl overflow-hidden h-80 w-44">
                  <img src={"/images/graduates/" + getGraduates[graduatesCounter]?.pictureUrl} alt="img" className="h-72 object-cover"/>
                  <div className="py-4 px-4">
                    <p className="text-bold text-2xl text-white">{getGraduates[graduatesCounter]?.name }</p>
                  </div>
                </div>
                <button onClick={() => {
                  setGraduatesCounter(graduatesCounter === 3 ? 0 : graduatesCounter + 1);
                }}>
                  <p className="text-bold text-2xl text-blue">{">"}</p>
                </button>
              </div>
            : <></> }
          </div>

        </Section>     
        
        {articles.length > 0 ? 
          <Section
            childrenClassName=""
            className="[&>div>h2]:text-primary  [&>div]:flex [&>div]:flex-col  [&>div]:gap-y-16 "
            title="المقالات"
          >
            <div
              className="flex lg:flex-row flex-col  justify-center items-center gap-x-10 gap-y-5 bg-blue-gradient md:px-52 md:pt-16"
            >
              {articles.slice(articles.length - 3, articles.length).map(({ id, title, pictureUrl }: any) => {
                return (
                  <div
                    key={id}
                    className="flex flex-col justify-center items-center mt-8 md:mt-auto"
                  >
                    <img src={"/images/articles/" + pictureUrl} alt="Article" className='w-72 object-cover' />
                    <button
                      onClick={() => {
                        router.push("/articles/" + id)
                      }}
                      className=" bg-white text-blue font-bold text-2xl text-center py-5 relative -top-12 w-72 md:w-96 shadow-xl"
                    >
                      <p 
                        className="hover:animate-bounce"
                      >{title}</p>
                    </button>
                  </div>
                )
              })}

            </div>
          </Section>
          :
          <></>
        }
        <Section
          className="[&>div>h2]:text-primary  [&>div]:flex [&>div]:flex-col  [&>div]:gap-y-16 "
          title="الشركاء ومعلومات الإتصال"
        >
          <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-5'>
            {[...Array(9).keys()].map((index) => {
              return (
                <Image 
                  key={index}
                  src={"/images/partners/partner-"+ (index + 1) +".jpg"}
                  height="150"
                  width="150"
                  objectFit="contain"
                />
              )
            })

            }
          </div>
        </Section>
      </main>

    </>
  );
}
