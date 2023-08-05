// @ts-nocheck
import Image from "next/image";
import { useState } from "react";

export default function TmanarMap() {

    const [show, setShow] = useState();

    const mapData: Array<any> = [
        {
            city: "جماعة أكرض",
            president: "الرئيس حفيظ اخساي  ",
            partie:" حزب الإستقلال",
            image: "/images/electeds/aguerd.jpg",
        },
        {
            city: "جماعة سيدي الجزولي",
            president: "الرئيس محمد شهيد ",
            partie:" حزب التقدم والإشتراكية",
            image: "/images/electeds/sidiljazouli.jpg",
        },
        {
            city: "جماعة سيدي احمد أوحامد",
            president: "الرئيس محمد الباز",
            partie:" حزب التجمع الوطني للأحرار",
            image: "/images/electeds/sidiahmedouhamed.jpg",
        },
        {
            city: "جماعة سيدي كاوكي",
            president: "الرئيس الحسن ابوتزارت   ",
            partie:" حزب الإستقلال",
            image: "/images/electeds/sidikaouki.jpg",
    
        },
        {
            city: "جماعة تيدزي",
            president: "الرئيس سعيد اخرضيض ",
            partie:"حزب التقدم والإشتراكية",
            image: "/images/electeds/tidzi.jpg",
        },
        {
            city: "جماعة سيدي أحمد السايح",
            president: "الرئيس ابراهيم اموكاي",
            partie:"حزب الإتحاد الإشتراكي للقوات الشعبية",
            image: "/images/electeds/sidiahmedsayeh.jpg",
        },
        {
            city: "جماعة سميمو",
            president: "الرئيس مصطفى جضهيم ",
            partie:"حزب الإتحاد الإشتراكي للقوات الشعبية",
            image: "/images/electeds/smimou.jpg",
        },
        {
            city: "جماعة إمنتليت",
            president: "الرئيس رشيد اخرضيض        ",
            partie:"حزب التجمع الوطني للأحرار",
            image: "/images/electeds/imintlite.jpg",
        },
        {
            city: "جماعة إمكراد",
            president: "الرئيس البشير اذلامين	",
            partie:"حزب التقدم والإشتراكية",
            image: "/images/electeds/imtrade.jpg",
        },
        {
            city: "جماعة ايدا وعزا",
            president: "الرئيس حفيظ اسيكي",
            partie:"حزب التقدم والإشتراكية",
            image: "/images/electeds/idaazza.jpg",
        },
        {
            city: "جماعة تافضنا",
            president: "الرئيس حسن الهادي ",
            partie:"حزب الإتحاد الإشتراكي للقوات الشعبية        ",
            image: "/images/electeds/tafedna.jpg",
        },
        {
            city: "جماعة إذا وجلول",
            president: "الرئيس عبدالمالك بورغى "  ,
            partie:"حزب التقدم والإشتراكي ",
            image: "/images/electeds/idaoujeloul.jpg",
        },
        {
            city: "جماعة تمنار ",
            president: "منير اضرضور ",
            partie:"حزب الإتحاد الإشتراكي للقوات الشعبية",
            image: "/images/electeds/tamanar.jpg",
        },
    
        {
            city: "جماعة تمزكدة أوفتاس",
            president: "الرئيس عبد الله ابلا",
            partie:"حزب الإتحاد الإشتراكي للقوات الشعبية",
            image: "/images/electeds/timzgidaouftasse.jpg",
        },
        {
            city: "جماعة إدا وكازو",
            president: "الرئيس حسن بوزار        ",
            partie:"حزب الإتحاد الإشتراكي للقوات الشعبية",
            image: "/images/electeds/idaoukazzou.jpg",
        },
        {
            city: "جماعة ايت عيسي إحاحان",
            president: "الرئيس حسن ايت واحمان",
            partie:"حزب الإتحاد الإشتراكي للقوات الشعبية",
            image: "/images/electeds/aissiihnane.jpg",
        },
        {
            city: "جماعة سيدي أحمد",
            president: "الرئيس ابراهيم اموكاي	",
            partie:"حزب الإتحاد الإشتراكي للقوات الشعبية",
            image: "/images/electeds/sidiahmed.jpg",
        },
        {
            city: "جماعة سيدي احمد اومبارك",
            president: "الرئيسة نعيمة تنسفت",
            partie:"حزب التقدم والإشتراكية",
            image: "/images/electeds/sidiahmedoumbarek.jpg",
        },
        {
            city: "جماعة تاركانت",
            president: "الرئيس محمد جارف",
            partie:"حزب الإتحاد الإشتراكي للقوات الشعبية",
            image: "/images/electeds/targante.jpg",
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
                viewBox="0 0 226.7 418.8"
                style={{
                    enableBackground: "new 0 0 226.7 418.8",
                }}
                xmlSpace="preserve"
                onClick={handleSVGClick}
                height={300}
                width={300}
            >
                <style>{".st0{fill:#12839e;stroke:#010202;stroke-miterlimit:10}.st0:hover{fill:'13d3eb';}"}</style>

                <path data-region="3" className="st0" d="M70.7,26.5l7.5,9l0.2,7.8c0,0-15.3,6-18.9,15.8c-3.6,9.9-13.8,14.5-13.8,14.5l-7.8,18l-10.9-6l-5.1,0.2   c0,0-2-11.7-5.6-15.5s-4.8-15.3-4.8-15.3L22,50c0,0,5.6-17.7,20.7-14.8c0,0,11.7,5.4,16.3,3.6L70.7,26.5z" />
                <path data-region="2" className="st0" d="M99.9,62.6l-6.3,0.1l-9.5-7.8L80,43.4h-1.6c0,0-15.4,5.7-18.9,15.8C56,69.3,45.7,73.7,45.7,73.7l-7.8,18   l5.5,1.7l12.5-7.9c0,0,6.4-2,9,1.5c2.6,3.5,5,9.8,10.3,10.7c5.3,0.9,9.1,1.4,11.4,3.7l5.8-0.3c0,0,3.7-17.5,9.3-25.3L99.9,62.6z" />
                <path data-region="5" className="st0" d="M16.6,165.5l14.3-3.3l8,5.4l5.1-7.8c0,0-3.4-12-2.6-15.2l-8.3-9.1c0,0,1-14.6,5-17.2c4-2.7,3.2-4.1,3.2-4.1   l-0.5-11.6c0,0-4.5-6.6-4-8.6c0.5-1.9,1-2.3,1-2.3l-10.9-6l-5.1,0.2c0,0,3.2,21.4-4.4,44.6C17.5,130.5,25,148.7,16.6,165.5z" />
                <path data-region="6" className="st0" d="M39,167.6l9.3,7.1l1.3,0l5,3.7c0,0,5.7-1.2,7.6-1.1c2,0.1,7.1,0.1,7.1,0.1l5.4-4.9c0,0,0.5-1.1,0-2.2   c-0.5-1.1-3.5-4-3.5-5.6s0-5-1.4-6.3s-7.1-1.4-7.5-2.2c-0.3-0.8,1.5-8.9-4.3-17.2c-5.8-8.3-7.9-14.2-7.9-14.2s-1.4-4.4-1.5-6.2   c-0.1-1.5-5-3.5-6.6-4.1c-0.2-0.1-0.5,0.1-0.5,0.3c-0.1,0.6-0.7,1.8-3.2,3.6c-4,2.8-5,17.2-5,17.2l8.3,9.1c0,0-0.6,4.4,2.6,15.2   L39,167.6z" />
                <path data-region="4" className="st0" d="M92.4,101.1c0,0,5.5,3.4,6,6.6c0.5,3.2,1.3,6,1.3,6s2.3,8.2-1.5,11.1s-5.2,2.9-5.2,2.9h-3.2l-5.7,9.6v13.4   c0,0,0,9.3-3.7,13.9c-3.7,4.6-5.7,5.6-5.7,5.6s-3.3-4.1-3.5-5.6c-0.2-1.5,2.8-7.4-8.9-8.5c0,0,1.4-9.7-4.3-17.2s-7.9-14.2-7.9-14.2   l-1.5-6.2c0,0-0.2-1.6-7.1-4.3l-0.5-11.6c0,0-4.3-6.5-4-8.6l1-2.3l5.5,1.7l12.5-7.9c0,0,6.8-1.9,9,1.5c2.2,3.4,5.5,9.9,10.3,10.7   c4.8,0.8,9.4,1.7,11.4,3.7L92.4,101.1z" />
                <path data-region="7" className="st0" d="M139.9,109.2h-10.7c0,0-5.1-1.7-7.9-3.7c-2.8-2-12.4-4-12.4-4s-2.5-0.6-3.8-1.3c-1.3-0.6-12-1.7-12-1.7   l-0.6,2.5c0,0,5.5,3.5,6,6.6c0.5,3.1,1.3,6,1.3,6s2.6,7.7-1.5,11.1c-4.1,3.4-5.2,2.9-5.2,2.9h-3.2l-5.7,9.6v13.4   c0,0-0.2,10.4-3.7,13.9c0,0-3.6,4.3-5.7,5.6c0,0,0.9,2.3,0.9,3.7c0,1.4,0,4.2,0,4.2s4.5,4.1,2.1,8l14.1-4.4l7.5-5.4l30-1.8   c0,0,11.1-2,13.9-11.4c2.8-9.4,2.2-11.4,2.2-11.4L135,130.2c0,0-2-1.3-0.9-4.4c1.1-3.1,0.4-4.3,3.7-5.8s4.3-4.6,4.3-4.6   L139.9,109.2z" />
                <path data-region="9" className="st0" d="M16.6,165.5c0,0-2.8,5-5.1,7L24.7,186c0,0-5.2,10.6-4,13.3c1.3,2.7,7.1,9.2,11.5,9.7c0,0,5.2-2,8.6-1.9   c3.3,0.1,17.4-0.3,17.4-0.3s1.1,2.7,2.6,3.4c0,0-0.5,13.9,4.1,17.5c0,0,7.3-1.1,7.7-5.4c0,0,0.4-6.3,1.4-8.7c1-2.4,0.4-7.9,0.4-7.9   s1.3-4.2,0.5-6.9c-0.8-2.7-3.6-6.9-1.1-9.3c2.4-2.4,4-3.4,4-3.4s2.6-2.9-2.1-8c0,0,0.6-5.5-0.9-7.8c0,0,1,1.4,0,2.2   c-1,0.9-5.4,4.9-5.4,4.9s-10.2-0.4-14.7,1.1l-5-3.7l-1.3,0l-9.3-7.1l-8-5.4L16.6,165.5z" />
                <path data-region="10" className="st0" d="M11.5,172.6c0,0-1.8,2-5.1,4.6c0,0-5.2,10.1-5.3,15.7C1,198.3-1.4,213.1,4,216.5c5.4,3.3,5.4,6,5.4,6   s-3.8,28.8,7.1,43.6c0,0-2.6,12.8-3,17.1h3.5c0,0,2.1,1.3,3.3,0s3.9-4.4,3.9-4.4l2.9-26.2c0,0,3.2-5,5-5.2   c1.8-0.3,2.3-6.1,1.3-10.6c-1-4.5,2.3-7.1,5.1-7.1s4.9,2.8,7,1.4c2.2-1.4,5.4-4.3,6.8-4.3s1.8,3.2,4.1,3.2c2.3,0,6.1-2.4,8.3-2.2   c0,0-4.4-3.1-4.1-17.5c0,0-1.8-1.5-2.6-3.4L40.7,207c0,0-2.7-0.1-8.6,1.9c0,0-5.7-0.7-11.5-9.7c0,0-1.5-1.5,4-13.3L11.5,172.6z" />
                <path data-region="13" className="st0" d="M13.6,283.1c0,0-4.1,29.8,2.3,49.1c0,0,0.9,2.2,0.7,3.9c0,0,4.3-1.4,7.5-0.1l-0.1-9.5c0,0,5.1-11.9,6-15.1   c0.9-3.2,1.8-4.4,5-3.4c3.3,1,6.4,0.2,6.4-5l6.4-4.5c0,0,1.6-0.8,0.6-3c-1-2.2,0.4-5.8,1.9-8.3l-0.1-1.4c0,0-6.4-1.4-8.6-4.9   c-2.1-3.4-2.4-8.3-2.4-8.3s1.6-11.6,1.5-19.3c0,0-0.5-2.7-3.3-6.1h-5.5c0,0-1.1-0.3-5,5.2l-2.9,26.2l-3.9,4.4c0,0-0.6,1.5-3.3,0   H13.6z" />
                <path data-region="8" className="st0" d="M64.7,227.7c0,0,2,2.1,14.1,3.3c0,0,7.2,3.1,7.7,7.4c0,0-0.9,1.4-0.3,1.8c0.6,0.4,8.3,7.3,8.3,7.3l9.4,8.9   l16,9.4c0,0,2.9,1.2,3.7-0.3c0.8-1.5,1.9-2.4,0.4-6.3c-1.4-4-2.9-5.1-2-6.2c0.9-1.1,2-2.2,2.7-1.6s4.3,2.6,4.9,3.3l1.1,14.5   l20.3,11.7l6.6-8.5v-9.3l-2.3-9.5c0,0-2-5.3-2-10.7c0-5.4,2-14.7,2-18.3c0-3.6-2.4-8.4-3.6-9.6v-47.8c0,0-4.8-1.8-8.1-4.9   c-0.2-0.2-0.4-0.1-0.5,0.2c-0.4,1.9-2.5,8.5-14,11.8l-30,1.8l-7.5,5.4l-14.1,4.4c0,0-3.4,2.7-4,3.4c0,0-1.7,1.2-0.6,4.8   c1.5,4.7,2.9,4.6,1.2,11.5c0,0,0.6,5.2-0.4,7.9c-1,2.7-1.4,8.7-1.4,8.7S72.5,226.3,64.7,227.7z" />
                <path data-region="11" className="st0" d="M85.2,309.1l-5.8,4.2v9.1c0,0,0.9,1.2,0.8,2c-0.1,0.8-2.2,3.4-2.2,3.4s-1.5,1.1-1.9,2.7c-0.3,1.6-4.8,5-4.8,5   s-3.6-0.9-4.7,0.1s-12.3,14.1-24.6,18.6c0,0-1.2-15-18-18.3l-0.1-9.5l6-15.1c0,0,0.6-5,5-3.4c4.4,1.7,6.5-1.2,6.4-5l6.4-4.5   c0,0,1.6-0.5,0.6-3c0,0-1.2-5.7,1.9-8.3c0,0,1.8,1.7,2,1.8s1.4,1.8,0.6,5.1l8.3,10.3c0,0,2.9-1.9,5.5-1.4   C66.9,303.1,79.6,305.9,85.2,309.1z" />
                <path data-region="18" className="st0" d="M85.2,309.1l11.5-7.2c0,0,2.3-0.6,3.1-4.5c0.8-3.8,5.9-8.8,5.9-8.8l17.1-18.4c0,0,1.1-2.5,0.3-4   c0,0-1.1,0.4-3-0.3l-16-9.4l-17.7-16.3c0,0-0.6-0.3,0.3-1.8c0,0-0.3-4-7.7-7.4c0,0-11.4-1-14.1-3.3c0,0-1-0.2-3.2,0.7   c-2.2,0.8-2.9,1.1-2.9,1.1s-2.2,0.8-3.1,0.3s-1.9-2-1.9-2s-0.7-1-1.3-1s-1.1,0.4-1.1,0.4s-0.7,0.3-2.3,1.5   c-1.6,1.2-2.1,1.6-2.1,1.6l-1.2,0.8c0,0-1,1.1-3.6-0.3c-2.6-1.4-3.5-1.1-3.5-1.1s-2.2,0-3.6,1.5c-1.5,1.5-1.6,3.3-1.6,3.3   s-0.1,1.3,0.1,2.3c0,0,1.8,8.9-1.3,10.6h5.5c0,0,3.1,4,3.3,6.1c0,0-0.4,14.4-1.5,19.3c0,0,0.6,5.9,2.4,8.3c1.7,2.4,5.1,4.1,8.6,4.9   c0,0-0.3,1,0.1,1.4s2,1.8,2,1.8s1.6,1.4,0.6,4.9l8.3,10.5c0,0,3.1-1.9,5.5-1.4C69.3,303.6,74.2,304.3,85.2,309.1z" />
                <path data-region="17" className="st0" d="M42.2,354.3c0,0-3.3,8.8-0.4,12.9s7.9,3.4,10.7,8.3c2.8,4.9,8.5,21.4,8.5,21.4s0.4,20.7,19.1,21.4   s26.2-18.9,27.9-26.6s4.5-14.4,4.5-14.4s-5.7-8.2-5.5-9.4c0.2-1.2-0.9-3.3-4.8-3.9c-3.8-0.6-20.4-3.9-29.3-15.6c0,0-2-2.5-0.5-5.4   c1.4-2.9,1.5-5.8-1.1-7.5c0,0-3.4-0.8-4.7,0.1C66.7,335.7,53.4,350.5,42.2,354.3z" />
                <path data-region="14" className="st0" d="M151.2,281.1c0,0,0.8,12.3,5.7,14.9s1,6.6-1.5,8.3s-5.4,4.8-5.4,4.8l-8.3,0.9l-7.7,3.4c0,0-4.9,2.4-2.2,5.4   c2.7,3.1,6.8,7,6.8,7s2.4,1.4-0.3,4.4s-9.7,7.1-9.2,14.8c0,0,0.5,1.4,3.1,1.9c2.6,0.5,9.7,8.9,10,11.1c0,0-4.9,7.1-6,13.1   c-1,6-11.7,18.7-17.2,7c0,0-3.4-7.1-6.4-0.7c0,0-4.8-6.9-5.5-9.4c0,0,0.6-2.9-4.8-3.9S83,360.6,73,348.5c0,0-1.8-2.4-0.5-5.4   c1.3-3,1.6-5.5-1.1-7.5c0,0,4.5-3.3,4.8-5c0.3-1.7,1.9-2.7,1.9-2.7s2.2-2.7,2.2-3.4c0-0.8-0.8-2-0.8-2v-9.1c0,0,14.2-10,17.2-11.4   c0,0,1.6,0,3.1-4.5c1.5-4.4,5.9-8.8,5.9-8.8l17.1-18.4c0,0,1.1-0.9,0.3-4c0,0,3.4-1.9,1.1-6.9l-2-4.6c0,0-0.5-0.9,0-1.6   s1.6-1.5,1.6-1.5s0.6-0.6,1.1-0.1c0.5,0.5,4.9,3.3,4.9,3.3l1.1,14.5L151.2,281.1z" />
                <path data-region="15" className="st0" d="M142.1,357.9c0,0,3-0.4,4.4,2.4c1.4,2.8-1.7,9.8,5.7,9.3c7.4-0.5,7.3-3.8,10.5-1c3.2,2.8,5.5,13.3,12,13.1   c6.5-0.1,11-4.7,11-4.7s5.9-14.7,17.4-13.8s16.1,1.1,16.1,1.1l6.9-16.6l-16.1-1.9l-5.9-7.7l-0.6-6.8c0,0-1.4-2-2.9-0.9   c-1.5,1.1-2.7,1.1-2.7,1.1l-7.1-16.3c0,0-7,4.2-19.9-3.3l-4.2-0.1c0,0-7-6.8-7-7.7s-0.4-4.4-0.4-4.4s-0.5,2.2-3.7,4.4   c-3.3,2.2-5.4,4.8-5.4,4.8l-8.3,0.9l-7.7,3.4c0,0-4.8,2.3-2.2,5.4l6.8,7c0,0,2.3,1.4-0.3,4.4l-5.1,5c0,0-4.6,4.4-4.1,9.9   c0,0,0.5,1.4,3.1,1.9C134.6,347.3,141.7,355.6,142.1,357.9z" />
                <path data-region="0" className="st0" d="M99.9,62.6c0,0,8-8.3,12.1-8.9l6.3-7.1c0,0-0.2-17,9-17c0,0,4.3-13,8.3-17.4c0,0,2.7-4.9-0.6-6s-4.6-1-4.6-1   s-6-1-24.6,1.3c0,0-9.9,3.2-18.6-2.9S56.6,2.3,56.6,2.3l-0.1,15.1c0,0,4.8-1.3,6.9,1s4.5,3.6,4.5,3.6s3.6,1.8,2.9,4.6l7.5,9   l0.2,7.8H80l4.1,11.6l9.5,7.8L99.9,62.6z" />
                <path data-region="1" className="st0" d="M163.1,55.9c-1.5,0.7-4.8,2.2-6.2,2.8c-10.4,4.5-13.6,16.2-13.6,16.2c0.4,0.3,2,14.9-0.8,21.2   c-2.8,6.3-2.6,13.2-2.6,13.2h-10.7c0,0-6.6-2.2-7.9-3.7s-15.7-4.7-16.2-5.2c-0.5-0.5-12-1.7-12-1.7c1.7-9.7,8.6-22.8,8.6-22.8   l-1.9-13.2c7.3-7.7,12.1-8.9,12.1-8.9l6.3-7.1c0.5-17.6,9-17,9-17c-0.6,1,5.5,10.1,13.3,10.8c7.8,0.6,7.1-7,14.3-9.6   s18.3,10,13.7,15.1c-3.7,4.2-4.4,7.9-4.6,9.2L163.1,55.9z" />
                <path  data-region="12" className="st0" d="M50.4,285.9c0,0,2-6.7,9-8.2c0,0,1.4-2.8,0.8-5.3s1.1-4.3,1.1-4.3s1.9-3.1,3.3-5.7c1.4-2.6,3.8-2.4,3.8-2.4   s2.9,0.4,3.7-1.4c0.9-1.8,3.1-3.2,3.1-3.2h7.1c0,0-2.9,1.5-2,3.4c0.9,1.9,0.6,5.4,8.2,11.1l3.8,0.1c0,0-0.6,6,3.8,11.1l-6.4,7.3   c0,0-5.6,0.9-3.2,5.6c2.4,4.8-1.4,15-1.4,15s-11.2-5-18.4-5.9c0,0-2.7-0.5-5.5,1.4L53,294c0,0,1-3.3-0.6-4.9S49.9,287.6,50.4,285.9   z" />
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