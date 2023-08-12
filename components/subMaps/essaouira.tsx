// @ts-nocheck
import Image from "next/image";
import { useState } from "react";

export default function Map() {

    const [show, setShow] = useState();

    const mapData: Array<any> = [
        {
            city: "جماعة سيدي العروسي",
            president: " الرئيس محمد صبحي",
            partie:" حزب الإستقلال",
            image: "/images/electeds/sidilaaroussi.jpg",
        },
    
        {
            city: "جماعة سيدي عبد الجليل",
            president: "الرئيس حميد اشقيف",
            partie:" حزب التقدم والإشتراكية",
            image: "/images/electeds/sidiabdeljalil.jpg",
        },
    
    
        {
    
            city: "جماعة تالمست",
            president: "الرئيس عبدالقادر زربع",
            partie:" حزب الإستقلال",
            image: "/images/electeds/talmest.jpg",
        },
    
    
        {
    
            city: "جماعة سيدي إسحاق",
            president: "الرئيس محمد الفيدي",
            partie:" حزب الإستقلال",
            image: "/images/electeds/sidiishak.jpg",
        },
    
    
        {
    
            city: "جماعة سيدي علي الكراتي",
            president: "الرئيس محمد كريم",
            partie:" حزب الإستقلال",
            image: "/images/electeds/sidialilkerti.jpg",
        },
    
    
        {
            city: "جماعة زاوية بن احميدة",
            president: "الرئيس محمد عبد الصادق السعيدي ",
            partie:" حزب الإتحاد الإشتراكي للقوات الشعبية",
            image: "/images/electeds/zaouiatbenhmida.jpg",
        },
    
    
        {
    
            city: "جماعة أقرمود",
            president: "الرئيس محمد الزكار",
            partie:"  حزب الأصالة والمعاصرة",
            image: "/images/electeds/aqarmoud.jpg",
        },
    
        {
            city: "جماعة تكاط  ",
            president: "الرئيس كمال القلولي ",
            partie:"حزب الأصالة والمعاصرة",
            image: "/images/electeds/takat.jpg",
        },
    
    
        {
            city: "جماعة حد الدرى",
            president: "الرئيس يوسف الصديقي",
            partie:" حزب الإستقلال",
            image: "/images/electeds/heddraa.jpg",
        },
    
        {
            city: "جماعة مولاي بوزرقطون",
            president: "الرئيس ريضا فيض ",
            partie:"حزب التجمع الوطني للأحرار",
            image: "/images/electeds/moulaybouzerktoun.jpg",
        },
    
        {
            city: "جماعة أوناغة",
            president: "الرئيسة امال الهنتاتي ",
            partie:"حزب التجمع الوطني للأحرار",
            image: "/images/electeds/ounagha.jpeg",
        },
    
        {
            city: "جماعة الصويرة",
            president: "محمد طارق عثماني ",
            partie:"حزب التجمع الوطني للأحرار",
            image: "/images/electeds/essaouira.jpg",
        },
        {
            city: "جماعة المخاليف",
            president: "الرئيس حفيظ بن سويس",
            partie:" حزب الإستقلال",
            image: "/images/electeds/lmkhalif.jpg",
        },
    ]

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
                viewBox="0 0 377 350.6"
                style={{
                    enableBackground: "new 0 0 377 350.6",
                }}
                xmlSpace="preserve"
                onClick={handleSVGClick}
                height={300}
                width={300}

            >
                <style>{".st0{fill:#12839e;stroke:#010202;stroke-miterlimit:10}.st0:hover{fill:'13d3eb';}"}</style>
                
                <g id="Essaouira_region_1_">
                    <path data-region="9" className="st0 transition ease-in-out duration-200 hover:cursor-pointer" d="M67.6,213.1c0,0,5.1,1.9,7,6.8c1.9,4.9,0,13.6,7.8,14.8c7.8,1.2,26.2,5.3,29.8-7.7c3.6-12.9,2.2-21.3,2.2-21.3   s-3.6-11.6-7.1-18.4l0.5-5.3l9.7-11.6c0,0,3.6-14.5,3.6-17.4c0,0-14.5,3.1-17-10.6s-1.8-18.5-8.2-18.4c0,0-13.8,19.1-20.4,26.9   c0,0,3.9,7,0.2,18.2c0,0-1.5,6.6,0,11.7S76.8,194.7,67.6,213.1z" />
                    <path data-region="10" className="st0 transition ease-in-out duration-200 hover:cursor-pointer" d="M67.6,213.1l-4.9,9.4L61,253.5l12.8,1.5c0,0,2.2,5-1.5,14c0,0-0.1,0.1-0.3,0.2c-0.2,0.1-1.2,0.4-1.2,0.4   l-2.1,0.5l-2.5,0.5l-2.8,0.5l-2,0.3l-1.7,0.3l-0.1,0c0,0-0.5,0.1-0.8,0.8c-0.3,0.7-0.9,3.8-0.5,7.9c0,0,1.3,1.6-0.3,4.1   c-1.5,2.4-1.5,6.1-1.5,6.1l-0.1,6.4c0,0,21.8-4.9,30.6,1.4s18.6,2.9,18.6,2.9s25.9-3.3,29.1-0.3c0,0,11.7,2.9,13.7-1.7   c1.9-4.6,2.9-18-1.5-25.8c-4.5-7.8-9.6-17.4-0.1-30.3l-8.2-6.5c0,0-14.6-1.3-26.3-9.9c0,0-1.6,11.9-22.1,8.9l-8.2-1.3   c0,0-4.9-0.1-6.1-8.4C75.7,226.2,76.4,216.5,67.6,213.1z" />
                    <path data-region="8" className="st0 transition ease-in-out duration-200 hover:cursor-pointer" d="M117.4,170.6c0,0,9.6,6.2,13.1,9.5l10.6-1.3c0,0,2.5-1.1,3.3,1.4c0.8,2.6,0.2,6.6,3.4,8.9   c3.3,2.2,3.7,5.1,3.7,5.1l3.4,24.2l-2.7,1.5c0,0-2.5,1.3-2.3,2c0.2,0.7-0.2,14.6-0.2,14.6l-3.1,7.1l-8.2-6.5c0,0-12.9-0.9-26.3-9.9   c0,0,3.3-11.3,2.2-21.3c0,0-3.2-10.8-7.1-18.4l0.5-5.3L117.4,170.6z" />
                    <path data-region="7" className="st0 transition ease-in-out duration-200 hover:cursor-pointer" d="M121,153.2c0,0,41.7-12,48.5-19.9c0,0,10.3-0.6,13.9,1.1c3.6,1.8,8.7,18,12.8,22.9c0,0-4.1,8.2-3.6,14   c0.5,5.9,1.3,7.9-2.4,14.7l-0.6,11.6l-9.2,10c0,0-2.6,2.6-4.8,2c-2.1-0.6-4.8-1-4.8-1l-0.3-5.6c0,0-4.2-0.1-4.6,2.9   c-0.4,3-0.1,3.4-0.8,4.3s-4.5,5.7-4.5,5.7l-5.7,2.4l-3.4-24.2c0,0-1.2-3.2-3.8-5.2c-2.6-2-2.9-6.8-2.9-6.8l-0.5-1.9   c0,0-0.7-2.4-3.3-1.4l-10.6,1.3c0,0-8.1-6.6-13.1-9.5C117.4,170.6,120.8,157.1,121,153.2z" />
                    <path data-region="5" className="st0 transition ease-in-out duration-200 hover:cursor-pointer" d="M241.4,130.7c0,0,2.5-6.4-2-13.4c-4.4-7-3.1-9-3.1-9l-6.8,0.9c0,0-2.6-2-3.2-3.2c-0.7-1.2-3.7-1.5-5.6-1.9   c-1.9-0.3-6.6-4.1-6.6-4.1s-5.3,6-9.2,11.4c-3.9,5.4-20.6,24-20.6,24s4.5,7.2,5.8,10.7c1.4,3.7,6.1,11.3,6.1,11.3l9-0.6   c0,0,11.1-10.1,11.9-21.8l7.3-8.7l10.2,0.6L241.4,130.7z" />
                    <path data-region="6" className="st0 transition ease-in-out duration-200 hover:cursor-pointer" d="M153.9,141.9l-5.4-25c0,0-2.3-7.4,4.7-10.7c7-3.3,10.5-5.6,10.5-5.6s4-4.2,4.2-6.6c0.3-2.4-4.3-7.5-4.3-7.5   s-4.5,7.8-9.4,8c-5,0.3-3.8-7.9-3.8-7.9s-0.4-2.9-2.9-2.8c-2.6,0.1-5.7-2.4-6.4,0.6c-0.6,3.1-0.4,6.3-2.2,6.6s-6.8-9.1-15.2-6.8   c0,0-15.5,24.5-27.9,40.1c0,0,4.3-0.9,5.6,4.8c1.4,5.6,2.6,13.6,2.6,13.6s1.4,13,17,10.6C121,153.2,148.7,144.9,153.9,141.9z" />
                    <path data-region="3" className="st0 transition ease-in-out duration-200 hover:cursor-pointer" d="M187.4,0.9c0,0,8.7,14.3,8.9,18.4s4.3,17.7,8.2,15.5c3.9-2.2,2.4-13.8,9.9-9s9,16.3,8,19.9   c0,0-7.7,0.5-11.2,6.1c-3.6,5.6-20.3,4.8-20.3,4.8l-20.6,15.1l-6.6,14.7c0,0-4.3,7.9-9.4,8c0,0-4.3,0.4-3.8-7.9   c0,0-0.4-2.8-2.9-2.8s-6.1-2-6.4,0.6c0,0,0,6.3-2.2,6.6s-6.6-8.9-15.2-6.8c0,0,7.5-11.7,14.7-21.3C145.5,53.3,187.4,0.9,187.4,0.9z   " />
                    <path data-region="1" className="st0 transition ease-in-out duration-200 hover:cursor-pointer" d="M214.1,99.9l3.1,2.3c0,0,2.5,1.5,3.6,1.8c1.1,0.3,5.1,0.7,5.6,1.9c0.5,1.2,3.2,3.2,3.2,3.2l6.8-0.9V92.5   c0,0-0.9-6.7,6.9-6.7c7.7,0,10,0,10,0s2-12.8-0.3-18.7c-2.4-6-1.4-6.2-1.4-6.2s-4.9-2.9-6.3-6.6c-1.4-3.7-4.6-3.1-4.6-3.1   s-1.4-3-1.4-4.1c0-1.1-4.1,0.3-5.6,2.5c0,0-9,20.2-11.7,9.9l-7.7,4.2c0,0,2,3.7,3.6,4.2c1.5,0.5,3.6,3.1,3.6,4.7   c0,1.7,0.3,16.6,0.3,16.6S215.6,98.7,214.1,99.9z" />
                    <path data-region="12" className="st0 transition ease-in-out duration-200 hover:cursor-pointer" d="M291.2,12.3c0,0-4.1,14.8-2.7,22.5c1.4,7.7-2.4,7.7-0.9,13.4s-2.9,11.7-2.9,11.7s-2.7,7.8-2.6,11.2   c0.2,3.4-2,14.1-9.7,15.1s-19.1-0.5-19.1-0.5l0.8-6.5c0,0,0.3-6-1.1-12.3c-1.4-6.2-1.4-6.2-1.4-6.2l-3.9-3l-2.4-3.6   c0,0-2.4-4.1-4.6-3.1l-1.4-4.1c0,0,2.6-2,2.6-5c0-3.1-5.1-11.9,8.7-10c13.8,1.9,22.8-0.3,22.8-0.3s8.7-4.1,9.7-9.9   C284.1,16,291.2,12.3,291.2,12.3z" />
                    <path data-region="0" className="st0 transition ease-in-out duration-200 hover:cursor-pointer" d="M289.2,119c6.1,4.6,4.1,6,8.2,2.4c4.1-3.6,9.5-10.9,9.5-10.9s-2-13.1,7.1-14.6s20.4-1.2,20.4-1.2l14-4.4   c0,0,2.6-1,6.3,1.5l13.8-3.9c0,0-0.2-8,2.2-14.3c2.4-6.3,5.8-20.1,5.8-23.8c0-3.7-3.2-15.3-15.1-14.3c-11.9,1-26,12.3-30.6,9.7   c-4.6-2.6-29.8-35.7-29.8-35.7s-5.4-6.5-9.7,2.9s-2.7,22.5-2.7,22.5s0.5,4.6,0.3,5.1c-0.2,0.5-2,6.1-1.2,8.3   c0.9,2.2-0.9,8.5-0.9,8.5l-2,3.2c0,0-2.6,9.4-2.6,11.2c0,1.9-0.3,13.4-9.7,15.1c0,0-10,0.9-19.1-0.5h-10c0,0-6.6-0.3-6.9,6.7   c-0.3,7.1,0,15.7,0,15.7s-0.3,3.7,2.2,6.8c2.6,3.1,4.3,11.6,2.8,15.6l18.7,14c0,0,10.8-2.3,13.4-9.3l9.2-14" />
                    <path data-region="4" className="st0 transition ease-in-out duration-200 hover:cursor-pointer" d="M222,59.4l0.3-13.8c0,0-7.1,0.5-11.2,6.1c-4.1,5.6-20.3,4.8-20.3,4.8l-20.6,15.1l-6.6,14.7   c0,0,4.9,5.1,4.3,7.5c-0.5,2.4-4.2,6.6-4.2,6.6l-10.5,5.6c0,0-6.3,2.7-4.7,10.7c1.5,8,5.4,25,5.4,25s12.8-4.7,15.6-8.6   c0,0,12.5-0.5,14.8,2c0,0,27.8-32.7,29.8-35.4c0,0-10.5-9.7-10.3-17.9c0.3-8.2,8.8-17.7,10.5-18.4C216,63,222,59.4,222,59.4z" />
                    <path data-region="11" className="st0 transition ease-in-out duration-200 hover:cursor-pointer" d="M62.7,222.6L61,253.5l12.8,1.5c0,0,0.5,0.8,0.5,4.1c0,3.3-1.8,9.2-2,10c-0.3,0.8-10.7,2.6-12.8,2.8   s-1.3,8.7-1.3,8.7s1.3,1.8-0.3,4.1c-1.5,2.3-1.5,6.1-1.5,6.1l-0.3,21.4c0,0,4.9-1.5,7.9,1.8c3.1,3.3,6.6,3.3,6.4,7.4l-11.7,12.3   c0,0-4.3,2-16.3-3.6c0,0-15.1-2.6-20.7,14.8L11.2,350c0,0-2.1-3.6-6.3-3.1c0,0-13.1-18.7,5.8-34.4c0,0,24.3-25.3,20.1-51.7   C30.8,260.8,52.3,239,62.7,222.6z" />
                    <path data-region="2" className="st0 transition ease-in-out duration-200 hover:cursor-pointer" d="M214.1,99.9c0,0-10.4-9.1-10.3-17.9c0.1-8.8,8.3-16.9,10.5-18.4c0,0,2.5,4,3.6,4.2s3.6,3.2,3.6,4.7   c0,1.5,0.3,16.6,0.3,16.6L214.1,99.9z" />
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