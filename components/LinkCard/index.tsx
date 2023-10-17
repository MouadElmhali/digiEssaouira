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
                    
      <a className="relative flex flex-col  justify-between h-full max-w-xs transition ease-in-out duration-200 hover:scale-110 bg-white bg-opacity-25 rounded-lg overflow-hidden shadow-lg">
        <Image height={250} width={250} alt={title} className="h-[75%] bg-[url('/images/loading.gif')] bg-center bg-no-repeat bg-contain "  {...imageProps} />
        <div className="flex items-center justify-center text-center bg-primary text-white h-[25%] font-bold text-lg py-5 px-3 ">
          {customizedTitle ? customizedTitle : <>{title}</>}
        </div>
      </a>
    </Link>
  );
}
