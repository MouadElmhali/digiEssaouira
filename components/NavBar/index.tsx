import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { routes } from "../../constants/routes";
import { getCurrentUser, logOut } from "../utils/index";
import { useRouter } from "next/router";

export default function NavBar(): JSX.Element {
  const [hidden, toggleHidden] = useState(false);
  const handleClick = (): void => toggleHidden((prevState) => !prevState);
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const router = useRouter();
  const handleLogout = () => {
    logOut();
    setCurrentUser(null);
    document.location.href = "/";
  };
  useEffect(() => {
    if (hidden) {
      toggleHidden(!hidden);
    }
  }, [router.asPath]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10">
      <div className="bg-primary hidden  h-10 sm:flex justify-around items-center text-white">
        <div className="flex">
          <Link href={routes.resources.path}>
            <a className="ml-5 transition duration-200 ease-in-out hover:text-gray-200 hover:scale-110">
              دليل الموارد الرقمية
            </a>
          </Link>
          <Link href={routes.privacyPolicy.path}>
            <a className="ml-5 transition duration-200 ease-in-out hover:text-gray-200 hover:scale-110">
              دليل استعمال المنصة{" "}
            </a>
          </Link>
          <Link href={routes.graduates.path}>
            <a className="ml-5 transition duration-200 ease-in-out hover:text-gray-200 hover:scale-110">
              {" "}
              خريجي DIGIESSAOUIRA{" "}
            </a>
          </Link>
        </div>
        <Link href={routes.contactUs.path}>
          <a className="ml-5 transition duration-200 ease-in-out hover:text-gray-200 hover:scale-110">
            {" "}
            تواصلو معنا{" "}
          </a>
        </Link>
      </div>
      <div
        className="flex px-8 justify-between md:justify-around py-2 bg-white md:bg-white/80
            md:backdrop-blur-md shadow-md w-full
            "
      >
        <div className="flex items-center">
          <Link href={routes.home.path}>
            <a>
              <Image
                src="/images/logo1.png"
                height="100"
                width="100"
                alt="DigiEssaouira logo"
                className="object-contain"
              />
            </a>
          </Link>
        </div>

        <div className="items-center hidden space-x-8 lg:flex">
          <Link href={routes.home.path}>
            <a className="ml-8 transition duration-200 ease-in-out hover:text-blue-500 hover:scale-110">
              الرئيسية
            </a>
          </Link>

          <Link href={routes.courses.path}>
            <a className=" transition duration-200 ease-in-out hover:text-blue-500 hover:scale-110">
              إلتحق بمساق تدريبي
            </a>
          </Link>

          <Link href={routes.electeds.path}>
            <a className=" transition duration-200 ease-in-out hover:text-blue-500 hover:scale-110">
              تعرف على المنتخبين
            </a>
          </Link>

          <Link href={routes.associations.path}>
            <a className=" transition duration-200 ease-in-out hover:text-blue-500 hover:scale-110">
              تعرف على النسيج الجمعوي
            </a>
          </Link>
          <Link href={routes.map.path}>
            <a className=" transition duration-200 ease-in-out hover:text-blue-500 hover:scale-110">
              الخريطة التفاعلية
            </a>
          </Link>
          <Link href={routes.youth.path}>
            <a className=" transition duration-200 ease-in-out hover:text-blue-500 hover:scale-110">
              فضاء الشباب
            </a>
          </Link>

          <Link href={routes.galerie.path}>
            <a className=" transition duration-200 ease-in-out hover:text-blue-500 hover:scale-110">
              معرض الصور
            </a>
          </Link>
        </div>

        {currentUser ? (
          <div className="items-center hidden sm:flex">
            <Image
              src="/images/avatar.jpg"
              height="50"
              width="50"
              alt="DigiEssaouira logo"
              className="object-contain"
            />

            <div>
              مرحبًا,
              {currentUser?.user_userName}
            </div>

            <button className="mr-2" onClick={handleLogout}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="items-center hidden lg:flex">
            <button
              className="border-2 font-bold text-primary p-3 rounded border-primary hover:bg-primary hover:text-white
                    cursor-pointer transition-colors duration-300"
              onClick={() => router.push("/signUp")}
            >
              إنشاء حساب
            </button>
          </div>
        )}

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
          <div className="items-center mt-10 flex flex-col  absolute w-full h-screen top-24 transition-all ease-out duration-500 right-0 left-0 bg-white  space-y-8 lg:hidden">
            <Link href={routes.home.path}>
              <a className="mt-10 transition duration-200 ease-in-out hover:text-blue-500 hover:scale-110">
                الرئيسية
              </a>
            </Link>

            <Link href={routes.courses.path}>
              <a className=" transition duration-200 ease-in-out hover:text-blue-500 hover:scale-110">
                إلتحق بمساق تدريبي
              </a>
            </Link>

            <Link href={routes.electeds.path}>
              <a className=" transition duration-200 ease-in-out hover:text-blue-500 hover:scale-110">
                تعرف على المنتخبين
              </a>
            </Link>

            <Link href={routes.youth.path}>
              <a className=" transition duration-200 ease-in-out hover:text-blue-500 hover:scale-110">
                فضاء الشباب
              </a>
            </Link>

            <Link href={routes.galerie.path}>
              <a className=" transition duration-200 ease-in-out hover:text-blue-500 hover:scale-110">
                معرض الصور
              </a>
            </Link>

            <Link href={routes.associations.path}>
              <a className=" transition duration-200 ease-in-out hover:text-blue-500 hover:scale-110">
                تعرف على النسيج الجمعوي
              </a>
            </Link>
            <Link href={routes.map.path}>
              <a className=" transition duration-200 ease-in-out hover:text-blue-500 hover:scale-110">
                الخريطة التفاعلية
              </a>
            </Link>
            <Link
              href={routes.resources.path}
              className=" transition duration-200 ease-in-out hover:text-blue-500 hover:scale-110"
            >
              <a className="ml-5">دليل الموارد الرقمية</a>
            </Link>
            <Link
              href={routes.privacyPolicy.path}
              className=" transition duration-200 ease-in-out hover:text-blue-500 hover:scale-110"
            >
              <a className="ml-5">دليل استعمال منصة</a>
            </Link>
            <Link
              href={routes.graduates.path}
              className=" transition duration-200 ease-in-out hover:text-blue-500 hover:scale-110"
            >
              خريجي DIGIESSAOUIRA
            </Link>

            <Link
              href={routes.contactUs.path}
              className=" transition duration-200 ease-in-out hover:text-blue-500 hover:scale-110"
            >
              تواصلو معنا
            </Link>
            {currentUser ? (
              <div className="items-center hidden lg:flex">
                <Image
                  src="/images/avatar.jpg"
                  height="50"
                  width="50"
                  alt="DigiEssaouira logo"
                  className="object-contain"
                />

                <div>
                  <span> مرحبًا,</span>
                  <span> {currentUser.user_userName}</span>
                </div>

                <button className="mr-2" onClick={logOut()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="items-center hidden lg:flex">
                <button
                  className="border-2 font-bold text-primary p-3 rounded border-primary hover:bg-primary hover:text-white
                    cursor-pointer transition-colors duration-300"
                >
                  إنشاء حساب
                </button>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </nav>
  );
}
