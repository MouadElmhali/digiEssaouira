import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface ILinkCardProps {
  linkTo: string;
  imgSrc: string;
  imgAlt?: string;
  title?: string;
  objectFit?: ImageProps["objectFit"];
  data?: { [key: string]: string };
  customizedTitle?: ReactNode;
}

export default function LinkCard({
  imgSrc,
  imgAlt = "",
  title,
  customizedTitle,
  objectFit = "cover",
  linkTo,
  data,
}: ILinkCardProps): JSX.Element {
  return (
    <Link href={{ pathname: linkTo, query: data }}>
      <a className="flex flex-col gap-4 flex-1">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={200}
          height={250}
          objectFit={objectFit}
        />
        <div className="bg-primary text-white font-bold text-lg text-center py-5 px-3">
          {customizedTitle ? customizedTitle : <>{title}</>}
        </div>
      </a>
    </Link>
  );
}
