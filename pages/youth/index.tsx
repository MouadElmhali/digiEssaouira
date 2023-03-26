import React from 'react'
import Head from "next/head";
import Section from "../../components/Section";


export default function Youth () {
    return (
        <>
            <Head>
                <title>DigiEssaouira | فضاء الشباب</title>
            </Head>
            <main>
                <div className='mt-48 mb-48'>
                    <div className="flex flex-row  justify-center md:justify-start items-center gap-2">
                        <div className="sm:w-5 md:w-60 h-px bg-black"></div>
                        <div className='flex items-center justify-center w-full relative left-2 md:left-24 '>
                            <h2 className="text-6xl font-bold text-blue">فضاء الشباب</h2>
                        </div>
                    </div>
                    <div className='mt-24 mx-auto xl:mx-44 2xl:mx-64 flex flex-row flex-wrap gap-8 justify-center items-center'>
                        {[...Array(6).keys()].map((index) => (
                            <div key={index}
                                className="h-72 w-72 bg-blue  overflow-hidden shadow-xl"
                            >
                                <img 
                                    src="/images/thumb6.jpg"
                                    className="object-cover w-full h-44"
                                />
                                <div className='flex flex-col mx-5 my-2'>
                                    <p className='text-white text-xl font-bold'>فضاء الشباب الأول</p>
                                    <p className='text-xs text-white mt-2'> {"هناك حقيقة مثبتة منذ زمن طو￾ل وهي أن المحتوى المقرو لصفحة ما سيلهي القارئ عن ال￾كيز ع￾ الشكل الخارجي للنص أو شكل توضع الفقرات ￾ الصفحة التي يقرأها.".substr(0, 100) + " ..."}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main >
        </>
    )
}