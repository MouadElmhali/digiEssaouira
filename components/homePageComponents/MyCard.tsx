import React from "react";

interface SectionProps {
    picture?: string;
    alt?: string;
    text?: string;
    title?: string;
    onClick?: () => void;
}

const MyCard = ({
    picture,
    alt,
    title,
    text,
    onClick
}:SectionProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-black shadow-2xl overflow-hidden flex flex-col 2xl:mx-10 xl:mx-5 md:mx-2 min-w-[280px] max-w-[360px] min-h-[409px] rounded-lg overflow-hidden transition ease-in-out duration-200 hover:scale-105"
    >
      <div className="w-full h-80 overflow-hidden">
        <img src={picture} alt={alt} className="w-full h-full object-cover " />

      </div>
      
      <div
          className="flex flex-row x-10 relative -top-5 h-10"
        >
          <div
            className="flex items-center bg-red-600 px-4"
          >
            <h3 className="text-white px-3">{title}</h3>
          </div>
          
          <div className="border-t-[40px] border-t-transparent border-r-[20px] border-r-red-600 border-b-[0px] border-b-transparent">  
          </div>
      </div>
      
      <div 
        className="w-full px-4  relative -top-2  pb-px">
        <p className="text-white px-3 text-center">{text.length > 68 ? text?.slice(0, 68) + " ...": text}</p>
      </div>

    </button>
  );
};

export default MyCard;