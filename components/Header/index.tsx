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
        className="flex flex-wrap md:flex-nowrap items-center justify-center px-10 mt-36 gap-10"
        >
              <h1 className="text-4xl font-bold mb-4 text-center text-primary sm:text-center">{title}</h1>
              <img className="w-full h-auto max-w-md" src={image} alt="Placeholder image"/>
        </header>
      )
    : (
      <header>{children}</header>
    );
}