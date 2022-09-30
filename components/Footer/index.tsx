import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16 bg-gray-800 text-white text-2xl">
      <div
        className={`max-w-7xl mx-auto flex gap-20 justify-center flex-wrap lg:justify-between lg:flex-nowrap`}
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
          <p className="my-3 text-2xl font-bold">اتصل بنا</p>
          <p className="direction-left text-right text-xl">+2126 61 64 16 40</p>
          <p className="text-xl">contact@digiessaouira.com</p>
          <p className="text-xl">الصويرة - المغرب</p>
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
