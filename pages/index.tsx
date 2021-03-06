import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

const Home = () => (
    <Layout home>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <p>Hello! I'm m19e.</p>
            <p>
                (This is a sample website - you’ll be building a site like this on <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p>
        </section>
    </Layout>
);

export default Home;
