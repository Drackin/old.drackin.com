import React from "react";

const About = () => {
    return (
        <div className="w-full h-full flex text-white justify-center">
            <div className="flex flex-col mobile:w-full w-[70%] rounded-xl items-center justify-center space-x-5 space-y-3 h-full">
                <div className="flex w-full rounded-xl items-center mobile:justify-center mobile:flex-col-reverse mobile:text-center justify-evenly space-x-5 mobile:space-x-0 mobile:space-y-3">
                    <div className="h-[60%] flex flex-col justify-center space-y-4 mobile:pt-3">
                        <p className="ftext-gray-300">Hi Everybody! I am</p>

                        <h1 className="text-5xl mobile:text-4xl">Drackin</h1>

                        <p className="text-blue-400 text-2xl">{"> $ whoami"}</p>

                        <p className="w-96 text-sm mobile:w-60 mobile:text-left">{`
                            I'm 17 years old Full-Stack Developer. I am a high school
                            student and I live in Izmir/Turkey. I play an electric guitar and a violin.
                            Music is a part of my life. And the other part is programming.
                        `}</p>
                    </div>

                    <img
                        src="https://avatars.githubusercontent.com/u/78258229?v=4"
                        alt="Drackin's Avatar"
                        className="w-[20rem] h-[20rem] mobile:w-60 mobile:h-60 rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
