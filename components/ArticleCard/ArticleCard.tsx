import Link from "next/link";

const ArticleCard = ({values}: any) => {
  const { id, title, body, pictureUrl } = values;
  console.log("🚀 ~ file: ArticleCard.tsx:5 ~ ArticleCard ~ values:", values)
  return (
    <Link key={id} href={"/youth/" + id}>
      <a className="h-[18rem] w-72 bg-black overflow-hidden shadow-xl rounded-lg overflow-hidden transition ease-in-out duration-200 hover:scale-110">
        <div className="w-full h-44 overflow-hidden">
          <img
            src={"/images/articles/" + pictureUrl}
            className="object-cover  w-full h-full  bg-white bg-[url('/images/loading.gif')] bg-no-repeat bg-center"
          />
        </div>
        <div className="flex flex-col my-2 h-22 text-right mx-4">
          <p
            className="text-white  text-sm text-justify "
            dangerouslySetInnerHTML={{
              __html: title?.length > 80 ? title.slice(0, 80) + "..." : title,
            }}
          ></p>
          <p
            className="font-thin text-xs mt-5 text-justify text-gray-300"
            dangerouslySetInnerHTML={{
              __html: body?.length > 80 ? body.slice(0, 80) + " ..." : body,
            }}
          ></p>
        </div>
      </a>
    </Link>
  );
};

export default ArticleCard;
