import "../styles/globals.scss";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ApolloProvider, useApolloClient } from "@apollo/client";
import { useApollo } from "../apolloClient";
import SideBar from "../components/sideBar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps);
  const router = useRouter();
  const showHeader = router.pathname === "/courses" ? false : true;
  return (
    <ApolloProvider client={client}>
      <NavBar />
      {showHeader && <SideBar />}
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
}

export default MyApp;
