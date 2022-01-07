import React from 'react';

function Skills() {

    const skills = [
        "JavaScript",
        "Python",
        "Java",
        "C++",
        "C#",
        "TypeScript",
        "HTML",
        "SASS",
        "React.js",
        "Vue.js",
        "Firebase",
        "Git",
        "VS Code",
        "WebStorm",
    ]

    return (
        <div className="text-white flex flex-col bg-gray-900 justify-center space-y-4 min-h-[50vh] mt-5">
            <h1 className="text-4xl text-center">I Use</h1>
            <div className="grid grid-cols-5 gap-3 <lg:grid-cols-2 items-center m-0 p-0 justify-center w-[80%] <lg:w-[90%] self-center" id="use">
                { skills.map((skill, i) => (
                    <div id="skill" className="w-full h-14 justify-center rounded-xl items-center flex bg-dark-400 select-none transition-all duration-500" key={i}>
                        <p className="text-xl text-center transform hover:scale-115 transition duration-500">{skill}</p>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default Skills
