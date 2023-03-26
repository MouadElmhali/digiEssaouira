// @ts-nocheck
import Image from "next/image";
import { useState } from "react";

export default function AitDaoudMap() {

    const [show, setShow] = useState();

    const mapData: Array<any> = [

        {
            city: "جماعة بزضاض",
            president: "الرئيس",
            image: "/images/electeds/bizdade.jpg",
        },


        {
            city: "جماعة إيزاويت",
            president: "الرئيس",
            image: "/images/electeds/izaouite.jpg",
        },


        {
            city: "جماعة سيدي غانم",
            president: "الرئيس",
            image: "/images/electeds/sidighanem.jpg",
        },


        {
            city: "جماعة تاهلوانت",
            president: "الرئيس",
            image: "/images/electeds/tahelouante.jpg",
        },


        {
            city: "جماعة تاكوشت",
            president: "الرئيس",
            image: "/images/electeds/takouchete.jpg",
        },


        {
            city: "جماعة ايت داود",
            president: "الرئيس محمد ارخى  حزب الإتحاد الإشتراكي للقوات الشعبية",
            image: "/images/electeds/aitdaoud.jpg",
        },

        {
            city: "جماعة أكليف  ",
            president: "الرئيس احمد اشالا حزب التقدم والإشتراكية",
            image: "/images/electeds/aglif.jpg",
        },


        {
            city: "جماعة بوزمور ",
            president: "الرئيس",
            image: "/images/electeds/bouzemoure.jpg",
        },

        {
            city: "جماعة أسيس",
            president: "الرئيس",
            image: "/images/electeds/assais.jpg",
        },


        {
            city: "جماعة أدغاس",
            president: "الرئيس",
            image: "/images/electeds/adaghass.jpg",
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
                viewBox="0 0 179.7 337.8"
                style={{
                    enableBackground: "new 0 0 179.7 337.8",
                }}
                xmlSpace="preserve"
                onClick={handleSVGClick}
                height={300}
                width={300}
            >
                <style>{".st0{fill:#61c3d5;stroke:#010202;stroke-miterlimit:10}.st0:hover{fill:blue;}"}</style>
                <path data-region="8" className="st0" d="M85.8,313.1c0,0,5.4-0.2,10,6.6c4.6,6.8,45.3,27.6,74.4,11.7c0,0,1.2-8.3-8.7-19.6l16.7-43.4   c0,0,2.2-3.2,0.2-10.7c-2-7.5-15.5-34.2-14.6-41.5L134.7,203c0,0-8.5-2.9-12.4-2.7c0,0-6,6.6-0.2,9.9s12.6,6.5,12.6,6.5   s4.9,0.7,3.1,5.3c-1.9,4.6-7.8,6.3-10.7,6.8l-3.4,17.5l-11.9,17c0,0-3.7,3.2,1.4,7s7.5,4.8,7.7,9.2c0.2,4.4,1.5,7.5,5.8,9.7   c4.3,2.2,5.3,3.6,5.3,3.6s2.6,2-0.5,4.3s-10.7,3.9-10.7,3.9L101,301c0,0-2.7-1.4-4.8,0.2c-2,1.5-6.8,3.1-6.8,3.1L85.8,313.1z" />
                <path data-region="9" className="st0" d="M57.3,264.1l11.2-3.4l7.8-7.8l25.9-12.1l11.2-2.7l13.6-9.4l-3.4,17.5l-11.9,17c0,0-3.4,3.2,1.4,7   c0,0,7.7,4.1,7.7,9.2s2.6,8.2,5.8,9.7s5.3,3.6,5.3,3.6s2.9,2.7-0.5,4.3c-3.4,1.5-7,3.6-10.7,3.9S101,301,101,301s-2.7-1.3-4.8,0.2   c-2.1,1.4-6.8,3.1-6.8,3.1l3.2-7.8l-16.1-1.9l-5.9-7.7l-0.6-6.8c0,0-1.4-1.8-2.9-0.9c-1.6,0.9-2.1,1.2-2.7,1.1L57.3,264.1z" />
                <path data-region="7" className="st0" d="M22.1,202.5l39.1-5.7c0,0,3.6-1.1,6.4,1.3c2.8,2.4,4.9,3.3,4.9,3.3l7.1,10.5c0,0,3.1,2.2,3.4,6   c0.4,3.8,23.2,5.1,25.1-0.8c1.9-5.9,6.4-17.5,7.9-18.9c1.5-1.4,6.1,2,6.1,2s-6.2,6.4-0.2,9.9c6,3.4,12.6,6.5,12.6,6.5   s5,1.2,3.1,5.3c-2,4.1-4.4,5.3-10.7,6.8l-13.6,9.4l-11.2,2.7l-25.9,12.1l-7.8,7.8l-11.2,3.4c0,0-5.7,4.3-19.9-3.3l-4.2-0.1l-7-7.7   l-0.4-4.4c0,0,0.8-2.5-2.2-4s-4.7-7.5-5.7-14.9l6.6-8.5V212L22.1,202.5z" />
                <path data-region="6" className="st0" d="M18.6,116.1l8.5,5.9c0,0,1.3-0.8,4.1,0.8s5.9,2.3,7.9,5.4l8.7,1c0,0,1.8,0,2.8,3.1c1,3.1,8.2,8.9,12.3-3.1   l13-4.1c0,0,3.8-1.8,6.4,1.3c2.6,3.1,14.3,13.5,14.3,13.5s1.3,3.1,11,3.1c0,0-12.9,31.7,8.7,55.3c0,0-4.9,9.8-7.9,18.9   c0,0-0.8,3.6-11.1,4s-12.9-1.6-14.1-3.2c0,0-0.7-4.4-3.4-6l-7.1-10.5c0,0-4.2-2.4-4.9-3.3s-3.8-1.8-6.4-1.3   c-2.6,0.5-39.1,5.7-39.1,5.7s-2.6-8.5-2.1-11.2c0.5-2.7,2.2-17.9,2.2-17.9s-0.8-6.6-3.6-9.6V116.1z" />
                <path data-region="4" className="st0" d="M8.8,64.1l9.3,2.7c0,0,2.7-0.9,3.1,2.4c0.3,3.2,6,6.6,6,6.6s5.4-0.2,8.5,0.3s13.1,3.1,13.1,3.1   s2.4,0.9,3.9,2.6c1.5,1.7,5.8,0.7,5.8,0.7s10.4,6.6,16.3,5.3c0,0,6.6,4.3,0.9,10.9l7.3,9.7c0,0,10,8.7-0.8,18c0,0-1.7-2.7-6.4-1.3   s-13,4.1-13,4.1s-4.7,14.2-12.3,3.1c0,0-1.1-2.8-2.8-3.1c-1.7-0.3-8.7-1-8.7-1s-0.7-2.3-7.9-5.4c0,0-2.7-1.5-4.1-0.8l-8.5-5.9   c0,0-6.7-3-8.5-5.2c0,0,2.2-7.1,2-10.5L1.7,78.9c0,0-2-1.5-0.9-4.4s0.7-4.4,3.7-5.8C7.5,67.3,8.8,64.1,8.8,64.1z" />
                <path data-region="2" className="st0" d="M9.2,44.7c0,0-2.7,5-2.6,13.2l2.2,6.1l9.3,2.7c0,0,2.6-0.7,3.1,2.4c0,0,0.6,3.4,6,6.6c0,0,6.8,0,8.5,0.3   l13.1,3.1c0,0,2.9,1.5,3.9,2.6c1,1.1,4.6,1.2,5.8,0.7c0,0,6.3,3.7,9.4,4.5c0,0,4.5-21.2,5-27.4c0.5-6.2-4-5.9-4.4-12.8   c0,0-37.5,1.3-56.5-2L9.2,44.7z" />
                <path data-region="0" className="st0" d="M74.8,87.7c0,0,4.8,0.8,9.4-3.2c4.6-4,16.8-18.9,23.5-18.6c0,0,2-0.4,3.9,3c2,3.4,7.5,6.7,7.5,6.7   s1.9,0.3,2.4,1.4c0.5,1,7.3,9.3,13.3,9c0,0-1.2-27.8-11.1-42.8s-2.7-35.4-2.7-35.4s-5.9-7.5-16.1-7.4S79.7,7.7,79.7,7.7   s8.8,7.8,7.1,11.4c-1.6,3.6-4.4,6.5-5.8,7.1c0,0-1.4,3.3-1.2,3.9c0.2,0.6-4,13.2-10.2,16.7l-1.2,0c0,0,0.2,4.4,2.9,6.9   c0,0,1.7,2.6,1.5,5.8c-0.5,6.5-5,27.4-5,27.4S71.1,88.6,74.8,87.7z" />
                <path data-region="3" className="st0" d="M134.7,86.5l-0.2,4.8c0,0,0,0,0,0c0,0.1-0.2,1.5-1.3,3.3c-1.1,1.9-10.9,11.3-14.5,13.5l-0.1,0.1   c-0.2,0.1-0.9,0.7,0.3,2.9c1.4,2.6,2.7,8.9,2.4,11.4c-0.3,2.4-2.9,12.4-13.8,20.5c-0.1,0.1-0.2,0.1-0.2,0.1   c-1,0.1-7.8,0.3-10.8-3.1l-13.9-13.2c-0.2-0.2-0.2-0.5,0-0.7c1.8-1.6,9.3-8.9,0.4-17.7c0,0,0,0,0,0l-7.1-9.4   c-0.1-0.2-0.1-0.4,0-0.6c1-1.1,4.3-5.5-0.2-9.8c-0.3-0.3-0.1-0.7,0.3-0.8c1.7-0.1,5-0.6,8.2-3.3l6.3-6.3c0,0,12.2-12.9,17.1-12.2   c0,0,2,0.2,3.9,3c1.8,2.6,6.7,6.1,7.4,6.7c0.1,0,0.1,0.1,0.2,0.1c0.3,0,1.5,0.3,2.3,1.4c1,1.3,6.3,8.6,12.8,9   C134.5,86,134.7,86.2,134.7,86.5z" />
                <path data-region="1" className="st0" d="M30.6,4.3c0,0-2.5,1.2-7.1,3.1S11.7,15.7,10,23.6c0,0,2.5,12.6-0.8,21.2l2.8,0.1l4.3,0.9l18,1.1l21.1,0.3   l13.2-0.3l1.2,0c0,0,7-4.2,10.2-16.7c0,0,0.6-2.9,1.2-3.9c0,0,4.6-3.4,6-7.9c0,0,0.4-1.5-1.4-4c-1.8-2.5-6-6.6-6-6.6   S71.3,11.6,67,5c0,0-0.3-3.2-6.4-3.2c0,0-5.2-0.3-13,3.8S30.6,4.3,30.6,4.3z" />
                <path data-region="5" className="st0" d="M70.5,149.4c0,0-0.4,5.2,1.8,7.4c2.2,2.2,6.8,9.2,7.3,9.4c0.5,0.3,5.7,1.3,7.7,0.6c1.9-0.6,7.4-2.4,8-3.4   c0.6-1,2.6-2.7,2.8-4.3s2.2-6.9-1.4-9.2c-3.6-2.3-13-5.9-13-5.9s-6.3-2.2-7.5-1.4C74.8,143.4,70.2,148.2,70.5,149.4z" />
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
                />
                <div className="mr-5">
                    <span className="text-2xl font-semibold"> {mapData[show].city}</span>
                    <br />
                    <span className="text-2xl font-semibold"> {mapData[show].president}</span>
                </div>
            </div>}
    </>
}