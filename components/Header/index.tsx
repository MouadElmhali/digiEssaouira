import { title } from "process";
import { HTMLAttributes, ReactNode } from "react";

interface IHeader {
  isHero?: boolean;
  styles?: string;
  image?: string;
  title?: string;
  children?: ReactNode;
}

export default function Header({
  children,
  isHero,
  image,
  title,
  styles
}: IHeader): JSX.Element {
  return isHero ?
    styles ?
      (
        <header
          className={` w-full  h-screen sm:h-[65vh] bg-center bg-cover relative z-0 sm:right-1/2 sm:translate-x-1/2  sm:mt-40 after:content-[''] after:absolute  after:h-full after:w-full after:left-0 after:top-0 after:-z-[1] ${styles}  `}
        >
          <div className="text-white absolute  top-1/2 -translate-y-1/2  right-1/2 translate-x-1/2 flex flex-col gap-14 items-center w-11/12 [&>p:first-child]:text-center">
            {children}
          </div>
        </header>
      )
      :
      (
        <header
        className="flex flex-wrap items-center justify-between px-10 mt-36"
        >
          {/* <div className="absolute pt-14 md:pt-auto top-44 -translate-y-1/2  right-1/2 translate-x-1/2 flex flex-col  items-center w-11/12 [&>p:first-child]:text-center">
          <div className="flex items-center justify-center flex-wrap md:flex-nowrap">
            <p className="w-full md:w-3/6 text-center md:text-auto md:text-right text-blue font-bold text-5xl ">{title}</p>
            <img src={image} alt="" className="w-full md:w-2/6" />
          </div>
        </div> */}

          <div className="w-full lg:w-1/2">
              <h1 className="text-4xl font-bold mb-4 text-center text-primary sm:text-center">{title}</h1>
            </div>
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-16">
              <img className="w-full h-auto max-w-md" src={image} alt="Placeholder image"/>
            </div>
           

        </header>
      )
    : (
      <header>{children}</header>
    );
}