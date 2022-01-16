import React from 'react';

function Skills() {

    const skills = [
        {
            tech: "JavaScript",
            url: "https://developer.mozilla.org/en/docs/Web/JavaScript"
        },
        {
            tech:"Python",
            url: "https://python.org/"
        },
        {
            tech: "Java",
            url: "https://java.com/"
        },
        {
            tech: "C++",
            url: "https://cplusplus.com/"
        },
        {
            tech: "C#",
            url: "https://docs.microsoft.com/en-us/dotnet/csharp/"
        },
        {
            tech: "TypeScript",
            url: "https://typescriptlang.org/"
        },
        {
            tech: "HTML",
            url: "https://w3schools.com/html/"
        },
        {
            tech: "SASS",
            url: "https://sass-lang.com/"
        },
        {
            tech: "React.js",
            url: "https://reactjs.org/"
        },
        {
            tech: "Vue.js",
            url: "https://vuejs.org/"
        },
        {
            tech: "Firebase",
            url: "https://firebase.google.com"
        },
        {
            tech: "Git",
            url: "https://git-scm.com/"
        },
        {
            tech: "VS Code",
            url: "https://code.visualstudio.com/"
        },
        {
            tech: "WebStorm",
            url: "https://www.jetbrains.com/webstorm/"
        },
    ]

    return (
        <div className="text-white flex flex-col justify-center space-y-4 min-h-[50vh] mt-5">
            <h1 className="text-4xl text-center">I Use</h1>
            <div className="grid grid-cols-5 gap-3 mobile:grid-cols-2 items-center m-0 p-0 justify-center w-[80%] mobile:w-[90%] self-center" id="use">
                { skills.map((skill, i) => (
                    <a rel="noreferrer" target="_blank" href={skill.url} id="skill" className="relative w-full h-14 justify-center rounded-xl items-center flex bg-[#151515] border border-gray-100 select-none transition-all duration-300" key={i}>
                        <div id="grad-div" className="w-full h-full transition-all duration-500 rounded-xl opacity-0 bg-gradient-to-r from-pink-600 via-red-500 to-orange-500"></div>
                        <p className="absolute text-xl text-center duration-200">{skill.tech}</p>
                    </a>
                )) }
            </div>
        </div>
    )
}

export default Skills
