import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
    FaBars,
    FaTimes,
    FaDiscord,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
    const navs = [
        {
            name: "about",
            link: "/",
        },
        {
            name: "skills",
            link: "/skills",
        },
        {
            name: "repos",
            link: "/repositories",
        },
        {
            name: "stats",
            link: "/stats",
        },
    ];

    const footers = [
        {
            url: "https://twitter.com/s_gmss35",
            icon: FaTwitter,
        },
        {
            url: "https://instagram.com/9gmss",
            icon: FaInstagram,
        },
        {
            url: "https://linkedin.com/in/drackin",
            icon: FaLinkedin,
        },
        {
            url: "https://discord.com/users/607507574018801664",
            icon: FaDiscord,
        },
        {
            url: "https://github.com/Drackin",
            icon: FaGithub,
        },
    ];

    const [menuOpen, setMenuOpen] = React.useState(false);

    const router = useRouter();

    const sidebar = {
        open: {
            opacity: 1,
            width: "100%",
            transition: {
                duration: 0.2,
            }
        },
        closed: {
            width: "0%",
            transition: {
                duration: 0.2,
            }
        }
    };

    return (
        <nav className="w-full h-10 border-b border-gray-800 flex items-center justify-between font-fira text-[#607B96]">
            <div className="flex items-center text-sm h-full">
                <Link
                    href="/"
                    className="border-r mobile:border-none pl-5 w-56 text-sm border-gray-800 h-full flex items-center transition duration-200 hover:text-white hover:border-b-2 hover:border-b-orange-500"
                >
                    drackin.me
                </Link>
                {navs.map((nav, i) => (
                    <Link
                        href={nav.link}
                        key={i}
                        passHref
                        className={
                            router.pathname === nav.link
                                ? "border-r border-gray-800 mobile:hidden px-7 h-full flex items-center justify-center text-white border-b-2 border-b-orange-500 transition duration-200"
                                : "border-r border-gray-800 mobile:hidden px-7 h-full flex items-center justify-center hover:border-b-2 hover:border-b-blue-500 hover:text-white transition duration-200"
                        }
                    >
                        {nav.name}
                    </Link>
                ))}
            </div>

            <div className="flex w-44 items-center mobile:hidden text-sm h-full border-l justify-center border-gray-800 ">
                <Link
                    href="/contact"
                    className="h-full w-full flex items-center hover:border-b-2 hover:border-b-blue-500 justify-center hover:text-white transition duration-200"
                >
                    contact
                </Link>
            </div>

            <button
                className="hidden mobile:flex p-5 h-full items-center"
                onClick={() => setMenuOpen((bool) => !bool)}
            >
                <FaBars />
            </button>

            {/* {menuOpen && ( */}
                <motion.nav variants={sidebar} initial={false} animate={menuOpen ? "open" : "closed"} className="fixed top-0 right-0 h-full w-full backdrop-blur-xl">
                    <div className="h-10 flex w-full border-b border-gray-800 items-center justify-between">
                        <Link
                            href="/"
                            className="px-5 text-sm h-full flex items-center transition duration-200 hover:text-white"
                        >
                            drackin.me
                        </Link>
                        <button
                            className="flex p-5 h-full items-center"
                            onClick={() => setMenuOpen((bool) => !bool)}
                        >
                            <FaTimes />
                        </button>
                    </div>

                    <div className="flex flex-col text-base w-full text-white" style={{ height: "calc(100% - 5rem)" }}>
                        {navs.map((nav, i) => (
                            <Link
                                href={nav.link}
                                key={i}
                                onClick={() => setMenuOpen(false)}
                                className={
                                    router.pathname === nav.link
                                    /* if path equals to item's name */
                                    ? "border-b border-l-2 h-[7.5%] border-gray-800 pl-5 w-full flex items-center border-l-orange-500 hover:text-white transition duration-200"
                                    : "border-b hover:border-l-2 h-[7.5%] border-b-gray-800 pl-5 w-full flex items-center hover:border-l-blue-500 hover:text-white transition duration-200"
                                }
                            >
                                {nav.name}
                            </Link>
                        ))}
                    </div>

                    <div className="h-10 flex w-full border-t border-gray-800 items-center justify-between">
                        {footers.map((footer, index) => (
                            <a
                                href={footer.url}
                                key={index}
                                className="w-[25%] flex justify-center border-l border-gray-800 h-full items-center"
                            >
                                <footer.icon />
                            </a>
                        ))}
                    </div>
                </motion.nav>
            {/* )} */}
        </nav>
    );
};

export default Navbar;
