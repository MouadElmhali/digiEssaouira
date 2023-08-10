import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface ILinkCardProps {
  title?: string;
  customizedTitle?: ReactNode;
  linkProps: LinkProps;
  imageProps: ImageProps;
}

export default function LinkCard({
  title,
  customizedTitle,
  linkProps,
  imageProps,
}: ILinkCardProps): JSX.Element {
  return (
    <Link {...linkProps}>
                    
      <a className="flex flex-col gap-4 flex-1 h-full ">
        <Image height={250} width={200} alt="" className="h-[75%] transition ease-in-out duration-200 hover:scale-110"  {...imageProps} />
        <div className="relative self-center -z-10 -top-36 h-24 w-24 bg-white  bg-[url('/images/loading.gif')] bg-cover bg-no-repeat bg-center"></div>
        <div className="bg-primary text-white h-[25%] font-bold text-lg text-center py-5 px-3">
          {customizedTitle ? customizedTitle : <>{title}</>}
        </div>
      </a>
    </Link>
  );
}
