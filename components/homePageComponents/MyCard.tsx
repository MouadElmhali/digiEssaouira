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
      className="bg-black shadow-2xl overflow-hidden flex-1 2xl:mx-10 xl:mx-5 md:mx-2"
    >
      
      <img src={picture} alt={alt} className="w-full h-80 object-cover" />
      
      <div
          className="flex flex-row x-10 relative -top-5 h-10"
        >
          <div
            className="flex items-center bg-red-600 px-4"
          >
            <h3 className="text-white px-3 ">{title}</h3>
          </div>
          
          <div className="border-t-[40px] border-t-transparent border-r-[20px] border-r-red-600 border-b-[0px] border-b-transparent">  
          </div>
      </div>
      
      <div 
        className="px-4  relative -top-2 pb-px">
        <p className="text-white px-3 ">{text}</p>
      </div>

    </button>
  );
};

export default MyCard;