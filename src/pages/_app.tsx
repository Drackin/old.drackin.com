import "../styles/index.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "@components/Layout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <AnimatePresence mode="wait">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AnimatePresence>
    );
}

export default MyApp;
