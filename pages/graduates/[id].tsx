import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Image from "next/image";

import Section from "../../components/Section";
import { GET_GRADUATES_BY_ID } from "../../graphql/graduates/queries";
import { initializeApollo } from "../../apolloClient";
import { useRouter } from "next/router";

interface IContext {
  params: { id: string };
}

export async function getServerSideProps({
  params: { id },
}: IContext) {
  const client = initializeApollo();

  const { data: getAssociationById } = await client.query({
    query: GET_GRADUATES_BY_ID,
    variables: { id: id },
  });

  return { props: { getAssociationById } };
}




export default function Association({
  getAssociationById,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const {
    post,
    name,
    bio,
    pictureUrl,
    facebook,
    gmail,
    instagram
  } = getAssociationById["getGraduatesById"];
  const router = useRouter();
  const { asPath } = router;
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href
      })
        .then(() => {
          console.log('Successfully shared');
        })
        .catch((error) => {
          console.error('Error sharing:', error);
        });
    } else {
      console.error('Web Share API not supported');
    }
  };


  return (
    <>
      <Head>
        <title>DigiEssaouira | المنتخبين</title>
      </Head>

      <main className="mt-20 h-[75vh] min-h-[950px] md:min-h-[150px]  lg:min-h-[650px] container mx-auto px-10 overflow-scroll lg:overflow-hidden">
        <Section className="py-20" childrenClassName="w-full px-24">
          <div className="flex flex-col items-center gap-y-5  gap-x-8 sm:grid sm:grid-cols-[auto,_1fr] sm:grid-rows-[repeat(4,_auto)] shadow-w">
            <div className="row-span-full ">
              <Image
                alt=""
                width={300}
                height={350}
                src={`/images/graduates/${pictureUrl}`}
                objectFit="cover"
                layout="fixed"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-primaryDarker text-4xl font-bold">{name}</p>
              <div className="text-xl mt-5">  {post}</div>
              <div dangerouslySetInnerHTML={{ __html: bio }} className="text-xl mt-5">
              </div>
              <div className="flex gap-3">
                <a href={facebook} title="Share on Facebook">
                  <svg
                    className="fill-primary text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="35"
                    height="35"
                    viewBox="0 0 50 50"
                  >
                    <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23c12.683,0,23-10.317,23-23S37.683,2,25,2z M32,16h-3.29 C26.772,16,26,16.455,26,17.806V21h6l-1,5h-5v13h-6V26h-3v-5h3v-2.774C20,14.001,21.686,11,26.581,11C29.203,11,32,12,32,12V16z"></path>
                  </svg>
                </a>
                <a href={instagram}>
                  <svg
                    className="fill-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 250 250"
                    width="35"
                    height="35"
                  >
                    <g id="surface15890269">
                      <path d="M 80 15 C 44.148438 15 15 44.148438 15 80 L 15 170 C 15 205.851562 44.148438 235 80 235 L 170 235 C 205.851562 235 235 205.851562 235 170 L 235 80 C 235 44.148438 205.851562 15 170 15 Z M 185 55 C 190.5 55 195 59.5 195 65 C 195 70.5 190.5 75 185 75 C 179.5 75 175 70.5 175 65 C 175 59.5 179.5 55 185 55 Z M 125 70 C 155.351562 70 180 94.648438 180 125 C 180 155.351562 155.351562 180 125 180 C 94.648438 180 70 155.351562 70 125 C 70 94.648438 94.648438 70 125 70 Z M 125 80 C 100.199219 80 80 100.199219 80 125 C 80 149.800781 100.199219 170 125 170 C 149.800781 170 170 149.800781 170 125 C 170 100.199219 149.800781 80 125 80 Z M 125 80 " />
                    </g>
                  </svg>
                </a>
                <a href={`mailto:${gmail}`}>
                  <svg className="fill-primary" width="35" height="35" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                      <path d="M2370 5113 c-379 -36 -661 -116 -980 -278 -378 -193 -717 -497 -965 -865 -104 -156 -232 -419 -294 -605 -49 -150 -89 -321 -113 -490 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 149 53 407 182 540 271 365 243 667 578 866 963 181 348 271 694 286 1090 15 426 -73 832 -263 1214 -124 250 -263 447 -458 648 -216 224 -428 378 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m1669 -1428 c60 -33 110 -87 143 -154 l23 -46 0 -925 0 -925 -23 -46 c-33 -67 -83 -121 -143 -154 l-54 -30 -1425 0 -1425 0 -54 30 c-60 33 -110 87 -143 154 l-23 46 0 925 0 925 28 57 c34 69 100 130 171 157 50 20 76 20 1461 18 l1410 -2 54 -30z" />
                      <path d="M1450 3446 c32 -30 1091 -867 1104 -872 10 -4 1048 807 1116 872 12 12 -145 14 -1110 14 -961 0 -1122 -2 -1110 -14z" />
                      <path d="M1180 2507 c0 -776 1 -815 18 -830 17 -16 126 -17 1364 -17 1292 0 1346 1 1362 18 15 17 16 86 14 829 l-3 811 -210 -168 c-837 -666 -1111 -880 -1136 -885 -16 -4 -42 -4 -57 0 -15 3 -190 134 -388 291 -285 227 -807 640 -941 747 l-23 18 0 -814z" />
                    </g>
                  </svg>
                </a>
                <button className="flex items-center justify-center bg-primary  text-white font-bold p-2 rounded-full " onClick={handleShare}>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff" version="1.1" className="w-5 h-5" viewBox="0 0 512 512" xmlSpace="preserve" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier"> <g id="7935ec95c421cee6d86eb22ecd12b5bb"> <path style={{display: "inline;"}} d="M505.705,421.851c0,49.528-40.146,89.649-89.637,89.649c-49.527,0-89.662-40.121-89.662-89.649 c0-1.622,0.148-3.206,0.236-4.815l-177.464-90.474c-14.883,11.028-33.272,17.641-53.221,17.641 c-49.528,0-89.662-40.134-89.662-89.649s40.134-89.649,89.662-89.649c22.169,0,42.429,8.097,58.086,21.433l172.774-88.09 c-0.25-2.682-0.412-5.364-0.412-8.097c0-49.503,40.135-89.649,89.662-89.649c49.49,0,89.637,40.146,89.637,89.649 c0,49.516-40.146,89.65-89.637,89.65c-22.082,0-42.242-8.009-57.861-21.221l-172.999,88.215c0.224,2.558,0.387,5.14,0.387,7.76 c0,4.653-0.474,9.182-1.148,13.648l171.389,87.379c15.92-14.472,37.004-23.379,60.232-23.379 C465.559,332.201,505.705,372.348,505.705,421.851z"> </path> </g> </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </Section>
      </main>
    </>
  );
}
