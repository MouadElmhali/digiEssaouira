import Image from "next/image";

export default function Footer(): JSX.Element {
  return (
    <footer className="py-16 bg-gray-800 text-white text-2xl px-6">
      <div
        className={`max-w-7xl mx-auto flex  gap-20  flex-wrap lg:justify-between lg:flex-nowrap [&>div]:flex-1 `}
      >
        <div>
          <Image
            alt="digiEssaouira logo"
            src="/images/Logo2.jpeg"
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
          <form className="flex flex-col gap-5 sm:flex-row">
            <input
              className="outline-none text-black text-xl p-2"
              type="email"
              name="email"
              placeholder="بريدك الإلكتروني"
            />
            <button className="bg-primary py-1 px-5 text-xl">إشتراك</button>
          </form>
          <p className="text-base">جميع الحقوق محفوظة, الصويرة.2022</p>
        </div>
      </div>
    </footer>
  );
}
