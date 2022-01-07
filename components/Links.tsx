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
            url: "https://instagram.com/s_gmss.35",
            icon: "fab fa-instagram"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/drackin-best-031a48226/",
            icon: "fab fa-linkedin"
        },
        {
            name: "Mail",
            url: "mailto:sonaycannet10@gmail.com",
            icon: "far fa-envelope"
        }
    ]

    return (
        <div className="<lg:min-h-screen bg-gray-900 space-y-4 w-full flex flex-col text-white justify-center mt-10">
            <h1 className="text-4xl text-center">Links</h1>

            <div className="lg:grid lg:grid-cols-3 gap-3 <lg:space-y-5 m-0 p-0 <lg:w-[19rem] w-[60%] min-h-full self-center">
                {links.map((link, i) => (
                    <div className="bg-dark-400 h-16 flex items-center rounded-xl" key={i}>
                        <div className="w-3/10 bg-pink-to-orange h-full flex items-center justify-center rounded-l-xl transition-all duration-500">
                            <i className={link.icon + " fa-2x"} />
                        </div>
                        <div className="w-7/10 text-center transition-all duration-500">
                            <a data-tip data-for="click-to-copy" className="text-2xl hover:underline" href={link.url} target="_blank" onContextMenu={() => copyTo(link.url)}>
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
