// @ts-nocheck
import Image from "next/image";
import { useState } from "react";

export default function HanchanMap() {

    const [show, setShow] = useState();

    const mapData: Array<any> = [
        {
            city: "جماعة سيدي امحمد أو مرزوق",
            president: "الرئيس عبد اللطيف الحميدي",
            partie: "حزب الأصالة والمعاصرة",
            image: "/images/electeds/sidimohammedomerzouke.jpg",
        },
    
        {
            city: "جماعة المزيلات",
            president: "الرئيس عزالدين سابق	",
            partie: "حزب الأصالة والمعاصرة",
            image: "/images/electeds/mzilate.jpg",
        },
    
        {
            city: "جماعة امرامر",
            president: "الرئيس محمد لبيض",
            partie: "حزب الأصالة والمعاصرة",
            image: "/images/electeds/meramer.jpg",
        },
    
    
        {
            city: "جماعة سيدي بولعلام",
            president: "الرئيس المصطفى الملوسي",
            partie: "حزب الأصالة والمعاصرة",
            image: "/images/electeds/sidiboualame.jpg",
        },
    
    
        {
            city: "جماعة سيدي عيسى الركراكي",
            president: "الرئيس الركراكي النعيري",
            partie: "حزب الإستقلال",
            image: "/images/electeds/sidiissaregragi.jpg",
        },
    
        {
            city: "جماعة أولاد امرابط",
            president: "الرئيس جمال خنبوبي  ",
            partie: "حزب الإستقلال",
            image: "/images/electeds/ouladmrabet.jpg",
        },
        {
            city: "جماعة تفتاشت ",
            president: "الرئيس ميلود المتوكي ",
            partie: " حزب الأصالة والمعاصرة",
            image: "/images/electeds/taftachte.jpg",
        },
        {
            city: "جماعة مجي",
            president: "الرئيس توفيق الفجاج	",
            partie: " حزب الأصالة والمعاصرة",
            image: "/images/electeds/mji.jpg",
        },
        {
            city: "جماعة لكدادرة",
            president: "الرئيس السعيد لبروقي",
            partie: "حزب التقدم والإشتراكية",
            image: "/images/electeds/legdadra.jpg",
        },
    
        {
            city: "جماعة كشولة",
            president: "الرئيس عبد الحكيم شاكر",
            partie: "حزب الإتحاد الإشتراكي للقوات الشعبية",
            image: "/images/electeds/kechoula.jpg",
        },
    
        {
            city: "جماعة الكريمات",
            president: "الرئيس عزالدين الزريويل ",
            partie: "حزب التجمع الوطني للأحرار",
            image: "/images/electeds/korimate.jpg",
        },
    
        {
            city: "جماعة الحنشان",
            president: "الرئيسة امينة الشليح ",
            partie: " حزب الإتحاد الإشتراكي للقوات الشعبية",
            image: "/images/electeds/elhenchane.jpg",
        },
    
        {
            city: "جماعة الحسينات",
            president: "الرئيس محمد انجار ",
            partie:"حزب الإستقلال",
            image: "/images/electeds/lehsinate.jpg",
        },
    
    
        {
            city: "جماعة أيت سعيد  ",
            president: "الرئيس المصطفى الاشم ",
            partie:"حزب الأصالة والمعاصرة",
            image: "/images/electeds/aitsaid.jpg",
        },
    
        {
            city: "جماعة المواريد",
            president: "الرئيس عبد الوهاب المتوكل ",
            partie:"حزب التجمع الوطني للأحرار",
            image: "/images/electeds/lmwaride.jpg",
        },
    
        {
            city: "جماعة مسكالة ",
            president: "الرئيس فوزي الشفيق",
            partie:"حزب التجمع الوطني للأحرار",
            image: "/images/electeds/meskala.jpg",
        },
    ];

    const handleSVGClick = event => {
        const index = event.target.dataset.region;
        setShow(index)
    };

    return <>
        <div className="flex items-center justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                x={0}
                y={0}
                viewBox="0 0 269.3 270.7"
                style={{
                    enableBackground: "new 0 0 269.3 270.7",
                }}
                xmlSpace="preserve"
                onClick={handleSVGClick}
                height={300}
                width={300}
            >
                <style>{".st0{fill:#12839e;stroke:#010202;stroke-miterlimit:10}.st0:hover{fill:'13d3eb';}"}</style>
                <g id="hanchan_3_">
                    <path data-region="11" className="st0" d="M53.4,159.6l-1.4,6l-1.7,5c0,0-0.8,1.7,3.3,3.9l3.8-0.6c0,0,2.5-0.1,5.2,2.2c0,0,0.8,0.7,1.8,0.3   c1-0.4,4-1.7,4-1.7s3-1,3.4-5l0.1-8.2c0,0-1.1-1.9-2.3-2.5c0,0-6.5-0.2-7.9-0.6c-1.4-0.4-4.4-0.7-4.7-1.4   C57,157.2,53.6,157.5,53.4,159.6z" />
                    <path data-region="14" className="st0" d="M127.4,266.9c0,0,8.2-3.2,15.9,0.5c7.7,3.7,11.2,4.4,20.3-2.9c0,0,7.1-2.2,14,1l15.7-23.8c0,0,7-13.6,2.6-24.5   c0,0-7.3-3.7-14,3.1c0,0-13.3-0.3-13.8-6.5l-17.4,10.6l-12.1,12.3l-7.3,0.5l-11.7,7.5c0,0,6.5,8.5,6.5,11.6c0,3.1-1.7,7.8-1.7,7.8   S127.1,266.2,127.4,266.9z" />
                    <path data-region="15" className="st0" d="M37.8,263.6c2.5,1.1,11.1,4.4,16.9,0.6c16.7-7.4,18.7-0.2,18.7-0.2c4.3,6.8,12.8,2.7,12.8,2.7   c13.3-6,18.9-6.3,25.1-7.2c6.2-0.9,12.9,4.5,12.9,4.5c5.3-9.7-4.8-19.4-4.8-19.4c-1.4-2-38.6-12.6-38.6-12.6   c-25.9,1.9-37.6,10-40.1,12c-0.3,0.2-0.4,0.7-0.1,1c1.1,1.5,3.9,5.8,1.2,8.7c-3.3,3.5-4.6,9.5-4.6,9.2l0,0.4L37.8,263.6z" />
                    <path data-region="13" className="st0" d="M94.2,200.9c0.1-0.3,0-0.7-0.3-0.8c-3.5-1.5-23-9.7-32.9-9.1c-10.9,0.6-10.5,2-10.5,2s-5.5,5.8-8,5.9   C40,199,26.7,210,26.3,210.4c0,0,0,0,0,0c-0.2,0.2-2.9,2.7-4.8,3c-0.1,0-0.2,0-0.3,0.1c-0.6,0.5-3.2,2.2-9.9,1.2l-1.1-0.2   c-0.5-0.1-0.9,0.4-0.7,0.9c0.4,0.9,0.5,2.3-0.8,4.7c0,0,0,0,0,0.1c-0.3,0.4-3,4.2-3.1,5c-0.1,0.8-4.4,10.5-5.1,12.1   c-0.1,0.2-0.1,0.3,0,0.5c0.6,1.5,4.2,9.3,13.2,10.5c0,0,4.7,0.8,7.5-3.8c2.9-4.7,6.8-5.7,6.8-5.7s3.9-1.3,8,1.6   c2.5,1.8,3.6,3.1,4,3.8c0.2,0.3,0.6,0.4,0.9,0.2c2.8-2.1,15.2-10.4,39.5-12.1c0.2,0,0.4-0.2,0.5-0.4L94.2,200.9z" />
                    <path data-region="10" className="st0" d="M167.9,213.8c0,0-2.7-9.5,6-16.3c0,0,1.7-21.6,5.6-29.8l-8.3-2.2l-3.9,4.6l2.2,3.4l-2.2,2.7l-5.3-2.9   c0,0-9.7,10.6-20.9,12.4c-11.2,1.9-8.7-1.4-19.9,1.2c0,0-20.9-1.5-23.5-3.9l-3.1,5.3l-0.1,12L80.8,232c0,0,34.6,9.2,38.6,12.6   l11.7-7.5l7.3-0.5l12.1-12.3L167.9,213.8z" />
                    <path data-region="12" className="st0" d="M50.5,193c0,0-3.6-4.2-3.2-6.3s5.8-10.7,6.3-12.1c0,0-3.9-1.7-3.3-3.9s1.7-4.2,1.7-5c0-0.9,1.4-4.4,1.4-6   c0-1.6,3.6-2.4,3.6-2.4l-5.6-8.2c0,0-1.7-4.1-3.3-5.3c-1.6-1.2-4.9-7.7-4.9-7.7s-2-5.4-7.1-7.1l-1.9-0.2c0,0-10,3.7-10.7,5.9   l-0.2,14.6l-3.1,7.1l-2.7,4.4c0,0-7.2,10.3,2.8,25.8c0,0,6.5,12.4,1,26.7c0,0,1.5-0.2,2-0.7c0.5-0.5,9.7-7.7,9.7-7.7l5.5-4l3.2-1.9   c0,0,2.8-0.7,3.8-1.6C46.4,196.6,48,195.8,50.5,193z" />
                    <path data-region="8" className="st0" d="M97.6,183l-0.2-8.2c0,0-8.5-5.6-8.3-12.1c0.2-6.5-3.1-11.1-3.1-11.1s-9.4-15.3-9.2-17.2   c0.2-1.9,3.2-10.2,3.2-10.2l-4.3-9.7l-12.8-4.1l-9.2,10c0,0-2,2.4-4.8,2c-2.7-0.3-4.8-1-4.8-1L44,116c0,0-4.6,0-4.6,2.9   c0,2.9-0.8,4.3-0.8,4.3l-4.5,5.7c0,0,3,0,5,1.9c2,1.9,3.3,4,3.3,4s4.2,8,5.6,9.2s3.3,5.3,3.3,5.3l5.6,8.2c0,0,1.6,0.9,4.7,1.4   c3.1,0.4,7.9,0.6,7.9,0.6s2,1.4,2.3,2.5c0.3,1.1-0.1,8.2-0.1,8.2s-0.7,4.3-3.4,5c-2.7,0.7-4.3,2.6-5.8,1.3s-3.6-2.6-5.2-2.2   s-3.8,0.6-3.8,0.6s-6.1,11.2-6.3,12.1s1,4.1,3.2,6.3c0,0,10.5-7.9,43.9,7.3l0.1-12L97.6,183z" />
                    <path data-region="7" className="st0" d="M97.5,174.8l16.3-2.2l6.6-7.7l-3.4-3.6c0,0-0.3-1,2-1.4s10.6-2.2,10.6-2.2l6.6-9.4c0,0-1.7-4.8-1-9.4   c0.7-4.6-7.8-12.6-16.7-11.2l-7,1l-12.3-13.3l1.7-8.9c0,0-4.3-0.7-6,0.7c-1.7,1.4-3.6,2.4-5.3,2.4c-1.7,0-6.6-1.2-6.6-1.2l-7.3,6   l4.3,9.7l-3.2,10.2c0,0,3.2,7.2,9.2,17.2c0,0,3.1,5.2,3.1,11.1C89.1,168.6,97.5,174.8,97.5,174.8z" />
                    <path data-region="4" className="st0" d="M69.7,70.2l9-0.6c0,0,12.1-11.7,11.9-21.8l7.3-8.7l10.2,0.6l6.8,3.7l18.7,14c0,0,0.5,6-12.8,7.7   c-13.3,1.7-14.8,20.5-14.8,20.5l-5,21c0,0-5-0.6-6,0.7c-0.9,1.3-3.8,3.8-11.9,1.2l-7.3,6l-12.8-4.1l0.6-11.6c0,0,4.2-5.8,2.4-14.7   C66.1,84.2,66.3,76.5,69.7,70.2z" />
                    <path data-region="6" className="st0" d="M136.3,148.5c0,0,2.4,2.6,5.4,0.8c3-1.9,6.8-1.9,6.8-1.9s7.3-3.5,9.6-2.4c2.3,1.1,4.5-5.1,4.5-5.1   s-6.5-4.1-7.2-10.1s-5.9-17.9-17-21.9c0,0-2-3,0.3-6.8c2.3-3.8,5.7-5.7,5.7-5.7s2.8-5.7-1-8.2c0,0-8.4,3.7-9.8,5.6   c-1.5,1.9-4,1.7-6.3,4s-20.7,15.6-26.1,10.1l-1.7,8.9l12.3,13.3l7.2-1c0,0,7.3-1.1,12,3.4c4.7,4.5,4.5,7.7,4.5,7.7   S134.7,145.4,136.3,148.5z" />
                    <path data-region="5" className="st0" d="M171.2,165.5c0,0-1.4-6.8-3.6-11.1c-2.1-4.3-2.9-6.4-2-8.4c0.9-2-3-6.1-3-6.1s-5.9-4.1-6.7-7.8   c-0.9-3.7-1-5.5-1.5-6.9c-0.6-1.3-4-12.6-16-17.3c0,0-4-5.9,5.9-12.4c0,0,4.3,5.2,7.6,6.8s4.4,1.3,5.9,4.3c1.5,3,7.4,0.6,8.6,1.1   c1.1,0.6,0.8,1.3,2.4,2c1.6,0.7,5.4,0.2,5.8,0.6c0.5,0.4,0.4,3.1,0.4,3.1s13.6,4.1,18.9,4.6c5.4,0.5,3.2,6.5,3.2,6.5   s-3.8,11.4-11.7,15.4c0,0-1.5,1.1-1.1,4c0.4,2.8-4.7,24-4.7,24L171.2,165.5z" />
                    <path data-region="2" className="st0" d="M143.3,87.2c0,0,8.9-12.9,9.1-14c0,0,16.9,6.3,25.1,0.9c0,0,0.8-0.8,2.4,1c1.7,1.8,14.3,11.1,14.3,11.1   s1.4,1.1,0.5,3.4s-1.7,4.9-0.1,5c1.5,0.1,7.3-1.8,10.1,1c2.8,2.8,5.6,1.5,5.6,1.5s4-1.3,5,0.1l-17.9,24c0,0,0.3-3-3.6-3.5   c0,0-7.1-0.8-18.9-4.6c0,0,0-2.5-0.4-3.1c0,0-1.4-0.2-2.5-0.1c-1.1,0.1-3.5-0.5-3.5-0.5s-1.2-0.9-1.3-1.1c-0.1-0.2-0.7-0.9-1.2-0.9   c-0.5,0-4,0.4-4,0.4s-3.1,0.5-4.3-1.6c-1.2-2.1-2.2-2.5-2.2-2.5l-3.6-1.6c0,0-4.9-2.9-7.6-6.8C144.3,95.4,147.3,90.1,143.3,87.2z" />
                    <path data-region="3" className="st0" d="M133.6,57.5c0,0,9.6-1.8,13.4-9.3c0,0,2.4,0.3,3.2,9.4s2.4,7.8,2.4,7.8s0.9,4.6-0.2,7.7   c-1.1,3.1-9.1,14-9.1,14s-9.9,4.8-9.8,5.6s-4.5,2.8-4.5,2.8s-11,9.5-21.6,12.4c0,0-4.2,0.9-6.3-1.2l5-21c0,0,2-14.6,9.3-18.5   c0,0,2.2-1.9,8.2-2.5C128.7,64.2,133.7,60.9,133.6,57.5z" />
                    <path data-region="1" className="st0" d="M215.3,97.3l12.5-11.4c0,0-8.4-0.3-6.4-13.8s-6.4-19.4-6.4-19.4s-15.6-8.2-18.4-8.7c-2.8-0.5-7.9-13-7.9-13   s-7.7-7.9-8.4-7.7c-0.8,0.3-9.5,10.9-9.5,10.9l-2.7,2.6l-5.4-5c0,0-2.8-5.4-6.5,2.4s-9.2,14-9.2,14s3,3.7,3.2,9.4s2.4,7.8,2.4,7.8   s1.2,5.2-0.2,7.7c0,0,14.4,6.6,25.1,0.9l16.7,12.1c0,0,2.2,0,0.5,3.4s-0.1,5-0.1,5s5.9-1.5,10.1,1s7.8,1,7.8,1   S215.1,96.1,215.3,97.3z" />
                    <path data-region="0" className="st0" d="M242,0.7h3.7c0,0,2.8-1.4,2.8,2.7s0,6.1,0,6.1s-1.3,2.7,2.7,2.7c4,0,9.6-3.2,13.1,1.1s4.1,5.9,4.3,12.3   c0.3,6.4-4.6,29.4-2.6,35.2c2,5.9,6.9,28.3-5.9,28.3c-12.8,0-22.2-5.1-32.4-3.3c0,0-8.2,0.3-6.4-13.8s-6.4-19.4-6.4-19.4L196.7,44   c0,0-8.4-9.7-7.9-13l-8.4-7.7c0,0-2-14.5,7.1-14.6s20.4-1.2,20.4-1.2l14-4.4c0,0,4.9,0.7,6.3,1.5S242,0.7,242,0.7z" />
                    <path  data-region="9"  className="st0" d="M162.6,139.8l-0.8,1.9c0,0-1.1,1.9-1.5,2.3c-0.4,0.4-1.1,1.3-2.2,0.9c-1.1-0.4-4.1,0-9.6,2.4   c0,0-3.6,0.4-5.2,1.1c-1.6,0.7-1.6,0.8-1.6,0.8s-2.3,2-5.4-0.8l-6.6,9.4l-10.6,2.2l-1.7,0.9c-0.2,0.1-0.3,0.4-0.1,0.6l3.1,3.5   l-6.6,7.7l-16.3,2.2l0.2,8.2c0,0,3.3,2.3,17.7,3.4l5.8,0.5c0,0,5.7-1.3,10.5-0.9c4.8,0.4,8.9,0.3,13.6-1.3   c4.7-1.6,13.5-7.6,16.7-11.4l5.3,2.9l2.2-2.7l-2.2-3.4l3.9-4.6c0,0-2-9-5.1-14.7c0,0-1.3-2.5-0.5-4.9   C166.3,143.5,162.6,139.8,162.6,139.8z" />
                </g>
            </svg>
        </div>
        {show &&
            <div className="flex mt-5 bg-gray-100">
                <Image
                    alt="elected image"
                    src={mapData[show].image}
                    layout="fixed"
                    height="140"
                    width="140"
                    objectFit="contain"
                    objectPosition="top"
                    className="bg-white bg-[url('/images/loading.gif')] bg-cover bg-no-repeat bg-center"
                />
                <div className="mr-5">
                    <span className="text-2xl font-semibold"> {mapData[show].city}</span>
                    <br />
                    <span className="text-2xl font-semibold"> {mapData[show].president}</span>
                    <br />
                    <span className="text-2xl font-semibold"> {mapData[show].partie}</span>
                </div>
            </div>}
    </>
}