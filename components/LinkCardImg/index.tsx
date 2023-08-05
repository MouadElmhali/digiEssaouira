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
  styles
}: ILinkCardProps): JSX.Element {
  return (
    <Link {...linkProps}>
      <a className="flex flex-col gap-4 flex-1 h-full">
        <img style={{
          height: '250px',
          width: '200px',
          objectFit: 'contain',
          alignSelf: 'center'
        }} className="h-[75%] rounded-md" {...imageProps} />
        <div className="relative self-center -z-10 -top-36 h-28 w-28 bg-white  bg-[url('/images/loading.gif')] bg-cover bg-no-repeat bg-center"></div>
        <div className="bg-primary text-white h-[25%] font-bold text-lg text-center py-5 px-3">
          {customizedTitle ? customizedTitle : <>{title}</>}
        </div>
      </a>
    </Link>
  );
}
