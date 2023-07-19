import "../styles/globals.scss";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ApolloProvider, useApolloClient } from "@apollo/client";
import { useApollo } from "../apolloClient";
import { useRouter } from "next/router";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps);
  const router = useRouter();
  return (
    <>
      <ApolloProvider client={client}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
      <ToastContainer />
    </>
  );
}

export default MyApp;
