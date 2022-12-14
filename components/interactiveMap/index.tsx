import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";

interface MapData {
  id: Number;
  cords: string;
  city: string;
  description: string;
}

export default function InteractiveMap(): JSX.Element {
  const mapData: Array<MapData> = [
    {
      id: 1,
      cords: "0,0,20,20",
      city: "الصويرة",
      description:
        " لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشك",
    },
    {
      id: 1,
      cords: "30,30,10,10",
      city: "الصويرة",
      description:
        "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشك",
    },
    {
      id: 1,
      cords: "40,40,10,10",
      city: "الصويرة",
      description:
        "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشك",
    },
  ];
  const swiperRef = useRef();
  const router = useRouter();
  return (
    <div className="bg-primary ">
      <div className="flex flex-col md:flex-row justify-between p-10 max-w-7xl mx-auto">
        <div className="w-11/12 md:w-1/2">
          <h2 className="text-4xl text-white font-bold">خريطة تفاعلية</h2>
          <p className="text-white text-2xl mt-5 font-semibold">
            إن الهيئة العامة للشباب والمنشأة بالقانون رقم (100) لسنة 2015
            والصادر بتاريخ 5/8/2015، قد دأبت منذ تأسيسها على النهوض بالشباب
            وبدورهم الإيجابي الفعال من أجل الإسهام في نماء وازدهار المجتمع
            الكويتي ككل. وقد أصدر مجلس الوزراء المرسوم رقم (37) لسنة 2016 المؤرخ
            21 فبراير 2016 بشأن تعيين السيد/ عبد الرحمن بداح المطيري، مديراً
            عاماً للهيئة العامة للشباب – بدرجة وكيل وزارة. وكذلك تم إصدار
            المرسوم رقم (55) لسنة 2016 بتاريخ 13 مارس 2016 بشأن تشكيل مجلس إدارة
            الهيئة العامة للشباب.
          </p>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            className="h-60 mt-5"
            onSwiper={(swiper) => {
              // @ts-ignore
              swiperRef.current = swiper;
            }}
          >
            {mapData.map((data, index) => {
              return (
                <SwiperSlide className="bg-white rounded p-5 w-64" key={index}>
                  <h1 className="text-primary text-2xl font-bold">
                    {data.city}
                  </h1>
                  <p className="mt-3">{data.description}</p>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="mt-5 flex flex-col sm:flex-row justify-between ">
            <button
              className="bg-white text-primary p-3 text-xl font-bold"
              onClick={() => router.push("/electeds-groups")}
            >
              تعرف/ي على المنتخبين / المنتخبات
            </button>
            <button
              className="bg-white text-primary p-3 text-xl font-bold"
              onClick={() => router.push("/associations")}
            >
              تعرف/ي على النسيج الجمعوي{" "}
            </button>
          </div>
        </div>
        <div className="w-11/12 md:w-1/2 flex justify-center mt-10">
          <Image
            src="/images/Map.svg"
            width={300}
            height={450}
            alt="map"
            useMap="#map-image"
          />
          <map name="map-image">
            {mapData.map((data, index) => {
              return (
                <area
                  key={index}
                  shape="rect"
                  coords={data.cords}
                  alt={data.city}
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    // @ts-ignore
                    swiperRef.current.slideTo(2);
                  }}
                ></area>
              );
            })}
          </map>
        </div>
      </div>
    </div>
  );
}
