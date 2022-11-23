import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-screen flex flex-col justify-between">
            <Header />
            <Navbar />
            <main style={{ height: "calc(100% - 5rem)" }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;