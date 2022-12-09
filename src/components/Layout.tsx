import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    return (
        <motion.div exit={{ opacity: 0, transition: { duration: 1 } }} className="w-full h-screen flex flex-col justify-">
            <Header />
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.main
                    key={router.route}
                    style={{ height: "calc(100% - 5rem)" }} id="mn"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                >
                    {children}
                </motion.main>
            </AnimatePresence>
            <Footer />
        </motion.div>
    );
};

export default Layout;