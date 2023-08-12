import Image from "next/image";
import { useRouter } from "next/router";

import { SocialMediaSection } from "../SocialMediaSection/SocialMediaSection";
import { getCurrentUser } from "../utils";

export default function Footer(): JSX.Element {
  const router = useRouter();
  const currentUser = getCurrentUser();

  return (
    <footer className="py-8 bg-black text-white text-2xl px-6 ">
      <div
        className={`max-w-7xl mx-auto flex justify-center  gap-20  flex-wrap lg:justify-between lg:flex-nowrap [&>div]:flex-1 `}
      >
        <div className="md:text-auto text-center flex items-start justify-center">
          <Image
            alt="digiEssaouira logo"
            src="/images/logo2.png"
            layout="fixed"
            height="80"
            width="150"
            objectFit="contain"
            objectPosition="top"
          />
        </div>
        <div className="md:text-right text-center">
          <p className="my-3 text-2xl font-bold">اتصل بنا</p>
          <p className="direction-left  text-xl">+212 695132454</p>
          <p className="text-xl">contact@digiessaouira.com</p>
        </div>
        <div>
          <p className="my-3 text-2xl font-bold text-center md:text-start">
            {" "}
            تابعنا
          </p>
          <SocialMediaSection />
        </div>
        {currentUser ? (
          <div className="flex flex-col float-left sm:mt-14 items-center md:items-end mb-20 md:mb-auto ">
            <div className="rounded-lg  py-1 px-5 text-lg w-40 hover:scale-105 transition ease-in-out duration-200"></div>
          </div>
        ) : (
          <div className="flex flex-col float-left sm:mt-14 items-center md:items-end mb-20 md:mb-auto">
            <button
              className="rounded-lg bg-blue-500 py-1 px-5 text-lg w-40 hover:scale-105 transition ease-in-out duration-200"
              onClick={() => {
                router.push("/signUp");
              }}
            >
              إنشاء حساب
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-5 max-w-7xl mx-auto">
        <p className="text-base text-center">
          جميع الحقوق محفوظة لجمعية أصدقاء الكلمة
          <br /> الصويرة.2023
        </p>
        <p className="text-base md:pl-8"> الصويرة - المغرب</p>
      </div>
    </footer>
  );
}
