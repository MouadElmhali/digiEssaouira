import React from 'react'
import Head from "next/head";

export default function Young () {
    const [text, setText] = React.useState("هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام نصي فتجعلها تبدهنا يوجد محتوى نصي، هنا يوجد محتوو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال lorem ipsum في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.")
    return (
        <>
            <Head>
                <title>DigiEssaouira | فضاء الشباب</title>
            </Head>
            <main>
                <div className='mt-48 mb-48 flex flex-col items-center justify-center gap-12 mx-12 lg:mx-48'>
                    <p className='my-5 font-black text-5xl self-start'>عنوان 1 لفضاء الشباب</p>
                    <img src="/images/thumb6.jpg" alt="object-cover w-full" />
                    <p className='leading-8'>{text + text + text }</p>
                </div>
            </main>
        </>
    )
}