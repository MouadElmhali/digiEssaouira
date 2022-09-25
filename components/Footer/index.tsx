import Image from "next/image";
import styles from "../../pages/index.module.scss";

export default function Footer() {
  return (
    <footer
      className={`${styles.footer} py-16 bg-gray-800 text-white text-2xl`}
    >
      <div
        className={` flex gap-20 justify-center flex-wrap sm:justify-between sm:flex-nowrap`}
      >
        <div>
          <Image
            alt=""
            src="/images/logo.png"
            layout="fixed"
            height="128"
            width="128"
            objectFit="contain"
            objectPosition="top"
          />
        </div>
        <div>
          <p className="my-3 text-3xl font-bold">اتصل بنا</p>
          <p className="direction-left text-right">+2126 61 64 16 40</p>
          <p>contact@digiessaouira.com</p>
          <p>الصويرة - المغرب</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <p>إشتراك النشرة الأخبارية</p>
          <form className="flex gap-5">
            <input
              className="outline-none text-black"
              type="email"
              name="email"
              placeholder="بريدك الإلكتروني"
            />
            <button className="bg-primary py-1 px-5 ">إشتراك</button>
          </form>
          <p className="text-base">جميع الحقوق محفوظة, الصويرة.2022</p>
        </div>
      </div>
    </footer>
  );
}
