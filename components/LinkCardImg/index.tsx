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
      <a className="flex flex-col justify-between h-full max-w-xs rounded-lg overflow-hidden shadow-xl transition ease-in-out duration-200 hover:scale-110 ">
        <Image
          alt={title}
          height={420}
          width={400}
          objectFit="cover"
          className="bg-[url('/images/loading.gif')] bg-cover bg-no-repeat bg-center"
          {...imageProps}
        />
        <div className="flex items-center justify-center bg-primary text-white h-[25%] font-bold text-lg text-center py-2 px-3">
          {customizedTitle ? customizedTitle : <>{title}</>}
        </div>
      </a>
    </Link>
  );
}
