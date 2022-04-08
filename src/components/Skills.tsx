import React from "react";
import {
    SiJavascript,
    SiPython,
    SiCplusplus,
    SiCsharp,
    SiTypescript,
    SiHtml5,
    SiReact,
    SiFirebase,
    SiGit,
    SiVisualstudiocode,
    SiWebstorm,
    SiNextdotjs,
    SiNuxtdotjs,
    SiArchlinux,
    SiTailwindcss,
    SiWindicss,
    SiDeno,
    SiFlutter,
    SiRedux,
    SiCloudera,
    SiPhp,
    SiSvelte
} from "react-icons/si";
import { FaSass, FaVuejs, FaJava, FaWindows, FaGithub, FaNodeJs } from "react-icons/fa";

function Skills() {
    const skills = [
        {
            tech: "JavaScript",
            url: "https://developer.mozilla.org/en/docs/Web/JavaScript",
            icon: <SiJavascript />,
        },
        {
            tech: "Python",
            url: "https://python.org/",
            icon: <SiPython />,
        },
        {
            tech: "Java",
            url: "https://java.com/",
            icon: <FaJava />,
        },
        {
            tech: "C",
            url: "https://www.tutorialspoint.com/cprogramming/",
            icon: <SiCloudera />,
        },
        {
            tech: "C++",
            url: "https://cplusplus.com/",
            icon: <SiCplusplus />,
        },
        {
            tech: "C#",
            url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
            icon: <SiCsharp />,
        },
        {
            tech: "TypeScript",
            url: "https://typescriptlang.org/",
            icon: <SiTypescript />,
        },
        {
            tech: "HTML",
            url: "https://w3schools.com/html/",
            icon: <SiHtml5 />,
        },
        {
            tech: "SASS",
            url: "https://sass-lang.com/",
            icon: <FaSass />,
        },
        {
            tech: "React.js",
            url: "https://reactjs.org/",
            icon: <SiReact />,
        },
        {
            tech: "Vue.js",
            url: "https://vuejs.org/",
            icon: <FaVuejs />,
        },
        {
            tech: "Svelte",
            url: "https://svelte.dev/",
            icon: <SiSvelte />,
        },
        {
            tech: "Flutter",
            url: "https://flutter.dev/",
            icon: <SiFlutter />,
        },
        {
            tech: "PHP",
            url: "https://php.net/",
            icon: <SiPhp />,
        },
        {
            tech: "Redux",
            url: "https://redux.js.org/",
            icon: <SiRedux />,
        },
        {
            tech: "Firebase",
            url: "https://firebase.google.com",
            icon: <SiFirebase />,
        },
        {
            tech: "Git",
            url: "https://git-scm.com/",
            icon: <SiGit />,
        },
        {
            tech: "GitHub",
            url: "https://github.com",
            icon: <FaGithub />,
        },
        {
            tech: "TailwindCSS",
            url: "https://tailwindcss.com/",
            icon: <SiTailwindcss />,
        },
        {
            tech: "WindiCSS",
            url: "https://windicss.com/",
            icon: <SiWindicss />,
        },
        {
            tech: "VS Code",
            url: "https://code.visualstudio.com/",
            icon: <SiVisualstudiocode />,
        },
        {
            tech: "WebStorm",
            url: "https://www.jetbrains.com/webstorm/",
            icon: <SiWebstorm />,
        },
        {
            tech: "Next.js",
            url: "https://nextjs.org/",
            icon: <SiNextdotjs />,
        },
        {
            tech: "Nuxt.js",
            url: "https://nuxtjs.org/",
            icon: <SiNuxtdotjs />,
        },
        {
            tech: "Node.js",
            url: "https://nodejs.org/",
            icon: <FaNodeJs />,
        },
        {
            tech: "Deno",
            url: "https://deno.land/",
            icon: <SiDeno />,
        },
        {
            tech: "Arch Linux",
            url: "https://archlinux.org/",
            icon: <SiArchlinux />,
        },
        {
            tech: "Windows 10",
            url: "https://microsoft.com/en-us/windows/",
            icon: <FaWindows />,
        }
    ];

    return (
        <div className="text-white flex flex-col justify-center space-y-4 min-h-[50vh] mt-5">
            <h1 className="text-4xl text-center font-jetbrains">I Use</h1>
            <div
                className="grid grid-cols-5 gap-3 mobile:grid-cols-2 items-center m-0 p-0 justify-center w-[80%] mobile:w-[90%] self-center"
                id="use"
            >
                {skills.map((skill, i) => (
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href={skill.url}
                        id="skill"
                        className="relative w-full h-14 justify-center rounded-xl items-center flex bg-[#1b1b1b] select-none transition-all duration-300"
                        key={i}
                    >
                        <div
                            id="grad-div"
                            className="w-full h-full transition-all duration-500 rounded-xl opacity-0 bg-gradient-to-r from-pink-600 via-red-500 to-orange-500"
                        />
                        <div id="skill-name" className="absolute flex h-full w-full items-center justify-center">
                            <div className="h-full flex items-center justify-center text-2xl w-[30%] bg-gradient-to-r from-pink-600 via-red-500 to-orange-500 rounded-tl-xl rounded-bl-xl">
                                {skill.icon}
                            </div>
                            <p className="text-xl text-center duration-200 w-[70%]">
                                {skill.tech}
                            </p>
                        </div>
                        <div id="skill-icon" className="absolute hidden text-4xl transition-all duration-200">
                            {skill.icon}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Skills;
