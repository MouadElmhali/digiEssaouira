import Image from "next/image";
import Link from "next/link";

interface ILinkCardProps {
  imgSrc: string;
  imgAlt?: string;
  title: string;
  linkTo: string;
}

export default function LinkCard({
  imgSrc,
  imgAlt = "",
  title,
  linkTo,
}: ILinkCardProps): JSX.Element {
  return (
    <Link href={linkTo}>
      <a className="flex flex-col gap-4">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={180}
          height={250}
          objectFit="cover"
        />
        <p className="bg-primary text-white font-bold text-xl text-center py-5">
          {title}
        </p>
      </a>
    </Link>
  );
}
