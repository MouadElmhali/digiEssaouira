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
      <a className="flex flex-col gap-4  h-full relative">
        <Image
          alt={title}
          height={350}
          width={150}
          objectFit="contain"
          className="w-full h-full transition ease-in-out duration-200 hover:scale-110 "
          {...imageProps}
        />
        <div className="absolute -z-10 left-40 top-24 h-28 w-28 bg-[url('/images/loading.gif')] bg-cover bg-no-repeat bg-center"></div>
        <div className="bg-primary text-white h-[25%] font-bold text-lg text-center py-5 px-3">
          {customizedTitle ? customizedTitle : <>{title}</>}
        </div>
      </a>
    </Link>
  );
}
