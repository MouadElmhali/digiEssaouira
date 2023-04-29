import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import Section from "../../components/Section";
import ArticleSection from "../../components/ArticleSection/ArticleSection";
import { initializeApollo } from "../../apolloClient";
import { GET_ARTICLES } from "../../graphql/article/queries";

export async function getServerSideProps() {
  const client = initializeApollo();
  const {
      data: { articles
      },
  } = await client.query({
      query: GET_ARTICLES,
  });

  return {
      props: {
          articles
      },
  };
}

export default function PrivacyPolicy({
  articles
}): JSX.Element {
  
  
  return (
    <>
      <Head>
        <title>DigiEssaouira | الجمعيات</title>
      </Head>
      
      <ArticleSection articles={articles}>

        <Header
          isHero
          title = "دليل استعمال منصة" 
          image = "/images/courses-svg.svg"
        ></Header>
        <main className="mb-48">
          <p className=" text-xl text-rigth">
            استنادا إلى الفصل الأول من دستور المغرب الصادر سنة 2011 “يقوم النظام
            الدستوري للمملكة على أساس فصل السلط، وتوازنها وتعاونها، والديمقراطية
            المواطنة والتشاركية، وعلى مبادئ الحكامة الجيدة، وربط المسؤولية
            بالمحاسبة” وإعمالاً لمبادئ “المشاركة، المساواة، التعددية، الشفافية”
            تهدف منصة DIGIESSAOUIRA إلى تعزيز مشاركة الشباب/ الشابات في تقييم
            السياسات العمومية والديمقراطية التشاركية، من خلال تقوية قدرات الشباب/
            الشابات وتعزيز الحوار البناء بين المواطنين والمواطنات ونوابهم
            ونائباتهم.
            <br /><br />
            <br /> تجدر الإشارة إلى أنه لضمان احترام دليل استعمال منصة DIGIESSAOUIRA من طرف الشباب/ الشابات وجميع المستعملين والمستعملات،
            سيتكلف فريق العمل بالإشراف على المحتوى، سواء أسئلة، استطلاعات رأي،
            اقتراحات.
            <br /> <br />
            <br /> يشجعكم فريق DIGIESSAOUIRA على إرسال أي تعليقات أو اقتراحات
            يمكنها أن تساهم في تحسين هذا الميثاق. اللائحة أدناه تعرض حالات أو
            أمثلة المحتويات التي سيتم اعتبارها مباشرة خرقا لقواعد ميثاق الاستعمال
            والتي لن يتم عرضها على المنصة : <br />
            <br /><br />• أي كلام أو محتوى ذو طبيعة عنصرية، تمييزية من حيث الجنس أو أي
            تمييز آخر، أو محتوى فيه سب أو ذو طابع لا إنساني؛
            <br /><br /> • أي كلام أو محتوى فيه تشهير او اهانة سواء كان موجها لمستعملي
            الموقع أو أطراف أخرى؛ <br /><br />• أي كلام أو محتوى يمس بالحياة الخاصة
            للأفراد؛ <br /><br />• الرسائل الموجهة من طرف المواطنين/المواطنات إلى النواب
            يجب أن تكون اجباريا عبارة عن اسئلة. لا يسمح للمستعملين/المستعملات
            التعبير عن مجرد آراء.  <br /><br />• أي كلام أو محتوى يعتبر سرا مهنيا.
          </p>
        </main>
      </ArticleSection>
    </>
  );
}
