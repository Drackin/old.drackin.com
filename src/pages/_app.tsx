import "../styles/index.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "@components/Layout";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    NProgress.configure({ showSpinner: false });

    useEffect(() => {
        router.events.on("routeChangeStart", () => NProgress.start());
        router.events.on("routeChangeComplete", () => NProgress.done());
        router.events.on("routeChangeError", () => NProgress.done());

        return () => {
            router.events.off("routeChangeStart", () => NProgress.start());
            router.events.off("routeChangeComplete", () => NProgress.done());
            router.events.off("routeChangeError", () => NProgress.done());
        };
    }, [router]);

    return (
        <AnimatePresence mode="wait">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AnimatePresence>
    );
}

export default MyApp;
