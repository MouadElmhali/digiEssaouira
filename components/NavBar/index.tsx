import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { routes } from "../../constants/routes";

export default function NavBar(): JSX.Element {
  const [hidden, toggleHidden] = useState(false);
  const handleClick = (): void => toggleHidden((prevState) => !prevState);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10">
      <div className="bg-primary h-10 flex justify-around items-center text-white">
        <div>
          <Link href={routes.resources.path}>
            <a className="ml-5">دليل الموارد الرقمية</a>
          </Link>
          <Link href={"#"}> دليل استعمال منصة</Link>
        </div>
        <Link href={"#"}> تواصلو معنا</Link>
      </div>
      <div
        className="flex px-8 justify-between md:justify-around py-4 bg-white md:bg-white/80
            md:backdrop-blur-md shadow-md w-full
            "
      >
        <div className="flex items-center">
          <Link href={routes.home.path}>
            <a>
              <Image
                src="/images/logo.png"
                height="72"
                width="72"
                alt="DigiEssaouira logo"
                className="object-contain"
              />
            </a>
          </Link>
        </div>

        <div className="items-center hidden space-x-8 lg:flex">
          <Link href={routes.home.path}>
            <a
              className="ml-8 hover:text-blue-500 
                    cursor-pointer transition-colors duration-300"
            >
              الرئيسية
            </a>
          </Link>

          <Link href={routes.courses.path}>
            <a
              className=" hover:text-blue-500 
                    cursor-pointer transition-colors duration-300"
            >
              إلتحق بمسار تدريبي
            </a>
          </Link>

          <Link href={routes.electeds.path}>
            <a
              className=" hover:text-blue-500 
                    cursor-pointer transition-colors duration-300"
            >
              تعرف على المنتخبين
            </a>
          </Link>

          <Link href={routes.associations.path}>
            <a
              className=" hover:text-blue-500 
                    cursor-pointer transition-colors duration-300"
            >
              تعرف على النسيج الجمعوي
            </a>
          </Link>
        </div>

        <div className="items-center hidden lg:flex">
          <button
            className="border-2 font-bold text-primary p-3 rounded border-primary hover:bg-primary hover:text-white
                    cursor-pointer transition-colors duration-300"
          >
            إنشاء حساب
          </button>
        </div>
        <div className="items-center flex lg:hidden">
          <button onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        {hidden ? (
          <div className="items-center flex flex-col  absolute w-full h-screen top-24 transition-all ease-out duration-500 right-0 left-0 bg-white  space-y-8 lg:hidden">
            <Link href={routes.home.path}>
              <a
                className="mt-10 hover:text-blue-500 
                    cursor-pointer transition-colors duration-300"
              >
                الرئيسية
              </a>
            </Link>

            <Link href={routes.courses.path}>
              <a
                className=" hover:text-blue-500 
                    cursor-pointer transition-colors duration-300"
              >
                إلتحق بمسار تدريبي
              </a>
            </Link>

            <Link href={routes.electeds.path}>
              <a
                className=" hover:text-blue-500 
                    cursor-pointer transition-colors duration-300"
              >
                تعرف على المنتخبين
              </a>
            </Link>

            <Link href={routes.associations.path}>
              <a
                className=" hover:text-blue-500 
                    cursor-pointer transition-colors duration-300"
              >
                تعرف على النسيج الجمعوي
              </a>
            </Link>
            <div className="items-center flex">
              <button
                className="border-2 text-primary p-3 rounded border-primary hover:bg-primary hover:text-white
                    cursor-pointer transition-colors duration-300"
              >
                إنشاء حساب
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
