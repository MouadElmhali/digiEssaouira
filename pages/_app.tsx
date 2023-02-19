import "../styles/globals.scss";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ApolloProvider, useApolloClient } from "@apollo/client";
import { useApollo } from "../apolloClient";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps);
  const router = useRouter();
  return (
    <ApolloProvider client={client}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
}

export default MyApp;
