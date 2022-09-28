import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import { useRef } from "react";

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
  return (
    <div className="bg-primary ">
      <div className="flex flex-col md:flex-row justify-between p-10 max-w-7xl mx-auto">
        <div className="w-11/12 md:w-1/2">
          <h2 className="text-4xl text-white font-bold">خريطة تفاعلية</h2>
          <p className="text-white text-2xl mt-5 font-semibold">
            لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
            الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم
            إيبسوم ولايزال المعيار للنص
          </p>
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
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
        </div>
        <div className="w-11/12 md:w-1/2 flex justify-center mt-10">
          <Image
            src="/images/map.png"
            width={200}
            height={350}
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
