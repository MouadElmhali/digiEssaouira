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
      <a className="flex flex-col gap-4 flex-1">
        <Image height={200} width={200} alt="" {...imageProps} />
        <div className="bg-primary text-white font-bold text-lg text-center py-5 px-3">
          {customizedTitle ? customizedTitle : <>{title}</>}
        </div>
      </a>
    </Link>
  );
}
