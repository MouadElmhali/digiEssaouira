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
import { useRouter } from "next/router";
import Card from "../components/homePageComponents/Card";
import MyCard from "../components/homePageComponents/MyCard";

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
  const router = useRouter();
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
        <div className="flex flex-row gap-x-10 relative top-36 invisible md:visible">
          <div className="flex flex-row justify-content items-center shadow-lg">
            <button
              onClick={()=>{
                router.push("/courses")
              }}
              className="flex flex-row justify-center items-center gap-x-2 bg-blue px-5"
            >
              <img src="/images/icons/locate.png" alt="icon" className="w-10 h-10" />
              <p className="w-12 font-md py-5 " >الخريطة تفاعلية</p>
            </button>
            <button
              onClick={()=>{
                router.push("/courses")
              }}
              className="flex flex-row justify-center items-center bg-red px-2"
            >
              <img src="/images/icons/book.png" alt="icon" className="w-10 h-10" />
              <p className=" font-md w-32 py-5" onClick={()=>{
                router.push("/courses")
              }}>اكتشف المسرات تدريبية</p>
            </button>
            <button
              onClick={()=>{
                router.push("/courses")
              }}
              className="flex flex-row justify-center items-center bg-blue px-2"
            
            >
              <p className="bg-blue font-md py-8 " onClick={()=>{
                router.push("/courses")
              }}>الشركاء</p>
              <img src="/images/icons/done.png" alt="icon" className="w-10 h-10" />
            </button>
          </div>
          <div className="flex flex-row justify-content items-center bg-white border border-gray-400">
            <div>
              <p className="text-gray-900 font-bold font-xl py-5 px-5" onClick={()=>{
                router.push("/courses")
              }}>خريجين ديجي الصويرة</p>
            </div>
            <div className="h-12 w-px bg-orange-600"></div>
            <div>
              <p className="text-gray-900 font-bold font-xl py-5 px-5" onClick={()=>{
                router.push("/courses")
              }}> تواصل معنا</p>
            </div>
          </div>
        </div>
        
        
      </Header>
      <main className="flex flex-col">
        <Section
          title="أريد أن"
          className="[&>div]:flex [&>div]:flex-col [&>div]:gap-y-10 -mt-12"
        >
          <div className="flex flex-row flex-wrap justify-center items-center gap-x-5 gap-y-5">
            <button
              className="w-96 h-96 bg-white shadow-xl border"
            >
              <img src="/images/thumb6.jpg" alt="Image" className="object-cover h-80 w-full" />
              <div className="px-4 py-4 ">
                <p className=" text-red font-bold text-lg px-3">ألتحق بمسار تدريبي</p>
              </div>
            </button>

            <div className="flex flex-col justify-center items-center gap-y-8">
              <button
                className="w-96 h-44 bg-white shadow-xl border"
              >
                <img src="/images/thumb6.jpg" alt="Image" className="object-cover h-28 w-full" />
                <div className="px-4 py-4">
                  <p className=" text-red font-bold text-md px-3">اشارك تجربتي</p>
                </div>
              </button>

              <button
                className="w-96 h-44 bg-white shadow-xl border"
              >
                <img src="/images/thumb6.jpg" alt="Image" className="object-cover h-28 w-full" />
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
            className="flex lg:flex-row md:flex-col gap-y-5 "
          >
            <MyCard onClick={() => {}} title="المساق الأول" text=" ـاق الثالث مقدمة مساق الدولة والجماعات الابية بالمغرب و" picture="/images/thumb6.jpg" />
            <MyCard onClick={() => {}} title="المساق الثاني" text="كالية الحكامة الابية مقدمة مساق الدولة والجماعات الابية بالمغرب" picture="/images/thumb6.jpg" />
            <MyCard onClick={() => {}} title="المساق الثالث" text="الدولة والجماعات الابية بالمغإشكالية الحكامة الابية مقدمة مسا" picture="/images/thumb6.jpg" />
            
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
            {courses?.slice(0, 3).map(({ id, name, pictureUrl }) => (
              <div key={id} className="min-w-[180px]">
                <Link href={{
                  pathname: `${routes.courses.path}/${name}`,
                  query: { courseId: id },
                }}>
                  <a className="relative">
                    <Image height={250} width={400} alt="" className="backdrop-brightness-50" src={`/images/courses/${pictureUrl}`} />
                    <div className=" font-bold text-lg text-center absolute bottom-8 right-5 text-white">
                      {name}
                    </div>
                  </a>
                </Link>
              </div>

            ))}
          </div> */}
        </Section>


        <Section
          title="ماذا ستستفيد؟"
          className=" [&>div]:flex [&>div]:flex-col [&>div]:gap-y-10"
        >
          <div className="flex lg:flex-row sm:flex-col flex-wrap w-full gap-x-4 gap-y-32  items-center">
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
          <div className="flex flex-row flex-wrap-reverse gap-y-10 justify-around items-center">

            <div className="flex flex-row items-center">

              <div className="bg-blue flex flex-col items-center h-60 w-44 shadow-xl ">
                <img src="/images/thumb6.jpg" alt="img" className="h-44 object-cover" />
                <div className="flex flex-row justify-center items-center ">
                  <div className="relative -top-5 h-8 border-t-[34px] border-t-transparent border-l-[10px] border-l-orange-600 border-b-[0px] border-b-transparent"></div>
                  <div className="bg-orange-600 py-px px-8 relative -top-5" >
                    <p className="text-white  text-2xl ">الكتاب</p>
                  </div>
                  <div className="relative -top-5 h-8 border-t-[34px] border-t-transparent border-r-[10px] border-r-orange-600 border-b-[0px] border-b-transparent"></div>
                </div>
                <div className="py-2 px-4 relative -top-4">
                  <p className="text-white  text-md ">مقدمة مساق الدولة</p>
                </div>
              </div>
              
              <div className="flex flex-row">
                <div className="flex flex-col justify-center bg-gray-900 h-44 px-5 gap-y-5">
                  <div className="flex flex-col items-center">
                    <p className="text-bold text-xl text-white">عنوان الكتاب</p>
                  </div>
                  <div className="flex flex-row justify-around gap-x-5">
                    <button
                      className=""
                    >
                      <p className="py-2 px-4 bg-blue text-bold text-md text-center text-white">تحميل الكتاب</p>
                    </button>
                    <button
                      className=" "
                    >
                      <p className="py-2 px-4 bg-blue text-bold text-md text-center text-white">إقرا الكتاب</p>
                    </button>
                  </div>
                </div>
                <div className="h-44 border-t-[175px] border-t-transparent border-r-[80px] border-r-gray-900 border-b-[0px] border-b-transparent"></div>
              </div>

            
            </div>
            
            <div className="flex flex-row items-center gap-x-5">
              <button>
                <p className="text-bold text-2xl text-blue">{"<"}</p>
              </button>
              <div className="flex flex-col items-center bg-blue shadow-2xl overflow-hidden h-80 w-60">
                <img src="/images/thumb6.jpg" alt="img" className="h-72 object-cover"/>
                <div className="py-4 px-4">
                  <p className="text-bold text-xl text-white">Ahmed AIT KHOUYA</p>
                </div>
              </div>
              <button>
                <p className="text-bold text-2xl text-blue">{">"}</p>
              </button>
            </div>
          
          </div>

        </Section>

        <Section
          className="[&>div>h2]:text-primary  [&>div]:flex [&>div]:flex-col  [&>div]:gap-y-16 bg-gray-200"
          title="المقالاة"
        >
          <div 
            className="flex md:flex-row sm:flex-col justify-center items-center gap-x-10 gap-y-5"
          >
            <div
              className="flex flex-col justify-center items-center"
            >
              <img src="/images/thumb6.jpg" alt="Article" />
              <button
                className="bg-white text-blue font-bold text-2xl text-center py-5 relative -top-12 w-96 shadow-xl"
              >
                <p>إلتحق بمسار تدريبي</p>
              </button>
            </div>

            <div
              className="flex flex-col justify-center items-center"
            >
              <img src="/images/thumb6.jpg" alt="Article" />
              <button
                className="bg-white text-blue font-bold text-2xl text-center py-5 relative -top-12 w-96 shadow-xl"
              >
                <p>إلتحق بمسار تدريبي</p>
              </button>
            </div>
          </div>
        </Section>

        <Section
          className="[&>div>h2]:text-primary  [&>div]:flex [&>div]:flex-col  [&>div]:gap-y-16 "
          title="الشركاء ومعلومات الإتصال"
        >
          <div className=" flex gap-20">
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
