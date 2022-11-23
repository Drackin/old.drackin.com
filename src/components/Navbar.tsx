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
        {
            name: "companies",
            link: "/companies",
        },
    ];

    const footers = [
        {
            url: "https://twitter.com/s_gmss35",
            icon: FaTwitter,
        },
        {
            url: "https://instagram.com/gmss.35",
            icon: FaInstagram,
        },
        {
            url: "https://www.linkedin.com/in/drackin-best-031a48226/",
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

    return (
        <nav className="w-full h-10 border-b border-gray-800 flex items-center justify-between font-fira text-[#607B96]">
            <a
                href="/"
                className="border-r mobile:border-none pl-5 text-sm border-gray-800 h-full w-[17.5%] flex items-center transition duration-200 hover:text-white hover:border-b-2 hover:border-b-orange-500"
            >
                drackin.me
            </a>

            <div className="flex items-center mobile:hidden text-sm w-[72.5%] h-full">
                {navs.map((nav, i) => (
                    <Link
                        href={nav.link}
                        key={i}
                        passHref
                        className={
                            router.pathname === nav.link
                                ? "border-r border-gray-800 w-[10%] h-full flex items-center justify-center text-white border-b-2 border-b-orange-500 transition duration-200"
                                : "border-r border-gray-800 w-[10%] h-full flex items-center hover:border-b-2 hover:border-b-blue-500 justify-center hover:text-white transition duration-200"
                        }
                    >
                        {nav.name}
                    </Link>
                ))}
            </div>

            <div className="flex items-center mobile:hidden text-sm w-[12.5%] h-full border-l justify-center border-gray-800 ">
                <Link
                    href="/contact"
                    className="h-full flex items-center w-full hover:border-b-2 hover:border-b-blue-500 justify-center hover:text-white transition duration-200"
                >
                    contact
                </Link>
            </div>

            <button
                className="hidden mobile:flex mr-5"
                onClick={() => setMenuOpen((bool) => !bool)}
            >
                <FaBars />
            </button>

            {menuOpen && (
                <div className="fixed top-0 h-full w-full backdrop-blur-xl">
                    <div className="h-10 flex w-full border-b border-gray-800 items-center justify-between">
                        <a
                            href="/"
                            className="pl-5 text-sm h-full w-[17.5%] flex items-center transition duration-200 hover:text-white  hover:border-b-2 hover:border-b-orange-500"
                        >
                            drackin.me
                        </a>
                        <button
                            className="flex pr-5"
                            onClick={() => setMenuOpen((bool) => !bool)}
                        >
                            <FaTimes />
                        </button>
                    </div>

                    <div className="flex flex-col text-base w-full h-[87%] text-white">
                        {navs.map((nav, i) => (
                            <Link
                                href={nav.link}
                                key={i}
                                className="border-b h-[7.5%] border-gray-800 pl-5 w-full flex items-center hover:border-b-2 hover:border-b-orange-500 hover:text-white transition duration-200"
                            >
                                {nav.name}
                            </Link>
                        ))}
                    </div>

                    <div className="h-[6.5%] flex w-full border-t border-gray-800 items-center justify-between">
                        <p className="pl-5 w-[35%] text-sm h-full flex items-center transition duration-200 hover:text-white  hover:border-b-2 hover:border-b-orange-500">
                            i am here:
                        </p>

                        <div className="w-[65%] flex justify-between h-full">
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
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
