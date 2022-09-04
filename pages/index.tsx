import type { InferGetServerSidePropsType } from "next";
import { connectToDatabase } from "../src/mongodb";

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      Hello Zakaria, you are
      {isConnected ? " connected ✅" : " NOT connected ❌"} to the database
    </div>
  );
}

export async function getServerSideProps() {
  try {
    await connectToDatabase();

    return {
      props: {
        isConnected: true,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        isConnected: false,
      },
    };
  }
}
