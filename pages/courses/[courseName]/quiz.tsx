import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { initializeApollo } from "../../../apolloClient";
import { GET_QUIZ_BY_COURSE_ID } from "../../../graphql/courses/queries";
import {
  IAnswer,
  IGetQuizByCourseIdData,
  IGetQuizByCourseIdVariables,
  IQuestion,
  IQuiz,
} from "../../../graphql/courses/types";

interface IQuery extends ParsedUrlQuery {
  courseId: string;
  courseName: string;
}

export async function getServerSideProps({
  query,
}: GetServerSidePropsContext): Promise<
  GetServerSidePropsResult<{ quiz: IQuiz }>
> {
  const { courseId: id } = query as IQuery;

  const client = initializeApollo();

  const {
    data: { quizByCourseId: quiz },
  } = await client.query<IGetQuizByCourseIdData, IGetQuizByCourseIdVariables>({
    query: GET_QUIZ_BY_COURSE_ID,
    variables: { args: { id } },
  });

  return { props: { quiz } };
}

export default function Quiz({
  quiz: { questions },
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const { courseName } = useRouter().query as IQuery;
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [answers, setAnswers] = useState<IAnswer[]>([]);

  const handleClickNext: MouseEventHandler<HTMLButtonElement> = () => {
    if (currentQuestion === questions.length) return;

    setCurrentQuestion((prevValue) => ++prevValue);
  };
  const handleClickPrevious: MouseEventHandler<HTMLButtonElement> = () =>
    setCurrentQuestion((prevValue) => --prevValue);
  const handleClickChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    const answer: IAnswer = {
      question: questions[currentQuestion - 1].id,
      givenAnswer: value,
    };

    setAnswers((prevValue) => {
      let answersArray: IAnswer[] = [...prevValue];

      const indexOfAnsweredQuestion = prevValue.findIndex(
        ({ question }) => question === answer.question
      );

      if (indexOfAnsweredQuestion === -1) answersArray.push(answer);
      else {
        answersArray.splice(indexOfAnsweredQuestion, 1, answer);
      }

      return answersArray;
    });
  };

  return (
    <>
      <Head>
        <title>اختبار | {decodeURIComponent(courseName)}</title>
      </Head>

      <main className="mt-32 py-10 px-5 flex flex-col gap-y-5">
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-1 items-center w-5/6 sm:w-1/2 [&>*]:w-full">
            <span className="text-primary text-center font-bold text-sm ">
              سؤال {`${currentQuestion}/${questions.length}`}
            </span>
            {
              <QuestionPage
                key={questions[currentQuestion - 1].id}
                question={questions[currentQuestion - 1]}
                handleClickChange={handleClickChange}
                answer={answers.find(
                  ({ question }) =>
                    question === questions[currentQuestion - 1].id
                )}
              />
            }
            <div className="flex justify-between mt-20">
              {currentQuestion !== 1 && (
                <button
                  className="flex items-baseline gap-x-1 mb-5 py-2   text-gray-400 text-sm font-bold"
                  onClick={handleClickPrevious}
                >
                  <span className="leading-[0] text-4xl">&#8594;</span>
                  السؤال السابق
                </button>
              )}
              <button
                className="flex items-baseline gap-x-3 pr-4 pl-1 mb-5 py-2 rounded-full  text-white bg-primary text-sm font-bold hover:bg-primary/80 mr-auto disabled:cursor-not-allowed"
                onClick={handleClickNext}
                disabled={
                  !Boolean(
                    answers.find(
                      ({ question }) =>
                        question === questions[currentQuestion - 1].id
                    )
                  )
                }
              >
                {`${
                  currentQuestion === questions.length
                    ? "انهاء"
                    : "السؤال التالي"
                }`}
                <span className="leading-[0] text-4xl">&#8592;</span>
              </button>
            </div>
          </div>
        </div>
        <ul className="flex gap-2">
          {questions.map(({ id }, index) => (
            <li
              key={id}
              className={`h-2 flex-1 rounded-full ${
                index + 1 <= currentQuestion ? "bg-primary" : "bg-gray-200"
              }`}
            />
          ))}
        </ul>
      </main>
    </>
  );
}

interface IQuestionPage {
  question: IQuestion;
  handleClickChange: ChangeEventHandler<HTMLInputElement>;
  answer?: IAnswer;
}

const QuestionPage = ({
  question: { question, options },
  handleClickChange,
  answer,
}: IQuestionPage): JSX.Element => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <p className="text-2xl font-bold">{question}</p>
      <ul className="flex flex-col gap-2 w-full">
        {options.map(({ option, id }) => (
          <li key={id} className="flex">
            <label
              className="py-2 px-4 bg-gray-100 rounded-full w-full"
              htmlFor={id}
            >
              <div className="flex flex-row-reverse items-center justify-end gap-2 ml-auto">
                {option}
                <input
                  id={id}
                  value={id}
                  type="radio"
                  name="option"
                  onChange={handleClickChange}
                  checked={answer?.givenAnswer === id}
                />
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
