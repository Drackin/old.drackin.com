import React from 'react';

const Links = () => {

    const links = [
        {
            name: "GitHub",
            url: "https://github.com/Drackin",
            icon: "fab fa-github"
        },
        {
            name: "Discord",
            url: "https://discord.gg/78wC9tja2p",
            icon: "fab fa-discord"
        },
        {
            name: "npm",
            url: "https://npmjs.com/~drackin",
            icon: "fab fa-npm"
        },
        {
            name: "Instagram",
            url: "https://instagram.com/gmss.35",
            icon: "fab fa-instagram"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/drackin-best-031a48226/",
            icon: "fab fa-linkedin"
        },
        {
            name: "Mail",
            url: "mailto:hello@drackin.me",
            icon: "far fa-envelope"
        }
    ]

    return (
        <div className="space-y-4 w-full flex flex-col text-white justify-center mt-10" id="links">
            <h1 className="text-4xl text-center font-jetbrains">Links</h1>

            <div className="lg:grid lg:grid-cols-3 gap-3 mobile:space-y-5 m-0 p-0 mobile:w-[19rem] w-[60%] min-h-full self-center">
                {links.map((link, i) => (
                    <div id="link" className="bg-[#1b1b1b] h-16 flex items-center rounded-xl" key={i}>
                        <div id="link-icon" className="relative w-[30%] bg-gradient-to-r from-pink-600 to-orange-500 h-full flex items-center justify-center rounded-l-xl transition-all duration-500">
                            <div className="w-full h-full transition-all duration-500 rounded-l-xl bg-gradient-to-r from-blue-500 to-green-500 opacity-0"></div>
                            <i className={link.icon + " fa-2x absolute"} />
                        </div>
                        <div id="link-url" className="w-[70%] text-center transition-all duration-500">
                            <a rel="noreferrer" className="text-2xl transition duration-500 underline" href={link.url} target="_blank">
                                {link.name}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

    function copyTo(text: string) {
        navigator.clipboard.writeText(text);
    }
}

export default Links
