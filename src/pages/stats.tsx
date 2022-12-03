import type { GetStaticProps, NextPage } from "next";
import { useLanyard } from "react-use-lanyard";
import { FaSpotify as Spoti } from "react-icons/fa";
import * as dotenv from "dotenv";
import axios from "axios";
import { useState, useEffect } from "react";

interface Props {
    allTime: string;
    usedLangs: string;
};

const Stats: NextPage<Props> = (props) => {

    const { status } = useLanyard({
        userId: "607507574018801664",
        socket: true,
    });


    const [result, setResult] = useState<any>({});

    useEffect(() => {
        fetch("https://api.github.com/users/Drackin/repos")
        .then(response => response.json().then(data => {;
            data.map(async (repo: any) => {
                const langRes = await axios.get(repo.languages_url);
                const language = langRes.data;
                Object.keys(language).length !== 0 &&
                Object.keys(language).map((key, i) => {
                    if (result[key] === undefined) {
                        setResult((res: any) => ({ ...res, [key]: language[key]}));
                    } else {
                        setResult((res: any) => ({ ...res, [key]: result[key] + language[key]}));
                    }
                });
            })
        }).catch(err => console.log(err)));
    }, []);

    const calculateLangs = () => {
        const langs = Object.keys(result);
        const values = Object.values(result);
        const total = values.reduce((a, b) => a + b, 0);
        const percentage = values.map((value) => (value / total) * 100);
        const langsAndPercentage = langs.map((lang, i) => `${lang} (${percentage[i]}%)`);
        return langsAndPercentage.join(", ");
    };

    const activity = () => {
        if (status && status?.listening_to_spotify) {
            return (
                <a href={`https://open.spotify.com/track/${status?.spotify!.track_id}`} target="_blank" rel="noreferrer" className="shadow transition duration-200 hover:-translate-y-1 flex items-center w-96 h-36 bg-white bg-opacity-10 rounded-xl">
                    <aside className="text-xl min-w-[9rem] h-full flex flex-col items-center rounded-tl-md rounded-bl-md space-y-2">
                        <img src={status?.spotify!.album_art_url} alt="Album Art" className="w-full h-full p-2 rounded-xl" />
                    </aside>
                    <header className="h-full text-sm px-1 py-3 flex flex-col rounded-tr-md rounded-br-md">
                        <p className="flex items-center">
                            Listening on Spotify <Spoti className="mx-1" />
                        </p>
                        <p className="text-lg font-semibold">{status?.spotify!.song}</p>

                        <p> by {status?.spotify!.artist}</p>
                    </header>
                </a>
            );
        } else if(status && status?.activities.length && (status?.activities.filter((activity) => activity.id !== 'custom') !== [])) {
            const current = status?.activities.filter((activity) => activity.id !== 'custom')[0];
            return (
                <div className="shadow transition duration-200 hover:-translate-y-1 flex items-center w-96 h-36 bg-white bg-opacity-10 rounded-xl">
                    <aside className="text-xl min-w-[9rem] h-full flex flex-col items-center rounded-tl-md rounded-bl-md space-y-2">
                        <img src={`https://cdn.discordapp.com/app-assets/${current.application_id}/${current.assets!.small_image}.png`} alt="Album Art" className="w-full h-full p-2 rounded-xl" />
                    </aside>
                    <header className="h-full text-sm px-1 py-3 space-y-1 flex flex-col rounded-tr-md rounded-br-md">
                        <p className="text-lg font-semibold">{current?.name}</p>

                        <p className="text-sm whitespace-pre-line">{current.details}</p>

                        <p className="text-gray-300 text-sm whitespace-pre-line">{current.state}</p>
                    </header>
                </div>
            );
        } else {
            return (
                <div className="shadow transition duration-200 hover:-translate-y-1 flex flex-col items-center justify-center w-96 h-36 bg-white bg-opacity-10 rounded-xl">
                    <span className="font-semibold">Not Doing Anything</span>
                    <span className="text-gray-300 text-sm">on Discord</span>
                </div>
            );
        }
    };

    return (
        <div className="h-full flex sm:items-center sm:overflow-auto">
            <section className="w-full flex-wrap flex justify-center sm:items-center">
                {activity()}
                <div className="shadow transition duration-200 space-y-2 hover:-translate-y-1 flex flex-col items-center justify-center w-96 h-36 bg-white bg-opacity-10 rounded-xl">
                    <p>WakaTime</p>
                    <p className="font-semibold text-2xl">{props.allTime}</p>
                    <p>All Time Since Today</p>
                </div>
            </section>
            {calculateLangs()}
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    dotenv.config();
    const res = await axios.get("https://wakatime.com/api/v1/users/Drackin/all_time_since_today", {
        headers: {
            Authorization: `Basic ${process.env.WAKATIME_API_KEY}`,
        }
    });




    const allTime = res.data.data.text;
    return (
        {
            props: {
                allTime,
            }
        }
    )
};

export default Stats;