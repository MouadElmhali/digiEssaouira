import Image from "next/image";
import { useEffect } from "react";

const ShowImage = ({ src, alt, height, width, onClick }: any) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.classList.add("overflow-y-hidden");
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, []);
  return (
    <div
      onClick={onClick}
      className={`absolute top-0 left-0 z-50 h-screen w-screen bg-gray-600 bg-opacity-70 flex justify-center items-center`}
    >
      <Image
        alt={alt}
        height={height}
        width={width}
        src={src}
        objectFit="contain"
        className="cursor-pointer w-full h-full  bg-white bg-[url('/images/loading.gif')] bg-no-repeat bg-center"
      />
    </div>
  );
};

export default ShowImage;
