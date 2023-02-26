import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface MapData {
  id: Number;
  city: string;
  president: string;
  desc: string;
}

export default function InteractiveMap(): JSX.Element {
  const mapData: Array<MapData> = [
    {
      id: 1,
      city: "جماعة الحنشان ",
      president: "الرئيسة امينة الشليح ",
      desc: "حزب الإتحاد الإشتراكي للقوات الشعبية",
    },
    {
      id: 2,
      city: "جماعة الصويرة",
      president: "محمد طارق عثماني",
      desc: "حزب التجمع الوطني للأحرار",
    },
    {
      id: 3,
      city: "جماعة تمنار ",
      president: "منير اضرضور ",
      desc: "حزب الإتحاد الإشتراكي للقوات الشعبية",
    },
    {
      id: 4,
      city: "جماعة ايت داود ",
      president: "الرئيس محمد ارخى ",
      desc: "حزب الإتحاد الإشتراكي للقوات الشعبية",
    },
    {
      id: 5,
      city: "جماعة تالمست  ",
      president: "الرئيس عبدالقادر زربع ",
      desc: "حزب الإستقلال",
    },
  ];
  const swiperRef = useRef();
  const router = useRouter();
  return (
    <div className="bg-primary ">
      <div className="flex flex-col md:flex-row justify-between p-10 max-w-7xl mx-auto">
        <div className="w-11/12 md:w-1/2">
          <h2 className="text-4xl text-white font-bold"> خريطة تفاعلية لجماعات إقليم الصويرة</h2>
          <p className="text-white text-xl sm:mt-10 ">
            خريطة تفاعلية لجماعات إقليم الصويرة

            تشكل الجماعة أحد مستويات التنظيم الترابي للمملكة، وهي جماعة ترابية خاضعة للقانون العام، تتمتع بالشخصية الاعتبارية والاستقلال الإداري والمالي.
            <br />
            <br />
            يرتكز تدبير الجماعة لشؤونها على مبدأ التدبير الحر الذي يخول لها سلطة التداول بكيفية ديمقراطية وسلطة تنفيذ مداولاتها ومقرراتها.

            <br />
            <br />
            تناط بالجماعة داخل دائرتها الترابية مهام تقديم خدمات القرب للمواطنات والمواطنين وذلك بتنظيمها وتنسيقها وتتبعها.
            <br />
            <br />

            يضم إقليم الصويرة 57 جماعة محلية، موزعين على أربع (04) دوائر (دائرة الصويرة، دائرة أيت داود، دائرة الحنشان، دائرة تمنار) وخمس (05) باشويات (باشوية الصويرة، باشوية أيت داود، باشوية تمنار، باشوية الحنشان وباشوية تالمست).              </p>

        </div>
        <div className="w-11/12 md:w-1/2 flex justify-center mt-10">
          <Image
            src="/images/map2.png"
            height="500"
            width="500"
            alt="interactive map"
            className="object-contain hover:cursor-pointer"
            onClick={() => {
              router.push("/map");
            }}
          />
        </div>
      </div>
    </div>
  );
}
