import * as React from "react"
import { useState } from "react";
import Image from "next/image";
import EssaouiraMap from "../../components/subMaps/essaouira";
import HanchanMap from "../../components/subMaps/hanchan";
import TmanarMap from "../../components/subMaps/tmanar";
import AitDaoudMap from "../../components/subMaps/aitDaoud";

export default function Test() {
    const [showPopup, setShowPopup] = useState(false);
    const [mapNum, setMapNum] = useState();

    const handleSVGClick = event => {
        setMapNum(event.target.getAttribute('data-region'));
        if (event.target.getAttribute('data-region')) {
            setShowPopup(true);
        }

    };
    return (
        <div className="flex flex-col items-center bg-primary">
            <h1 className="text-center text-white text-2xl mt-48">خريطة تفاعلية</h1>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                x={0}
                y={0}
                viewBox="0 0 397.2 715.2"
                style={{
                    enableBackground: "new 0 0 397.2 715.2",
                }}
                xmlSpace="preserve"
                height={550}
                className="mt-10 mb-4"
                onClick={handleSVGClick}

            >
                <style>
                    {
                        ".st0{fill:#7db928;stroke:#010202;stroke-width:2;stroke-miterlimit:10}.st0:hover{fill:#427000}.st1{fill:#fff}"
                    }
                </style>
                <path
                    data-region="4"
                    className="st0"
                    d="M256.2 547.3s-4.6-3.4-6.1-2c-21.6-23.6-8.7-55.3-8.7-55.3h-.1c.1 0 .1 0 .2-.1 10.9-8 13.6-18.1 13.8-20.5.3-2.4-1-8.8-2.4-11.4-1.2-2.2-.5-2.8-.3-2.9l.1-.1c3.5-2.1 13.3-11.6 14.5-13.5 1.1-1.8 1.3-3.2 1.3-3.3l.2-4.8c0-.2-.2-.4-.4-.4h.4s-1.2-27.8-11.1-42.8c-10-14.9-2.7-35.4-2.7-35.4s-5.9-7.5-16.1-7.4-25.1 7.2-25.1 7.2 3.2-4.7 5.3-2c-2-2.3-5.3 2-5.3 2s-8.4 3.9-12.8-2.7c0 0-.3-3.2-6.4-3.2 0 0-5.2-.3-13 3.8s-16.9-1.3-16.9-1.3-2.5 1.2-7.1 3.1c-4.6 2-11.9 8.3-13.6 16.2 0 0 2.5 12.6-.8 21.2 0 0-2.7 5-2.6 13.2l2.2 6.1s-1.4 3.2-4.3 4.6c-3 1.4-2.5 2.9-3.7 5.8-1.1 2.9.9 4.4.9 4.4l10.3 21.4c.3 3.4-2 10.5-2 10.5 1.8 2.2 8.5 5.2 8.5 5.2v47.8c2.9 2.9 3.6 9.6 3.6 9.6s-1.7 15.2-2.2 17.9 2.1 11.2 2.1 11.2l2.3 9.5v9.3l-6.6 8.5c1 7.4 2.7 13.4 5.7 14.9s2.2 4 2.2 4l.4 4.4 7 7.7 4.2.1c14.2 7.7 19.9 3.3 19.9 3.3l7.1 16.3c.6.1 1.1-.2 2.7-1.1s2.9.9 2.9.9l.6 6.8 5.9 7.7 16.1 1.9-3.2 7.8s4.7-1.7 6.8-3.1c-2 1.5-6.8 3.1-6.8 3.1l-3.7 8.8s5.4-.2 10 6.6 45.3 27.6 74.4 11.7c0 0 1.2-8.3-8.7-19.6l16.7-43.4s2.2-3.2.2-10.7-15.5-34.2-14.6-41.5L268.6 550s-8.5-2.9-12.4-2.7"
                />
                <path
                    data-region="3"
                    className="st0"
                    d="m210.5 641.7-5.9-7.7-.6-6.8s-1.4-2-2.9-.9-2.7 1.1-2.7 1.1l-7.1-16.3s-7 4.2-19.9-3.3l-4.2-.1s-7-6.8-7-7.7-.4-4.1-.4-4.3c.4-1.4 0-2.9-2.2-4-4.9-2.6-5.7-14.9-5.7-14.9l6.6-8.5V559l-2.3-9.5s-2-5.3-2-10.7 2-14.7 2-18.3-2.4-8.4-3.6-9.6v-47.8s-4.8-1.8-8.1-4.9c-.2-.2-.4-.1-.5.2-.2 1 2.1-1.2-.3 1.3 1.4-1.5-.5 1.3.1-1 2.8-9.4 2.2-11.4 2.2-11.4l-10.3-21.4s-2-1.3-.9-4.4.4-4.3 3.7-5.8c3.2-1.4 4.3-4.6 4.3-4.6l-2.2-6.1s-.3-6.9 2.6-13.2c2.8-6.3 1.1-20.8.8-21.2 0 0 3.2-11.7 13.6-16.2 1.4-.6 4.7-2.1 6.2-2.8l.9-.8c.1-1.3.8-5 4.6-9.2 4.6-5.1-6.5-17.6-13.7-15.1s-6.5 10.2-14.3 9.6-13.9-9.8-13.3-10.8c0 0 4.3-13 8.3-17.4 0 0 2.7-4.9-.6-6s-4.6-1-4.6-1-6-1-24.6 1.3c0 0-9.9 3.2-18.6-2.9-8.7-6.2-30.6-1.4-30.6-1.4l-.1 15.1s4.8-1.3 6.9 1c2.1 2.3 4.5 3.6 4.5 3.6s3.6 1.8 2.9 4.6l-11.7 12.3c-4.7 1.9-16.3-3.6-16.3-3.6-15.1-2.9-20.7 14.8-20.7 14.8l-10.7 5.1s1.2 11.6 4.8 15.3 5.6 15.5 5.6 15.5 3.2 21.4-4.4 44.6c0 0 7.5 18.2-.9 35 0 0-2.8 5-5.1 7 0 0-1.8 2-5.1 4.6 0 0-5.2 10.1-5.3 15.7-.1 5.5-2.6 20.3 2.9 23.7 5.4 3.3 5.4 6 5.4 6s-3.8 28.8 7.1 43.6c0 0-2.6 12.8-3 17.1 0 0-4.1 29.8 2.3 49.1 0 0 .9 2.2.7 3.9 0 0 4.3-1.4 7.5-.1 16.8 3.3 18 18.3 18 18.3 2.2-.8 4.4-1.9 6.5-3.2-2.2 1.3-4.4 2.5-6.5 3.2 0 0-3.3 8.8-.4 12.9s7.9 3.4 10.7 8.3 8.5 21.4 8.5 21.4.4 20.7 19.1 21.4 26.2-18.9 27.9-26.6c1.7-7.7 4.5-14.4 4.5-14.4s-5.7-8.2-5.5-9.4c.1-.7-.3-1.8-1.4-2.7 1.7 1.2 1.4 2.7 1.4 2.7.8 2.5 5.5 9.4 5.5 9.4 3-6.5 6.4.7 6.4.7 5.4 11.7 16.2-1 17.2-7s6-13.1 6-13.1c-.3-2.2-7.5-10.6-10-11.1 2.5.5 9.7 8.8 10 11.1 0 0 3-.4 4.4 2.4 1.4 2.8-1.7 9.8 5.7 9.3s7.3-3.8 10.5-1 5.5 13.3 12 13.1c6.5-.1 11-4.7 11-4.7s5.9-14.7 17.4-13.8 16.1 1.1 16.1 1.1l6.9-16.6-16-1.8z"
                />
                <path
                    className="st0" data-region="1"
                    d="m342.8 185.3 12.5-11.4c10.2-1.8 19.7 3.3 32.4 3.3s7.9-22.5 5.9-28.3c-2-5.9 2.8-28.9 2.6-35.2-.3-6.4-.8-7.9-4.3-12.3-3.6-4.3-9.2-1.1-13.1-1.1s-2.7-2.7-2.7-2.7v-6.1c0-4.1-2.8-2.7-2.8-2.7h-3.7s-12.3 4.8-13.8 3.9c-1.4-.9-6.3-1.5-6.3-1.5l-14 4.4s-11.2 1-20.4 1.2c-9.2.2-7.1 14.6-7.1 14.6-.8.3-9.5 10.9-9.5 10.9l-2.7 2.6-5.4-5s-2.8-5.4-6.5 2.4c-3.7 7.7-9.2 14-9.2 14-3.7 7.5-13.4 9.3-13.4 9.3l-18.7-14-6.8-3.7-10.2-.6-7.3 8.7c.2 10-11.9 21.8-11.9 21.8l-9 .6c-3.4 6.3-3.6 14-3.6 14 1.7 8.9-2.4 14.7-2.4 14.7l-.6 11.6-9.2 10s-2 2.4-4.8 2c-2.7-.3-4.8-1-4.8-1l-.3-5.6s-4.6 0-4.6 2.9-.8 4.3-.8 4.3l-4.5 5.7s.4 0 1 .1l-1-.1s-10 3.7-10.7 5.9l-.2 14.6-3.1 7.1-2.7 4.4s-7.2 10.3 2.8 25.8c0 0 6.5 12.4 1 26.7h.2c-.1 0-.2 0-.3.1-.6.5-3.2 2.2-9.9 1.2l-1.1-.2c-.5-.1-.9.4-.7.9.4.9.5 2.3-.8 4.7v.1c-.3.4-3 4.2-3.1 5s-4.4 10.5-5.1 12.1c-.1.2-.1.3 0 .5.6 1.5 4.2 9.3 13.2 10.5 0 0 4.7.8 7.5-3.8 2.9-4.7 6.8-5.7 6.8-5.7s3.9-1.3 8 1.6c2.5 1.8 3.6 3.1 4 3.8.1.2.3.3.4.3-.1.2-.1.5.1.8 1.1 1.5 3.9 5.8 1.2 8.7-3.3 3.5-4.6 9.5-4.6 9.2v.4l.7.3c2.5 1.1 11.1 4.4 16.9.6 16.7-7.4 18.7-.2 18.7-.2 4.3 6.8 12.8 2.7 12.8 2.7 13.3-6 18.9-6.3 25.1-7.2 6.2-.9 12.9 4.5 12.9 4.5s2.9 2.2 3.2 2.9c0 0 8.2-3.2 15.9.5s11.2 4.4 20.3-2.9c0 0 7.1-2.2 14 1l15.7-23.8s7-13.6 2.6-24.5c0 0-7.3-3.7-14 3.1 0 0-13.3-.3-13.8-6.5 0 0-2.7-9.5 6-16.3 0 0 1.7-21.6 5.6-29.8 0 0 5.1-21.1 4.7-24-.4-2.8 1.1-4 1.1-4 7.9-4.1 11.7-15.4 11.7-15.4s.5-1.5.4-3.1l17.6-24.3c-.5-.7-2.2 2.6-2.2 2.6"
                />
                <path
                    data-region="2"
                    className="st0"
                    d="M377.4 50.5c0-3.7-3.2-15.3-15.1-14.3-11.9 1-26 12.3-30.6 9.7-4.6-2.6-29.8-35.7-29.8-35.7s-5.4-6.5-9.7 2.9c0 0-7.1 3.7-8.2 9.5-1 5.8-9.7 9.9-9.7 9.9s-9 2.2-22.8.3c-13.8-1.9-8.7 7-8.7 10 0 3.1-1.9 4.8-2.6 5-1 .4-4.1.3-5.6 2.5 0 0-9 20.2-11.7 9.9l.3-13.7c1-3.6-.5-15.1-8-19.9-7.5-4.8-6 6.8-9.9 9-3.9 2.2-8-11.4-8.2-15.5-.2-4.1-8.9-18.4-8.9-18.4s-41.9 52.4-49 62c-7.1 9.6-14.7 21.3-14.7 21.3s-15.5 24.5-27.9 40.1c0 0 .9-.2 2 .2-.6-.1-1.3-.2-2-.2 0 0-13.8 19.1-20.4 26.9 0 0 3.9 7 .2 18.2 0 0-1.5 6.6 0 11.7s1.2 13.6-8 32l-4.9 9.4c-10.3 16.5-31.9 38.2-31.9 38.2 4.3 26.5-20.1 51.7-20.1 51.7-18.9 15.7-5.8 34.4-5.8 34.4 4.2-.5 6.3 3.1 6.3 3.1l10.5-5.1c5.6-17.4 20.7-14.8 20.7-14.8 12 5.6 16.3 3.6 16.3 3.6l11.7-12.3c.3-4.1-3.3-4.1-6.4-7.4s-7.9-1.8-7.9-1.8l.2-15.1c1.1-.2 22-4.7 30.6 1.4 8.8 6.3 18.6 2.9 18.6 2.9s25.9-3.3 29.1-.3c0 0 11.7 2.9 13.7-1.7 1.9-4.6 2.9-18-1.5-25.8-4.4-7.8-9.6-17.4-.1-30.3l3.1-7.1s.4-13.9.2-14.6 2.3-2 2.3-2l2.7-1.5 5.7-2.4s3.8-4.9 4.5-5.7c.7-.8.3-1.3.8-4.3.4-3 4.6-2.9 4.6-2.9l.3 5.6s2.6.4 4.8 1c2.1.6 4.8-2 4.8-2l9.2-10 .6-11.6c3.7-6.8 2.9-8.8 2.4-14.7-.5-5.4 2.9-12.5 3.5-13.8.1.1.1.2.1.2l9-.6s11.1-10.1 11.9-21.8l7.3-8.7 10.2.6 6.8 3.7 18.7 14s10.8-2.3 13.4-9.3l9.2-14 6.5-2.4c6.1 4.6 4.1 6 8.2 2.4s9.5-10.9 9.5-10.9-2-13.1 7.1-14.6c9.2-1.5 20.4-1.2 20.4-1.2l14-4.4s2.6-1 6.3 1.5l13.8-3.9s-.2-8 2.2-14.3 5.8-20.1 5.8-23.8zM68.4 214s.1.1.2.1c-.1-.1-.1-.1-.2-.1z"
                />
                <path
                    className="st1"
                    d="M126.5 152.5h-4.9c-1.1 0-2-.2-2.8-.5-.8-.3-1.4-.7-1.9-1.2s-.8-1.1-1-1.7c-.2-.6-.3-1.3-.3-2 0-.8.1-1.6.4-2.4.3-.8.7-1.4 1.2-2 .5-.6 1.1-1 1.8-1.4.7-.3 1.5-.5 2.3-.5.8 0 1.5.1 2.1.4.6.3 1.2.6 1.6 1.1.5.5.8 1 1 1.7.2.7.4 1.4.4 2.2v6.3zm-9-14.9c0-.4.2-.8.5-1.1.3-.3.7-.5 1.2-.5s.8.2 1.2.5c.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1s-.7.5-1.2.5-.9-.2-1.2-.5-.5-.6-.5-1.1zm5.9 11.8V147c0-1-.2-1.8-.6-2.3-.4-.5-1-.8-1.7-.8-.3 0-.6.1-.9.2s-.6.3-.8.6-.4.5-.6.9c-.1.3-.2.7-.2 1.2s.1.9.2 1.3l.6.9c.3.2.6.4.9.5.3.1.7.1 1.1.1h2zm-1.7-11.8c0-.4.2-.8.5-1.1.3-.3.7-.5 1.2-.5s.8.2 1.2.5c.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1s-.7.5-1.2.5-.9-.2-1.2-.5-.5-.6-.5-1.1zM137.9 152.5c-.5 0-1-.1-1.4-.3-.4-.2-.8-.5-1-.8v.7c0 .8-.1 1.6-.3 2.3s-.5 1.3-1 1.8c-.4.5-1 .9-1.6 1.2-.6.3-1.4.4-2.2.4h-.9c-.3 0-.6-.1-.8-.1-.1 0-.3 0-.4-.1-.1 0-.2 0-.3-.1l.3-3.1.8.2c.2 0 .4.1.7.1h.7c.8 0 1.3-.3 1.6-.8.3-.5.4-1.2.4-2.2v-10h3.1v5.1c0 .7.2 1.3.5 1.8s1 .7 1.9.7h.9c.3 0 .5.1.6.2.1.1.1.3.1.5v1.6c0 .1-.1.3-.2.5s-.3.3-.6.3h-.9z"
                />
                <path
                    className="st1"
                    d="M138.7 152.5c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M143 152.5c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3H143z"
                />
                <path
                    className="st1"
                    d="M147.4 152.5c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M151.7 152.5c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M156 152.5c-.3 0-.4-.1-.5-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.5-.3h3.7v-7.6h3.1v10.7H156zm7.4-17.6c-.2-.1-.4-.1-.6-.1-.2 0-.5-.1-.7-.1-.4 0-.7.1-.9.3-.3.2-.4.5-.4 1 0 .4.2.7.5 1 .3.3.9.5 1.6.5h1.2v2h-6.3v-2h1.7c-.2-.2-.4-.5-.6-.9-.2-.3-.3-.7-.3-1.1 0-.7.3-1.3.8-1.9.5-.5 1.4-.8 2.5-.8.3 0 .6 0 .9.1.3 0 .6.1.9.2l-.3 1.8zM166.8 133.3h3v19.2h-3v-19.2zM172.8 152.5v-3.1h7.3v-2.7c0-.6-.1-1.1-.2-1.5-.1-.4-.4-.7-.6-.9s-.6-.4-1-.4c-.4-.1-.9-.1-1.4-.1h-2.6v-3h3.2c.7 0 1.4.1 2.1.2.7.1 1.3.4 1.8.8s.9 1 1.3 1.7c.3.7.5 1.7.5 2.9v6.1h-10.4zM102.8 172.6h-4.9c-1.1 0-2-.2-2.8-.5-.8-.3-1.4-.7-1.9-1.2s-.8-1.1-1-1.7c-.2-.6-.3-1.3-.3-2 0-.8.1-1.6.4-2.4.3-.8.7-1.4 1.2-2 .5-.6 1.1-1 1.8-1.4.7-.3 1.5-.5 2.3-.5.8 0 1.5.1 2.1.4.6.3 1.2.6 1.6 1.1.5.5.8 1 1 1.7.2.7.4 1.4.4 2.2v6.3zm-9-14.8c0-.4.2-.8.5-1.1.3-.3.7-.5 1.2-.5s.8.2 1.2.5c.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1s-.7.5-1.2.5-.9-.2-1.2-.5-.5-.7-.5-1.1zm5.9 11.7v-2.4c0-1-.2-1.8-.6-2.3-.4-.5-1-.8-1.7-.8-.3 0-.6.1-.9.2s-.6.3-.8.6-.4.5-.6.9c-.1.3-.2.7-.2 1.2s.1.9.2 1.3l.6.9c.3.2.6.4.9.5.3.1.7.1 1.1.1h2zM98 157.8c0-.4.2-.8.5-1.1.3-.3.7-.5 1.2-.5s.8.2 1.2.5c.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1s-.7.5-1.2.5-.9-.2-1.2-.5-.5-.7-.5-1.1zM114.2 172.6c-.5 0-1-.1-1.4-.3-.4-.2-.8-.5-1-.8v.7c0 .8-.1 1.6-.3 2.3s-.5 1.3-1 1.8c-.4.5-1 .9-1.6 1.2-.6.3-1.4.4-2.2.4h-.9c-.3 0-.6-.1-.8-.1-.1 0-.3 0-.4-.1-.1 0-.2 0-.3-.1l.3-3.1.8.2c.2 0 .4.1.7.1h.7c.8 0 1.3-.3 1.6-.8.3-.5.4-1.2.4-2.2v-10h3.1v5.1c0 .7.2 1.3.5 1.8s1 .7 1.9.7h.9c.3 0 .5.1.6.2.1.1.1.3.1.5v1.6c0 .1-.1.3-.2.5s-.3.3-.6.3h-.9z"
                />
                <path
                    className="st1"
                    d="M114.9 172.6c-.3 0-.4-.1-.5-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.5-.3h3.7V162h3.1v10.7h-6.8zm.2 3.4c0-.4.2-.8.5-1.1.3-.3.7-.4 1.2-.4s.8.1 1.2.4c.3.3.5.7.5 1.1 0 .5-.2.8-.5 1.1-.3.3-.7.4-1.2.4s-.9-.1-1.2-.4c-.4-.3-.5-.6-.5-1.1zm4.2 0c0-.4.2-.8.5-1.1.3-.3.7-.4 1.2-.4s.8.1 1.2.4c.3.3.5.7.5 1.1 0 .5-.2.8-.5 1.1-.3.3-.7.4-1.2.4s-.9-.1-1.2-.4c-.4-.3-.5-.6-.5-1.1zM136 172.6c-.1 1-.3 1.9-.6 2.7-.4.7-.8 1.3-1.4 1.8-.6.5-1.3.8-2.1 1-.8.2-1.7.3-2.7.3h-1.3c-.4 0-.9-.1-1.5-.2l.2-3c.5.1 1 .1 1.5.2.5 0 .9.1 1.2.1.5 0 1 0 1.4-.1.4-.1.8-.2 1.2-.4.3-.2.6-.5.8-.9.2-.4.3-.9.3-1.5h-1.8c-1.1 0-2-.2-2.8-.5-.8-.3-1.4-.7-1.9-1.2s-.8-1.1-1-1.7c-.2-.6-.3-1.3-.3-2 0-.8.1-1.6.4-2.4.3-.8.7-1.4 1.2-2 .5-.6 1.1-1 1.8-1.4.7-.3 1.5-.5 2.3-.5.8 0 1.5.1 2.2.4.6.3 1.2.6 1.6 1.1.4.5.8 1 1 1.7.2.7.3 1.4.3 2.2v3.2h2.6c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.6.3H136zm-3-3.1v-2.4c0-1-.2-1.8-.6-2.3-.4-.5-1-.8-1.7-.8-.3 0-.6.1-.9.2s-.6.3-.8.6c-.2.2-.4.5-.6.9-.1.3-.2.7-.2 1.2s.1.9.2 1.3l.6.9c.3.2.6.4.9.5.3.1.7.1 1.1.1h2z"
                />
                <path
                    className="st1"
                    d="M138.5 172.6c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M142.9 172.6c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M147.2 172.6c-.3 0-.5-.1-.6-.2-.1-.1-.1-.3-.1-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.5-.3h3.8v-7.6h3.1v2.3c.6-.9 1.5-1.6 2.5-2.2 1-.6 2.2-.9 3.4-.9 1 0 1.9.2 2.7.5.8.3 1.5.8 2 1.4.6.6 1 1.3 1.3 2.1s.5 1.7.5 2.7c0 .6.2 1.1.6 1.3.4.3 1 .4 1.8.4h.7c.3 0 .5.1.6.2.1.1.1.3.1.5v1.6c0 .1-.1.3-.2.5s-.3.3-.6.3h-.8c-.8 0-1.4-.2-1.9-.5-.5-.4-.9-.8-1.1-1.2-.3.6-.7 1-1.3 1.3s-1.3.4-2.1.4h-15.1zm15.2-3.1c.4 0 .6-.1.7-.4.1-.2.2-.6.2-1.1 0-1.3-.3-2.3-.9-3-.6-.7-1.6-1-2.8-1-.7 0-1.4.1-2 .4-.6.3-1.2.7-1.7 1.2s-.9 1.1-1.2 1.8c-.3.7-.5 1.4-.6 2.1h8.3z"
                />
                <path
                    className="st1"
                    d="M169.4 172.6c-.3 0-.5-.1-.6-.2-.1-.1-.1-.3-.1-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.5-.3h3.2v-16.1h3v19.2h-6.2zM180 153.4h3v19.2h-3v-19.2zM56.7 477.4h-4.9c-1.1 0-2-.2-2.8-.5-.8-.3-1.4-.7-1.9-1.2s-.8-1.1-1-1.7c-.2-.6-.3-1.3-.3-2 0-.8.1-1.6.4-2.4s.7-1.4 1.2-2c.5-.6 1.1-1 1.8-1.4.7-.3 1.5-.5 2.3-.5.8 0 1.5.1 2.1.4.6.3 1.2.6 1.6 1.1.5.5.8 1 1 1.7s.4 1.4.4 2.2v6.3zm-9-14.8c0-.4.2-.8.5-1.1.3-.3.7-.5 1.2-.5s.8.2 1.2.5c.3.3.5.7.5 1.1s-.2.8-.5 1.1c-.3.3-.7.5-1.2.5s-.9-.2-1.2-.5c-.3-.3-.5-.7-.5-1.1zm5.9 11.7v-2.4c0-1-.2-1.8-.6-2.3s-1-.8-1.7-.8c-.3 0-.6.1-.9.2-.3.1-.6.3-.8.6-.2.2-.4.5-.6.9-.1.3-.2.7-.2 1.2s.1.9.2 1.3l.6.9c.3.2.6.4.9.5.3.1.7.1 1.1.1h2zm-1.7-11.7c0-.4.2-.8.5-1.1.3-.3.7-.5 1.2-.5s.8.2 1.2.5c.3.3.5.7.5 1.1s-.2.8-.5 1.1c-.3.3-.7.5-1.2.5s-.9-.2-1.2-.5c-.4-.3-.5-.7-.5-1.1zM68.1 477.4c-.5 0-1-.1-1.4-.3-.4-.2-.8-.5-1-.8v.7c0 .8-.1 1.6-.3 2.3-.2.7-.5 1.3-1 1.8-.4.5-1 .9-1.6 1.2-.6.3-1.4.4-2.2.4h-.9c-.3 0-.6-.1-.8-.1-.1 0-.3 0-.4-.1-.1 0-.2 0-.3-.1l.3-3.1.8.2c.2 0 .4.1.7.1h.7c.8 0 1.3-.3 1.6-.8.3-.5.4-1.2.4-2.2v-10h3.1v5.1c0 .7.2 1.3.5 1.8s1 .7 1.9.7h.8c.3 0 .5.1.6.2.1.1.1.3.1.5v1.6c0 .1-.1.3-.2.5s-.3.3-.6.3h-.8z"
                />
                <path
                    className="st1"
                    d="M68.8 477.4c-.3 0-.5-.1-.6-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2.1.1.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M73.2 477.4c-.3 0-.5-.1-.6-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2.1.1.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M77.5 477.4c-.3 0-.5-.1-.6-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3H82c.3 0 .5.1.6.2.1.1.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M81.9 477.4c-.3 0-.5-.1-.6-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2.1.1.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M86.2 477.4c-.3 0-.4-.1-.5-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.5-.3h3.7v-7.6H93v10.7h-6.8zm7.4-17.6c-.2-.1-.4-.1-.6-.1-.2 0-.5-.1-.7-.1-.4 0-.7.1-.9.3-.3.2-.4.5-.4 1 0 .4.2.7.5 1 .3.3.9.5 1.6.5h1.2v2H88v-2h1.7c-.2-.2-.4-.5-.6-.9-.2-.3-.3-.7-.3-1.1 0-.7.3-1.3.8-1.9.5-.5 1.4-.8 2.5-.8.3 0 .6 0 .9.1.3 0 .6.1.9.2l-.3 1.8zM96.9 458.2h3v19.2h-3v-19.2zM103 477.4v-3.1h7.3v-2.7c0-.6-.1-1.1-.2-1.5-.1-.4-.4-.7-.6-.9s-.6-.4-1-.4c-.4-.1-.9-.1-1.4-.1h-2.6v-3h3.2c.7 0 1.4.1 2.1.2.7.1 1.3.4 1.8.8s.9 1 1.3 1.7.5 1.7.5 2.9v6.1H103zM53.7 509c0 .8-.1 1.6-.3 2.3-.2.7-.5 1.3-1 1.8-.4.5-1 .9-1.6 1.2-.6.3-1.4.4-2.2.4h-.9c-.3 0-.5-.1-.8-.1-.1 0-.2 0-.4-.1-.1 0-.2 0-.4-.1l.3-3.1.8.2c.2 0 .4.1.7.1h.6c.8 0 1.3-.3 1.6-.8.3-.5.4-1.2.4-2.2v-10h3.1V509zM57.8 490.2h3.1v16.1h1.8c.3 0 .5.1.6.2.1.1.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.6.3h-4.9v-19.2z"
                />
                <path
                    className="st1"
                    d="M62.5 509.4c-.3 0-.5-.1-.6-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3H67c.3 0 .5.1.6.2.1.1.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M66.9 509.4c-.3 0-.5-.1-.6-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2.1.1.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M71.2 509.4c-.3 0-.5-.1-.6-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2.1.1.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M75.6 509.4c-.3 0-.5-.1-.6-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3H80c.3 0 .5.1.6.2.1.1.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.5z"
                />
                <path
                    className="st1"
                    d="M79.9 509.4c-.3 0-.5-.1-.6-.2-.1-.1-.1-.3-.1-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h2.6c.4 0 .7-.1.8-.4.1-.2.2-.6.2-1v-6.2h3.1v5.1c0 .7.2 1.3.5 1.8s1 .7 1.9.7h.9c.3 0 .5.1.6.2.1.1.1.3.1.5v1.6c0 .1-.1.3-.2.5s-.3.3-.6.3h-1c-.8 0-1.4-.2-1.9-.6-.5-.4-.8-.8-1.1-1.2-.3.5-.7.9-1.3 1.3-.5.3-1.2.5-1.9.5h-2.8zm3.5-14.8c0-.4.2-.8.5-1.1.3-.3.7-.5 1.1-.5.5 0 .8.2 1.2.5.3.3.5.7.5 1.1s-.2.8-.5 1.1c-.3.3-.7.5-1.2.5-.4 0-.8-.2-1.1-.5-.4-.3-.5-.7-.5-1.1z"
                />
                <path
                    className="st1"
                    d="M89.7 509.4c-.3 0-.5-.1-.6-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h1c.2 0 .4 0 .6-.1.2-.1.4-.2.5-.4.2-.2.3-.4.4-.8.1-.3.1-.8.1-1.3 0-.9.1-1.6.4-2.4.3-.7.7-1.3 1.2-1.9.5-.5 1.1-.9 1.8-1.2.7-.3 1.4-.5 2.2-.5 1.7 0 3.1.6 4 1.7.9 1.1 1.4 2.6 1.4 4.6 0 .2 0 .4.1.6 0 .2.1.5.3.7s.4.4.7.6c.3.2.7.2 1.3.2h1c.3 0 .5.1.6.2s.2.3.2.5v1.7c0 .1-.1.3-.2.5s-.3.3-.6.3h-1c-.8 0-1.4-.2-2-.6-.6-.4-1-.9-1.2-1.4-.3.5-.7.9-1 1.2-.4.3-.7.5-1.1.6l-1.2.3c-.4 0-.8.1-1.3.1-1 0-1.9-.2-2.5-.5s-1.2-.8-1.7-1.4c-.3.5-.6 1-1.1 1.3-.5.3-1 .5-1.6.5h-1.3zm8.1-3c.9 0 1.5-.3 1.9-.8.4-.5.6-1.1.6-1.9 0-.5-.1-.9-.2-1.3s-.3-.7-.5-1c-.2-.3-.5-.5-.8-.6-.3-.1-.6-.2-.9-.2-.3 0-.7.1-1 .2s-.6.3-.8.6c-.2.3-.4.6-.5 1-.1.4-.2.8-.2 1.3 0 .7.2 1.4.6 1.9.3.6 1 .8 1.8.8z"
                />
                <path
                    className="st1"
                    d="M106.4 509.4c-.3 0-.4-.1-.5-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.5-.3h3.7v-7.6h3.1v10.7h-6.8zm1.4-14.8c0-.4.2-.8.5-1.1.3-.3.7-.5 1.2-.5s.9.2 1.2.5c.3.3.5.7.5 1.1s-.2.8-.5 1.1c-.3.3-.7.5-1.2.5s-.8-.2-1.2-.5c-.4-.3-.5-.7-.5-1.1zm4.2 0c0-.4.2-.8.5-1.1.3-.3.7-.5 1.2-.5s.8.2 1.2.5c.3.3.5.7.5 1.1s-.2.8-.5 1.1c-.3.3-.7.5-1.2.5s-.9-.2-1.2-.5c-.4-.3-.5-.7-.5-1.1zM220.6 224.4h-4.9c-1.1 0-2-.2-2.8-.5-.8-.3-1.4-.7-1.9-1.2s-.8-1.1-1-1.7-.3-1.3-.3-2c0-.8.1-1.6.4-2.4.3-.8.7-1.4 1.2-2 .5-.6 1.1-1 1.8-1.4.7-.3 1.5-.5 2.3-.5.8 0 1.5.1 2.1.4.6.3 1.2.6 1.6 1.1.5.5.8 1 1 1.7.2.7.4 1.4.4 2.2v6.3zm-9-14.8c0-.4.2-.8.5-1.1.3-.3.7-.5 1.2-.5s.8.2 1.2.5c.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1-.3.3-.7.5-1.2.5s-.8-.2-1.2-.5c-.3-.3-.5-.7-.5-1.1zm5.9 11.7v-2.4c0-1-.2-1.8-.6-2.3-.4-.5-1-.8-1.7-.8-.3 0-.6.1-.9.2-.3.1-.6.3-.8.6s-.4.5-.6.9c-.1.3-.2.7-.2 1.2s.1.9.2 1.3l.6.9c.3.2.6.4.9.5.3.1.7.1 1.1.1h2zm-1.7-11.7c0-.4.2-.8.5-1.1.3-.3.7-.5 1.2-.5s.8.2 1.2.5c.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1-.3.3-.7.5-1.2.5s-.9-.2-1.2-.5c-.3-.3-.5-.7-.5-1.1zM232 224.4c-.5 0-1-.1-1.4-.3-.4-.2-.8-.5-1-.8v.7c0 .8-.1 1.6-.3 2.3s-.5 1.3-1 1.8c-.4.5-1 .9-1.6 1.2-.6.3-1.4.4-2.2.4h-.9c-.3 0-.5-.1-.8-.1-.1 0-.3 0-.4-.1-.1 0-.2 0-.3-.1l.3-3.1.8.2c.2 0 .4.1.7.1h.7c.8 0 1.3-.3 1.6-.8s.4-1.2.4-2.2v-10h3.1v5.1c0 .7.2 1.3.5 1.8s1 .7 1.9.7h.9c.3 0 .5.1.6.2s.1.3.1.5v1.6c0 .1-.1.3-.2.5s-.3.3-.6.3h-.9z"
                />
                <path
                    className="st1"
                    d="M232.8 224.4c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M237.1 224.4c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M241.5 224.4c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M245.8 224.4c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M250.2 224.4c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M254.5 224.4c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M258.8 224.4c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M263.2 224.4c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M267.5 224.4c-.3 0-.4-.1-.5-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.5-.3h3.7v-7.6h3.1v10.7h-6.8zm7.4-17.6c-.2-.1-.4-.1-.6-.1-.2 0-.5-.1-.7-.1-.4 0-.7.1-.9.3-.3.2-.4.5-.4 1 0 .4.2.7.5 1 .3.3.9.5 1.6.5h1.2v2h-6.3v-2h1.7c-.2-.2-.4-.5-.6-.9-.2-.3-.3-.7-.3-1.1 0-.7.3-1.3.8-1.9.5-.5 1.4-.8 2.5-.8.3 0 .6 0 .9.1.3 0 .6.1.9.2l-.3 1.8zM278.3 205.2h3v19.2h-3v-19.2zM284.3 224.4v-3.1h7.3v-2.7c0-.6-.1-1.1-.2-1.5-.1-.4-.4-.7-.6-.9s-.6-.4-1-.4c-.4-.1-.9-.1-1.4-.1h-2.6v-3h3.2c.7 0 1.4.1 2.1.2.7.1 1.3.4 1.8.8s.9 1 1.3 1.7c.3.7.5 1.7.5 2.9v6.1h-10.4zM196 248.2c.2.4.5.9.7 1.4s.4 1.1.6 1.7c.2.6.3 1.1.4 1.7.1.6.1 1.1.1 1.6 0 1-.2 2-.5 2.9s-.8 1.7-1.5 2.4-1.5 1.2-2.4 1.6c-1 .4-2.1.6-3.4.6-1.4 0-2.6-.2-3.5-.6-1-.4-1.7-.9-2.3-1.6-.6-.7-1-1.4-1.3-2.2-.3-.8-.4-1.7-.4-2.6 0-.9.1-1.7.4-2.6.3-.9.7-1.7 1.2-2.5l2.6 1.5c-.4.7-.7 1.3-.9 1.8-.2.6-.3 1.1-.3 1.8 0 .5.1 1 .3 1.4.2.5.5.9.8 1.2.4.4.9.7 1.4.9.6.2 1.3.3 2.1.3.7 0 1.4-.1 1.9-.3.6-.2 1-.5 1.4-.9.4-.4.7-.8.9-1.3.2-.5.3-1 .3-1.6 0-.8-.2-1.7-.5-2.6-.3-.9-.7-1.8-1.2-2.5l3.1-1.5zm-7.5-3.6c0-.4.2-.8.5-1.1.3-.3.7-.5 1.1-.5.5 0 .8.2 1.2.5.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1-.3.3-.7.5-1.2.5-.4 0-.8-.2-1.1-.5-.4-.3-.5-.7-.5-1.1zM201.4 237.2h3.1v16.1h1.8c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.6.3h-4.9v-19.2z"
                />
                <path
                    className="st1"
                    d="M206.2 256.4c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M210.6 256.4c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M214.9 256.4c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.7c.4 0 .7-.1.8-.3.1-.2.2-.5.2-1v-3.8h3v2.6c0 .7.2 1.3.5 1.7.3.5 1 .7 1.9.7h.5c.4 0 .7-.1.8-.4.1-.2.2-.6.2-1V247h3.1v3.7c0 .7.2 1.3.5 1.8s1 .7 1.9.7h.6c.4 0 .7-.1.8-.4.1-.2.2-.6.2-1v-6.2h3v5.1c0 .7.2 1.3.5 1.8s.9.7 1.8.7h1.1c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3H240c-.8 0-1.4-.2-1.9-.5-.5-.4-.8-.8-1.1-1.2-.3.6-.8 1-1.4 1.3-.6.3-1.3.5-2 .5h-.7c-.8 0-1.4-.2-1.9-.5s-.8-.8-1-1.2c-.3.6-.8 1-1.4 1.3s-1.2.4-1.9.4h-.7c-.8 0-1.4-.2-1.9-.5-.5-.4-.8-.8-1.1-1.2-.3.6-.8 1-1.4 1.3-.6.3-1.3.4-2.1.4h-4.6zm10.7-14.8c0-.4.2-.8.5-1.1.3-.3.7-.5 1.2-.5s.8.2 1.2.5c.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1-.3.3-.7.5-1.2.5s-.9-.2-1.2-.5c-.3-.3-.5-.7-.5-1.1zm2.1-3.5c0-.4.2-.8.5-1.1.3-.3.7-.4 1.2-.4.4 0 .8.1 1.2.4.3.3.5.7.5 1.1 0 .5-.2.8-.5 1.1-.3.3-.7.4-1.2.4s-.9-.1-1.2-.4c-.4-.3-.5-.6-.5-1.1zm2.1 3.5c0-.4.2-.8.5-1.1.3-.3.7-.5 1.2-.5s.8.2 1.2.5c.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1-.3.3-.7.5-1.2.5s-.8-.2-1.2-.5c-.3-.3-.5-.7-.5-1.1z"
                />
                <path
                    className="st1"
                    d="M241 256.4c-.3 0-.5-.1-.6-.2-.1-.1-.1-.3-.1-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h2.6c.4 0 .7-.1.8-.4.1-.2.2-.6.2-1v-6.2h3.1v5.1c0 .7.2 1.3.5 1.8s1 .7 1.9.7h.9c.3 0 .5.1.6.2.1.1.1.3.1.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-1c-.8 0-1.4-.2-1.9-.6-.5-.4-.8-.8-1.1-1.2-.3.5-.7.9-1.3 1.3s-1.2.5-1.9.5H241zm3.5-14.8c0-.4.2-.8.5-1.1.3-.3.7-.5 1.1-.5.5 0 .8.2 1.2.5.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1-.3.3-.7.5-1.2.5-.4 0-.8-.2-1.1-.5-.4-.3-.5-.7-.5-1.1z"
                />
                <path
                    className="st1"
                    d="M250.8 256.4c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M255.1 256.4c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M259.5 256.4c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M263.8 256.4c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2s.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M281.8 255.7c0 .1-.1.3-.2.5s-.3.3-.6.3h-.5c-.6 0-1.1-.1-1.7-.3-.6-.2-1-.5-1.4-.8-.3.5-.7.8-1.1 1-.4.1-.8.2-1.2.2h-7c-.3 0-.5-.1-.6-.2-.1-.1-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h7.9c-.2-.3-.3-.7-.4-1.1-.1-.4-.2-1.1-.3-1.9-.1-.9-.3-1.6-.7-1.9-.4-.4-.9-.6-1.5-.6-.4 0-.8.1-1.4.2s-1.1.3-1.7.6l-.8-2.9c.2-.1.5-.2.8-.3.3-.1.7-.2 1.1-.3l1.2-.3c.4-.1.8-.1 1.2-.1.9 0 1.6.2 2.2.5.6.3 1.1.7 1.4 1.2.4.5.6 1 .8 1.6.2.6.3 1.1.3 1.7 0 .4.1.7.2 1.2l.3 1.2c.1.4.3.7.6.9.2.3.5.4.9.4h.6c.3 0 .5.1.6.2s.2.3.2.5v1.5z"
                />
                <path
                    className="st1"
                    d="M280.9 256.4c-.3 0-.5-.1-.6-.2-.1-.1-.1-.3-.1-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.5-.3h3.2v-16.1h3v19.2h-6.2zM291.5 237.2h3v19.2h-3v-19.2zM175.8 469.5H171c-1.1 0-2-.2-2.8-.5-.8-.3-1.4-.7-1.9-1.2s-.8-1.1-1-1.7c-.2-.6-.3-1.3-.3-2 0-.8.1-1.6.4-2.4s.7-1.4 1.2-2c.5-.6 1.1-1 1.8-1.4.7-.3 1.5-.5 2.3-.5.8 0 1.5.1 2.1.4.6.3 1.2.6 1.6 1.1.5.5.8 1 1 1.7s.4 1.4.4 2.2v6.3zm-9-14.9c0-.4.2-.8.5-1.1.3-.3.7-.5 1.2-.5s.8.2 1.2.5c.3.3.5.7.5 1.1s-.2.8-.5 1.1c-.3.3-.7.5-1.2.5s-.9-.2-1.2-.5c-.3-.3-.5-.6-.5-1.1zm6 11.8V464c0-1-.2-1.8-.6-2.3s-1-.8-1.7-.8c-.3 0-.6.1-.9.2-.3.1-.6.3-.8.6-.2.2-.4.5-.6.9-.1.3-.2.7-.2 1.2s.1.9.2 1.3l.6.9c.3.2.6.4.9.5.3.1.7.1 1.1.1h2zm-1.8-11.8c0-.4.2-.8.5-1.1.3-.3.7-.5 1.2-.5s.8.2 1.2.5c.3.3.5.7.5 1.1s-.2.8-.5 1.1c-.3.3-.7.5-1.2.5s-.9-.2-1.2-.5c-.3-.3-.5-.6-.5-1.1zM187.3 469.5c-.5 0-1-.1-1.4-.3-.4-.2-.8-.5-1-.8v.7c0 .8-.1 1.6-.3 2.3-.2.7-.5 1.3-1 1.8-.4.5-1 .9-1.6 1.2-.6.3-1.4.4-2.2.4h-.9c-.3 0-.6-.1-.8-.1-.1 0-.3 0-.4-.1-.1 0-.2 0-.3-.1l.3-3.1.8.2c.2 0 .4.1.7.1h.7c.8 0 1.3-.3 1.6-.8.3-.5.4-1.2.4-2.2v-10h3.1v5.1c0 .7.2 1.3.5 1.8s1 .7 1.9.7h.9c.3 0 .5.1.6.2.1.1.1.3.1.5v1.6c0 .1-.1.3-.2.5s-.3.3-.6.3h-.9z"
                />
                <path
                    className="st1"
                    d="M188 469.5c-.3 0-.5-.1-.6-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2.1.1.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3H188z"
                />
                <path
                    className="st1"
                    d="M192.3 469.5c-.3 0-.5-.1-.6-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2.1.1.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M196.7 469.5c-.3 0-.5-.1-.6-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2.1.1.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M201 469.5c-.3 0-.5-.1-.6-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2.1.1.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3H201z"
                />
                <path
                    className="st1"
                    d="M205.3 469.5c-.2 0-.4-.1-.5-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.5-.3h3.7v-7.6h3.1v10.7h-6.8zm7.4-17.6c-.2-.1-.4-.1-.6-.1-.2 0-.5-.1-.7-.1-.4 0-.7.1-.9.3-.3.2-.4.5-.4 1 0 .4.2.7.5 1 .3.3.9.5 1.6.5h1.2v2H207v-2h1.7c-.2-.2-.4-.5-.5-.9-.2-.3-.3-.7-.3-1.1 0-.7.3-1.3.8-1.9s1.4-.8 2.5-.8c.3 0 .6 0 .9.1.3 0 .6.1.9.2l-.3 1.8zM216.1 450.3h3v19.2h-3v-19.2zM222.1 469.5v-3.1h7.3v-2.7c0-.6-.1-1.1-.2-1.5s-.4-.7-.6-.9-.6-.4-1-.4c-.4-.1-.9-.1-1.4-.1h-2.6v-3h3.2c.7 0 1.4.1 2.1.2s1.3.4 1.8.8.9 1 1.3 1.7c.3.7.5 1.7.5 2.9v6.1h-10.4zM189.5 501.5c-.8 0-1.4-.2-1.8-.5-.5-.3-.8-.8-1.1-1.2-.3.6-.7 1-1.3 1.3-.6.3-1.2.4-2 .4H171c-.7 0-1.3-.1-1.8-.3-.5-.2-.9-.5-1.2-.9-.3-.4-.5-.8-.6-1.3-.1-.5-.2-1-.2-1.5V493h3.1v4c0 .5.1.9.2 1.1.1.2.4.3.7.3h12.1c.4 0 .7-.1.8-.4.1-.2.2-.6.2-1v-6.2h3.1v5.1c0 .7.2 1.3.5 1.8s.9.7 1.8.7h1c.3 0 .5.1.6.2.1.1.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.6.3h-1.2zm-15.6-14.9c0-.4.2-.8.5-1.1.3-.3.7-.5 1.2-.5s.8.2 1.2.5c.3.3.5.7.5 1.1s-.2.8-.5 1.1c-.3.3-.7.5-1.2.5s-.9-.2-1.2-.5c-.3-.3-.5-.6-.5-1.1zm4.2 0c0-.4.2-.8.5-1.1.3-.3.7-.5 1.2-.5s.8.2 1.2.5c.3.3.5.7.5 1.1s-.2.8-.5 1.1c-.3.3-.7.5-1.2.5s-.9-.2-1.2-.5c-.3-.3-.5-.6-.5-1.1z"
                />
                <path
                    className="st1"
                    d="M190.4 501.5c-.3 0-.5-.1-.6-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2.1.1.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M194.8 501.5c-.3 0-.5-.1-.6-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2.1.1.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M199.1 501.5c-.3 0-.5-.1-.6-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2.1.1.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M203.5 501.5c-.3 0-.5-.1-.6-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2.1.1.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M207.8 501.5c-.3 0-.5-.1-.6-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2.1.1.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M212.2 501.5c-.3 0-.5-.1-.6-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h4.5c.3 0 .5.1.6.2.1.1.2.3.2.5v1.6c0 .1-.1.3-.2.5s-.3.3-.5.3h-4.6z"
                />
                <path
                    className="st1"
                    d="M216.5 501.5c-.2 0-.4-.1-.5-.2s-.2-.3-.2-.5v-1.6c0-.2.1-.4.2-.6.1-.2.3-.3.5-.3h3.7v-7.6h3.1v10.7h-6.8zm.2 3.4c0-.4.2-.8.5-1.1.3-.3.7-.4 1.2-.4s.8.1 1.2.4c.3.3.5.7.5 1.1 0 .5-.2.8-.5 1.1-.3.3-.7.4-1.2.4s-.8-.1-1.2-.4c-.4-.3-.5-.7-.5-1.1zm4.1 0c0-.4.2-.8.5-1.1.3-.3.7-.4 1.2-.4s.8.1 1.2.4c.3.3.5.7.5 1.1 0 .5-.2.8-.5 1.1-.3.3-.7.4-1.2.4s-.8-.1-1.2-.4c-.3-.3-.5-.7-.5-1.1zM230.4 476.7c-.3-.1-.6-.1-1-.1-.3 0-.5.1-.7.2-.2.2-.3.4-.3.7 0 .3.1.5.4.8.2.2.6.3 1.1.3h.8v1.4h-4.5v-1.4h1.2c-.1-.2-.3-.4-.4-.6-.1-.2-.2-.5-.2-.8 0-.5.2-1 .6-1.4.4-.4 1-.6 1.8-.6.2 0 .4 0 .7.1s.5.1.7.1l-.2 1.3zm-3.2 5.6h3v19.2h-3v-19.2zM176.9 533.5v-3.1h7.3v-2.7c0-.6-.1-1.1-.2-1.5-.1-.4-.4-.7-.6-.9s-.6-.4-1-.4c-.4-.1-.9-.1-1.4-.1h-2.6v-3h3.2c.7 0 1.4.1 2.1.2.7.1 1.3.4 1.8.8s.9 1 1.3 1.7.5 1.7.5 2.9v6.1h-10.4zM196.6 533.5c-1.1 0-2-.2-2.8-.5-.8-.3-1.4-.7-1.9-1.2s-.8-1.1-1-1.7c-.2-.6-.3-1.3-.3-2 0-.8.1-1.6.4-2.4s.7-1.4 1.2-2c.5-.6 1.1-1 1.8-1.4.7-.3 1.5-.5 2.3-.5.8 0 1.5.1 2.1.4.6.3 1.2.6 1.6 1.1.4.5.8 1 1 1.7.2.7.4 1.4.4 2.2v5.9c0 1.1-.2 2.1-.5 2.9-.3.8-.8 1.4-1.4 1.9-.6.5-1.4.9-2.2 1.1-.8.2-1.8.3-2.8.3h-1.2c-.5 0-1-.1-1.5-.2l.2-3c.5.1 1 .1 1.5.2s.9.1 1.2.1c.5 0 1 0 1.4-.1.4-.1.8-.2 1.2-.4s.6-.5.8-.9c.2-.4.3-.9.4-1.5h-1.9zm1.8-3.1V528c0-1-.2-1.8-.6-2.3-.4-.5-1-.8-1.7-.8-.3 0-.6.1-.9.2-.3.1-.6.3-.8.6-.2.2-.4.5-.6.9-.1.3-.2.7-.2 1.2s.1.9.2 1.3l.6.9c.3.2.6.4.9.5.4.1.7.1 1.1.1h2zM205.2 514.3h3v19.2h-3v-19.2zM211.3 533.5v-3.1h7.3v-2.7c0-.6-.1-1.1-.2-1.5-.1-.4-.4-.7-.6-.9s-.6-.4-1-.4c-.4-.1-.9-.1-1.4-.1h-2.6v-3h3.2c.7 0 1.4.1 2.1.2.7.1 1.3.4 1.8.8s.9 1 1.3 1.7c.3.7.5 1.7.5 2.9v6.1h-10.4z"
                />
            </svg>
            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-gray-600 bg-opacity-75">
                    <div className="bg-white p-6 rounded-lg shadow-xl sm:w-[500px]  z-50">
                        <div className="flex justify-between mb-5">
                            <h1 className="font-semibold text-2xl">معلومات المنطقة</h1>
                            <button
                                className="font-bold  text-indigo-500 hover:text-indigo-400"
                                onClick={() => setShowPopup(false)}
                            >
                                X
                            </button>
                        </div>

                        {mapNum == 1 && <HanchanMap />}
                        {mapNum == 2 && <EssaouiraMap />}
                        {mapNum == 3 && <TmanarMap />}
                        {mapNum == 4 && <AitDaoudMap />}

                    </div>
                </div>
            )}
        </div>
    );
};

