import React, { useEffect, useState } from 'react'

const TweetApi = () => {

    const [ tweetImg, setTweetImg ] = useState<any>("")

    useEffect(() => {
        fetchTweet();
    }, [])

    const fetchTweet = async () => {
        const data = await fetch("https://drackin.tk/api/twitter?avatar=https://avatars.githubusercontent.com/u/78258229?v=4&content=Test%20Tweet%20Image&fullname=Drackin&username=drackin_best")
        const tweet = await data.blob();
        setTweetImg(tweet);
    }

    return (
        <div className="<lg:min-h-screen bg-gray-900 space-y-4 w-full flex flex-col text-white justify-center mt-10">
            <h1 className="text-4xl text-center">Using the Tweet API</h1>

            <div className="flex flex-col items-center w-[95%] self-center pb-5">
                <div className="bg-gray-800 p-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                    <p>
                        <span className="text-red-500">-X</span> GET https://drackin.tk/api/twitter
                    </p>
                    <p>
                        <span className="text-red-500">-Q</span> avatar = https://simple.avatar.url/avatar.png
                    </p>
                    <p>
                        <span className="text-red-500">-Q</span> content = Test Tweet Image
                    </p>
                    <p>
                        <span className="text-red-500">-Q</span> fullname = Drackin
                    </p>
                    <p>
                        <span className="text-red-500">-Q</span> username = drackin_best
                    </p>
                </div>
                <img src={tweetImg} alt="Test Tweet Image" />
            </div>
        </div>
    )
}

export default TweetApi
