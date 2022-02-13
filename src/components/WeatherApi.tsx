import React from 'react'

const WeatherApi = () => {

    return (
        <div className="mobile:min-h-screen space-y-4 w-full flex flex-col text-white justify-center mt-10">
            <h1 className="text-4xl text-center font-jetbrains">Using Weather API</h1>

            <div className="flex flex-col items-center w-[90%] self-center pb-5">
                <div className="bg-gray-800 p-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                    <p>
                        <span className="text-red-500">-X</span> GET https://drackin.tk/api/weather
                    </p>
                    <p>
                        <span className="text-red-500">-Q</span> city = california
                    </p>
                    <p>
                        <span className="text-red-500">-Q</span> degree = celcius | fahrenheit
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WeatherApi
