import Image from 'next/image'


const index = ({ onClick, src, text }: any) => {
  return (
    <button onClick={onClick}>
      <div className="relative h-96 w-72 2xl:w-96 bg-black overflow-hidden shadow-xl">
        <Image src={src} width={384} height={288} objectFit='cover' className="transition ease-in-out duration-200 hover:scale-110" />
        <div className="flex flex-col mx-5 my-2 h-20 items-center justify-center">
          <p
            className="text-white text-xl font-bold"
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          ></p>
        </div>
      </div>
    </button>
  );
};

export default index;
