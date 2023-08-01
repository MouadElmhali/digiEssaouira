import Image from "next/image";
import MyDocument from "../../../components/certificate/index";
import { PDFDownloadLink, PDFViewer, usePDF } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TextOnImage from "../../../components/certificateDownload";
import { getCurrentUser } from "../../../components/utils";
import { redirect } from "next/dist/server/api-utils";
import { routes } from "../../../constants/routes";

export default function Quiz() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();


  
  const { courseName } = useRouter().query;
  const currentUser = getCurrentUser();
  
  useEffect(() => {
    if(!currentUser) 
      router.push("/signIn");

    setIsClient(true);
  }, []);



  return (
    <div className="mt-40 py-10 px-5 w-full flex flex-col items-center">
      <div className="text-center text-2xl">
        <h1>لقد أكملت دورة </h1>
        <h1 className="font-bold">  {courseName} </h1>
      </div>
      <Image
        src="/images/certification.png"
        alt="certification"
        width={300}
        height={300}
        objectFit="cover"
      />

    <TextOnImage text={currentUser?.user_userName} userName={currentUser?.user_userName}/>
    </div>
  );
}

