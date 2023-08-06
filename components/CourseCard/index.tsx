const index = ({ onClick, src, text }: any) => {
  return (
    <button onClick={onClick}>
      <div className="relative h-96 w-72 2xl:w-96 bg-black overflow-hidden shadow-xl">
        <img src={src} className="object-cover w-full h-72" />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-72 w-full overflow-hidden bg-blue bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-10"></div>
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
