import React from 'react'

const Stats = () => {
    return (
        <div className="<lg:min-h-screen bg-gray-900 space-y-4 w-full flex flex-col text-white justify-center mt-10 lg:items-center select-none">
            <h1 className="text-4xl text-center">Stats</h1>

            <div className="<lg:w-[80%] flex flex-col self-center space-y-4 items-center">
                <img src="https://activity-graph.herokuapp.com/graph?username=Drackin&theme=react-dark" alt="Drackin's User Activity Graph" draggable="false" />
                <div className="lg:flex justify-between lg:w-[90%] <lg:w-full <lg:space-y-4 lg:space-x-2" draggable="false">
                    <img src="https://github-readme-stats.vercel.app/api?username=Drackin&show_icons=true&theme=dark" alt="Drackin's Best GitHub Stats" className="lg:w-1/3" draggable="false" />
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Drackin&layout=compact&theme=dark" alt="Drackin's Most Used Languages" className="lg:w-1/3" draggable="false" />
                    <img src="https://github-readme-streak-stats.herokuapp.com/?user=Drackin&theme=dark" alt="Drackin's Streak" className="lg:w-1/3" draggable="false" />
                </div>
            </div>
        </div>
    )
}

export default Stats
