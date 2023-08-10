import Image from "next/image";

interface IBenefitItemProps {
  imgSrc: string;
  title: string;
}

export default function BenefitItem({
  imgSrc,
  title,
}: IBenefitItemProps): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-8 flex-1 sm:flex-row transition ease-in-out duration-200 hover:scale-110">
      <div className="w-full max-w-[128px] sm:max-w-[64px]">
        <Image
          alt=""
          src={imgSrc}
          height="100%"
          width="100%"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <p className="text-2xl font-bold">{title}</p>
    </div>
  );
}
