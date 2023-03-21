import React from "react";

interface SectionProps {
    picture?: string;
    alt?: string;
    text?: string;
    className?: string;
  }

const Card = ({
    picture,
    alt,
    text,
    className
}: SectionProps) => {
  return (
    <div className={className ?? "bg-white shadow-2xl overflow-hidden h-full"}>
      <img src={picture} alt={alt} className="object-none h-full w-full" />
      <div className="px-4 py-2">
        <p className=" text-red-500 text-white font-bold text-2xl  py-5 px-3 z-10">{text}</p>
      </div>
    </div>
  );
};

export default Card;


// In this code, we have a Card component that renders a white card with a rounded border and shadow effect. Inside the card, we have an img element that fills the width of the card, and a div element that contains the card content (title and description).

// We are using Tailwind CSS utility classes to style the card and its content. The bg-white class sets the white background color, rounded-lg adds rounded corners to the border, shadow-lg adds a shadow effect to the card, w-full makes the image fill the width of the card, and px-4 py-2 adds some padding to the content.

// Note that you should replace the src attribute of the img element with the URL or path of your own image.





