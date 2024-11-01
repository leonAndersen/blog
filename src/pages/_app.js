import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/overpass-mono.css"
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    // <>
      <Layout>
        <Head>
          <title>LeonAndersen</title>
        </Head>
          <Component {...pageProps} />
      </Layout>
    // </>
  );
}
