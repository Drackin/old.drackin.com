import React from 'react'

const WeatherApi = () => {

    return (
        <div className="<lg:min-h-screen bg-gray-900 space-y-4 w-full flex flex-col text-white justify-center mt-10">
            <h1 className="text-4xl text-center">Using the Weather API</h1>

            <div className="flex flex-col items-center w-[95%] self-center pb-5">
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
