import React from "react";
import type { NextPage } from 'next';
import {
    SiJavascript as JS,
    SiPython as PY,
    SiCplusplus as CPP,
    SiCsharp as CS,
    SiTypescript as TS,
    SiHtml5 as HTML,
    SiReact as ReactJS,
    SiGit as Git,
    SiVisualstudiocode as VSC,
    SiNextdotjs as NextJS,
    SiNuxtdotjs as NuxtJS,
    SiTailwindcss as Tailwind,
    SiCloudera as CLang,
    SiSvelte as Svelte,
} from "react-icons/si";
import {
    FaSass as SASS,
    FaVuejs as VueJS,
    FaJava as Java,
    FaGithub as GitHub,
    FaNodeJs as NodeJS,
    FaRust as Rust,
} from "react-icons/fa";

const Skills: NextPage = () => {
    const skills = [
        {
            tech: "JavaScript",
            url: "https://developer.mozilla.org/en/docs/Web/JavaScript",
            icon: JS,
        },
        {
            tech: "Python",
            url: "https://python.org/",
            icon: PY,
        },
        {
            tech: "Java",
            url: "https://java.com/",
            icon: Java,
        },
        {
            tech: "C",
            url: "https://www.tutorialspoint.com/cprogramming/",
            icon: CLang,
        },
        {
            tech: "C++",
            url: "https://cplusplus.com/",
            icon: CPP,
        },
        {
            tech: "C#",
            url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
            icon: CS,
        },
        {
            tech: "Rust",
            url: "https://rust-lang.org",
            icon: Rust,
        },
        {
            tech: "TypeScript",
            url: "https://typescriptlang.org/",
            icon: TS,
        },
        {
            tech: "HTML",
            url: "https://w3schools.com/html/",
            icon: HTML,
        },
        {
            tech: "SASS",
            url: "https://sass-lang.com/",
            icon: SASS,
        },
        {
            tech: "React.js",
            url: "https://reactjs.org/",
            icon: ReactJS,
        },
        {
            tech: "Vue.js",
            url: "https://vuejs.org/",
            icon: VueJS,
        },
        {
            tech: "Svelte",
            url: "https://svelte.dev/",
            icon: Svelte,
        },
        {
            tech: "Git",
            url: "https://git-scm.com/",
            icon: Git,
        },
        {
            tech: "GitHub",
            url: "https://github.com",
            icon: GitHub,
        },
        {
            tech: "Tailwind",
            url: "https://tailwindcss.com/",
            icon: Tailwind,
        },
        {
            tech: "VS Code",
            url: "https://code.visualstudio.com/",
            icon: VSC,
        },
        {
            tech: "Next.js",
            url: "https://nextjs.org/",
            icon: NextJS,
        },
        {
            tech: "Nuxt.js",
            url: "https://nuxtjs.org/",
            icon: NuxtJS,
        },
        {
            tech: "Node.js",
            url: "https://nodejs.org/",
            icon: NodeJS,
        },
    ];

    return (
        <div className="h-full mobile:h-full flex sm:items-center">
            <section className="w-full mobile:h-full flex-wrap flex justify-center sm:items-center">
                {skills.map((skill, index) => (
                    <a
                        href={skill.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center w-48 mobile:w-full shadow m-2 rounded-md h-16 transition duration-200 hover:-translate-y-1"
                        key={index}
                    >
                        <aside className="bg-[#011221] text-xl w-1/3 h-full flex items-center justify-center rounded-tl-md rounded-bl-md">
                            <skill.icon />
                        </aside>
                        <p className="bg-white bg-opacity-10 w-2/3 h-full text-sm flex items-center justify-center rounded-tr-md rounded-br-md">
                            {skill.tech}
                        </p>
                    </a>
                ))}
            </section>
        </div>
    );
};

export default Skills;
