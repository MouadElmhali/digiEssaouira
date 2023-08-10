import Head from "next/head";
import Header from "../../../components/Header";
import ArticleSection from "../../../components/ArticleSection/ArticleSection";
import { initializeApollo } from "../../../apolloClient";
import { GET_ARTICLES } from "../../../graphql/article/queries";

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
          title = "مراجع للاستزادة والتوسع" 
          image = "/images/courses-svg.svg"
        ></Header>
        <main className="mb-48">
          <p className=" text-xl text-justify">
                -	المرأة والمشاركة السياسية بالمغرب: مساهمة تحليلية لإدماج مقاربة النوع في السياسات العمومية / صباح العمراني- 2018 <br /><br />
                -	المساواة بين الجنسين، السياسات العمومية، والنمو الاقتصادي في المغرب -مديرية الدراسات والتوقعات المالية بوزارة المالية <br /><br />
                -	اعداد الميزانية مع مراعاة حقوق المرأة-ديان ايسلون – صندوق الأمم المتحدة للنهوض بالمرأة – 2007 <br /><br />
                -	تقييم خطة عمل بيجين + 25 تقرير المملكة المغربية-2023  <br /><br />
                -	التقرير العربي لفجوة النوع الاجتماعي 2020-المساواة بين الجنسين وأهداف التنمية المستدامة <br /><br />
                -	البنك الدولي، تقرير عن التنمية في الشرق الأوسط وشمال إفريقيا، النوع الاجتماعي والتنمية في الشرق الأوسط وشمال إفريقيا، المرأة في المجال العام. <br /><br />
                -	تقرير التنمية البشرية 2017-التفاوتات السوسيو-مجالية والتنمية البشرية: مساهمة في الحوار حول النموذج التنموي بالمغرب <br /><br />
                -	خطة إكرام: التقائية الكل للرقي بأوضاع المغربيات-ICRAM: Initiative Concertée pour le Renforcement des Acquis des Marocaines 2021-2017 <br /><br />
                -	النهوض بالمساواة بين النساء والرجال في الحياة الاقتصادية والاجتماعية والثقافية والسياسية-تقرير المجلس الاقتصادي والاجتماعي والبيئي -2014  <br /><br />
                -	الدليل التدريبي-إدماج منظور النوع الاجتماعي في جميع القطاعات لتحقيق أهداف التنمية المستدامة – المجلس القومي للمرأة  <br /><br />
                -	منهجية الميزنة المستجيبة للنوع الاجتماعي على مستوى الجهات-المديرية العامة للجماعات الترابية-2022  <br /><br />

                -	GUIDE sur l’Intégration Transversale de l’Egalité de Genre dans les politiques publiques- GIZ -2014 <br /><br />
                -	Evaluation du degré d’intégration du genre dans Les Plans Communaux de Développement Elaboré par Institut Méditerranéen de la Gouvernance Mai 2017 <br /><br />
                -	EXPERIENCE MAROCAINE EN MATIERE DE BUDGETISATION SENSIBLE AU GENRE-ministère de l’Economie et des finances-2011 <br /><br />
                -	GUIDE POUR L’INTERGATION DU GENRE DANS LE PROGRAMME DE DEVELOPPEMENT PREFECTORAL/PROVINCIAL – AMPCPP- 2021  <br /><br />
                -	Intégration de la dimension genre dans le Diagnostic Territorial Participatif et le Plan Communal de Développement- Guide Méthodologique- ADS  <br /><br />

          </p>
        </main>
      </ArticleSection>
    </>
  );
}