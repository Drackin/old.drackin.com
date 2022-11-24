import React from "react";
import type { NextPage } from "next";
import { FaStar as StarIcon, FaVuejs as Vue, FaRegStickyNote as Document } from "react-icons/fa";
import {
    SiJavascript as JavaScript,
    SiTypescript as TypeScript,
    SiCsharp as CSharp,
} from "react-icons/si";
import ghColor from "github-lang-colors";

const Repositories: NextPage = () => {
    const [repos, setRepos] = React.useState<any[]>([]);

    const Icons = {
        JavaScript: <JavaScript size={24} style={{ color: ghColor("JavaScript") }} />,
        TypeScript: <TypeScript size={24} style={{ color: ghColor("TypeScript") }} />,
        Vue: <Vue size={24} style={{ color: ghColor("C#") }} />,
        "C#": <CSharp size={24} style={{ color: ghColor("C#") }} />,
    };


    React.useEffect(() => {
        fetchRepos();
    }, []);

    const fetchRepos = async () => {
        const drackinData = await fetch(
            "https://api.github.com/users/Drackin/repos"
        );
        const favorsyData = await fetch(
            "https://api.github.com/users/Favorsy/repos"
        );

        const drackinRepos = await drackinData.json();
        const favorsyRepos = await favorsyData.json();

        setRepos([...drackinRepos, ...favorsyRepos]);
    };

    return (
        <div className="h-full flex sm:items-center sm:overflow-auto">
            <section className="w-full flex-wrap flex justify-center sm:items-center">
                {repos && repos.map((repo: any, index) => (
                    <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center w-96 mobile:w-full transition duration-200 shadow hover:-translate-y-1 m-2 rounded-md h-36 mobile:m-2"
                        key={index}
                    >
                        <aside  className="bg-[#011221] text-xl w-1/4 h-full flex flex-col items-center justify-center rounded-tl-md rounded-bl-md space-y-2">
                            {repo.language ? Icons[repo.language as keyof typeof Icons] : <Document size={24} />}
                            <span className="flex items-center">
                                <StarIcon />
                                <p>{repo.stargazers_count}</p>
                            </span>
                        </aside>
                        <header className="bg-white bg-opacity-10 w-3/4 h-full text-sm p-3 items-center justify-center rounded-tr-md rounded-br-md">
                            {/* Repository Name */}
                            <p className="text-lg">{repo.full_name}</p>

                            {/* Repository Description */}
                            <p className="text-sm">{repo.description}</p>
                        </header>

                    </a>
                ))}
            </section>
        </div>
    );
};

export default Repositories;
