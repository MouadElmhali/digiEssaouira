import { HTMLAttributes, ReactNode } from "react";

interface IHeader {
  isHero?: boolean;
  styles?: string;
  children?: ReactNode;
}

export default function Header({
  children,
  isHero,
  styles,
}: IHeader): JSX.Element {
  return isHero ? (
    <header
      className={` w-full  h-screen sm:h-[75vh] bg-center bg-cover relative z-0 sm:right-1/2 sm:translate-x-1/2  sm:mt-40 after:content-[''] after:absolute  after:h-full after:w-full after:left-0 after:top-0 after:-z-[1] ${styles}  `}
    >
      <div className="text-white absolute  top-1/2 -translate-y-1/2  right-1/2 translate-x-1/2 flex flex-col gap-14 items-center w-11/12 [&>p:first-child]:text-center">
        {children}
      </div>
    </header>
  ) : (
    <header>{children}</header>
  );
}
