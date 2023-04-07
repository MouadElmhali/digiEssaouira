import Image from "next/image";
import { useRouter } from "next/router";

export default function Footer(): JSX.Element {
  const router = useRouter();

  return (
    <footer className="py-8 bg-black text-white text-2xl px-6 ">
      <div
        className={`max-w-7xl mx-auto flex justify-center  gap-20  flex-wrap lg:justify-between lg:flex-nowrap [&>div]:flex-1 `}
      >
        <div className="md:text-auto text-center">
          <Image
            alt="digiEssaouira logo"
            src="/images/logo2.png"
            layout="fixed"
            height="80"
            width="250"
            objectFit="contain"
            objectPosition="top"
          />
        </div>
        <div className="md:text-right text-center">
          <p className="my-3 text-2xl font-bold">اتصل بنا</p>
          <p className="direction-left  text-xl">+212 695132454</p>
          <p className="text-xl">contact@digiessaouira.com</p>
        </div>
        <div className="md:text-right text-center">
          <p className="my-3 text-2xl font-bold"> تابعنا</p>
          <div className="flex gap-3 items-center justify-center md:items-start md:justify-start">
            <a href="#" title="Share on Facebook">
              <svg
                className="fill-white text-white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="35"
                height="35"
                viewBox="0 0 50 50"
              >
                <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23c12.683,0,23-10.317,23-23S37.683,2,25,2z M32,16h-3.29 C26.772,16,26,16.455,26,17.806V21h6l-1,5h-5v13h-6V26h-3v-5h3v-2.774C20,14.001,21.686,11,26.581,11C29.203,11,32,12,32,12V16z"></path>
              </svg>
            </a>
            <a href="#" title="Share on WhatsApp">
              <svg
                className="fill-white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="35"
                height="35"
                viewBox="0 0 50 50"
              >
                <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
              </svg>
            </a>
            <a href="#" title="Share on Twitter">
              <svg
                className="fill-white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="35"
                height="35"
                viewBox="0 0 50 50"
              >
                <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M36.237,20.524 c0.01,0.236,0.016,0.476,0.016,0.717C36.253,28.559,30.68,37,20.491,37c-3.128,0-6.041-0.917-8.491-2.489 c0.433,0.052,0.872,0.077,1.321,0.077c2.596,0,4.985-0.884,6.879-2.37c-2.424-0.044-4.468-1.649-5.175-3.847 c0.339,0.065,0.686,0.1,1.044,0.1c0.505,0,0.995-0.067,1.458-0.195c-2.532-0.511-4.441-2.747-4.441-5.432c0-0.024,0-0.047,0-0.07 c0.747,0.415,1.6,0.665,2.509,0.694c-1.488-0.995-2.464-2.689-2.464-4.611c0-1.015,0.272-1.966,0.749-2.786 c2.733,3.351,6.815,5.556,11.418,5.788c-0.095-0.406-0.145-0.828-0.145-1.262c0-3.059,2.48-5.539,5.54-5.539 c1.593,0,3.032,0.672,4.042,1.749c1.261-0.248,2.448-0.709,3.518-1.343c-0.413,1.292-1.292,2.378-2.437,3.064 c1.122-0.136,2.188-0.432,3.183-0.873C38.257,18.766,37.318,19.743,36.237,20.524z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                className="fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 250 250"
                width="35"
                height="35"
              >
                <g id="surface15890269">
                  <path d="M 80 15 C 44.148438 15 15 44.148438 15 80 L 15 170 C 15 205.851562 44.148438 235 80 235 L 170 235 C 205.851562 235 235 205.851562 235 170 L 235 80 C 235 44.148438 205.851562 15 170 15 Z M 185 55 C 190.5 55 195 59.5 195 65 C 195 70.5 190.5 75 185 75 C 179.5 75 175 70.5 175 65 C 175 59.5 179.5 55 185 55 Z M 125 70 C 155.351562 70 180 94.648438 180 125 C 180 155.351562 155.351562 180 125 180 C 94.648438 180 70 155.351562 70 125 C 70 94.648438 94.648438 70 125 70 Z M 125 80 C 100.199219 80 80 100.199219 80 125 C 80 149.800781 100.199219 170 125 170 C 149.800781 170 170 149.800781 170 125 C 170 100.199219 149.800781 80 125 80 Z M 125 80 " />
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col float-left sm:mt-14 items-center md:items-end mb-20 md:mb-auto">
          <button className="bg-blue-500 py-1 px-5 text-lg w-40" onClick={() => { router.push("/signUp") }}>
            إنشاء حساب
          </button>
        </div>
      </div>
      <div className="flex justify-between max-w-7xl mx-auto">
        
          <p className="text-base text-center">جميع الحقوق محفوظة لجمعية أصدقاء الكلمة<br/> الصويرة.2023</p>
          <p className="text-base"> الصويرة - المغرب</p>
        
      </div>
    </footer>
  );
}
