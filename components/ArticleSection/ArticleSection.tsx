import { InferGetServerSidePropsType } from "next";
import { SocialMediaSection } from "../SocialMediaSection/SocialMediaSection";
import { initializeApollo } from "../../apolloClient";
import { GET_ARTICLES } from "../../graphql/article/queries";
import { useRouter } from "next/router";

export default function AritcleSection ({
    articles,
    children
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element  {
    
    const router = useRouter();
    
    return (
        <div className="container mx-auto px-28 flex flex-raw gap-8 ">
            <div className="lg:w-2/3">
                {children}
            </div>
            <div className="hidden lg:flex lg:flex-col h-92  w-1/3 mt-48 mb-48">
                <h4 className="text-2xl">نبذة عنا</h4>
                <div className="border-b-2 w-12 border-blue-400"></div>
                <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis et ut accusamus natus, doloribus autem facere repellat consequatur pariatur suscipit molestiae nam assumenda voluptatibus aspernatur nisi quidem laudantium. Reiciendis, culpa.</p>
                
                <h4 className="mt-10 text-2xl ">تابعونا على</h4>
                <div className="border-b-2 w-12 border-blue-400"></div>
                <SocialMediaSection className="mt-5 fill-blue-400"/>
                
                {
                    articles ? 
                    <div>
                        <h4 className="mt-10 text-2xl ">آخر المقالات</h4>
                        <div className="border-b-2 w-12 border-blue-400 mb-5"></div>
                        {articles.map(({title, pictureUrl, id }) => (
                            <button key={id} onClick={() => router.push("/youth/" + id)} className='flex flex-row items-center divid-y justify-center gap-2'>
                                <img src={"/images/articles/" + pictureUrl} className="object-cover max-h-16" />
                                <p className='text-xs text-right' dangerouslySetInnerHTML={{ __html: title }}></p>
                            </button>
                        ))} 
                    </div>
                    : 
                    null
                }
            </div>
        </div>
    )
}