import React from 'react'

const Stats = () => {
    return (
        <div className="space-y-4 w-full flex flex-col text-white justify-center mt-10 lg:items-center select-none" id="stats">
            <h1 className="text-4xl text-center font-jetbrains">Stats</h1>

            <div className="flex flex-col w-[80%] self-center space-y-4 items-center">
                <img src="https://activity-graph.herokuapp.com/graph?username=Drackin&theme=react-dark" alt="Drackin's User Activity Graph" draggable="false" />
                <div className="lg:flex justify-between mobile:justify-center w-full mobile:space-y-4 lg:space-x-2" draggable="false">
                    <img src="https://github-readme-stats.vercel.app/api?username=Drackin&show_icons=true&theme=dark" alt="Drackin's Best GitHub Stats" className="lg:w-1/3" draggable="false" />
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Drackin&layout=compact&theme=dark" alt="Drackin's Most Used Languages" className="lg:w-1/3 self-center" draggable="false" />
                    <img src="https://github-readme-streak-stats.herokuapp.com/?user=Drackin&theme=dark" alt="Drackin's Streak" className="lg:w-1/3" draggable="false" />
                </div>
            </div>
        </div>
    )
}

export default Stats
