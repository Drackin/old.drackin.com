import { useState } from "react";
import type { GetStaticProps, NextPage } from "next";
import { useLanyard } from "react-use-lanyard";
import { FaSpotify as Spoti } from "react-icons/fa";
import { BsChevronLeft as PrevIcon, BsChevronRight as NextIcon } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import * as dotenv from "dotenv";
import axios from "axios";
import ghColors from "github-lang-colors";

interface Props {
    allTime: string;
};

const Stats: NextPage<Props> = (props) => {

    const { status } = useLanyard({
        userId: "607507574018801664",
        socket: true,
    });

    const [[page, direction], setPage] = useState([0, 0]);

    const wrap = (min: number, max: number, v: number) => {
        const rangeSize = max - min;
        return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
    };

    const levels = [
        {
            name: "HTML",
            level: 100,
        },
        {
            name: "CSS",
            level: 100,
        },
        {
            name: "JavaScript",
            level: 100,
        },
        {
            name: "TypeScript",
            level: 100,
        },
        {
            name: "Rust",
            level: 65,
        },
        {
            name: "Python",
            level: 80,
        },
        {
            name: "Java",
            level: 50,
        },
        {
            name: "C#",
            level: 95,
        },
        {
            name: "C++",
            level: 95,
        },
        {
            name: "C",
            level: 85,
        },
        {
            name: "Go",
            level: 25,
        }
    ]


    const activity = () => {
        if (status && status?.listening_to_spotify) {
            return (
                <a href={`https://open.spotify.com/track/${status?.spotify!.track_id}`} target="_blank" rel="noreferrer" className="shadow transition m-2 hover:-translate-y-1 flex items-center w-96 h-36 bg-white bg-opacity-10 rounded-xl">
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
                <div className="shadow transition m-2 hover:-translate-y-1 flex items-center w-96 h-36 bg-white bg-opacity-10 rounded-xl">
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
                <div className="shadow transition m-2 hover:-translate-y-1 flex flex-col items-center justify-center w-96 h-36 bg-white bg-opacity-10 rounded-xl">
                    <span className="font-semibold">Not Doing Anything</span>
                    <span className="text-gray-300 text-sm">on Discord</span>
                </div>
            );
        }
    };

    const langIndex = wrap(0, levels.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className="h-full flex items-center sm:overflow-auto">
            <section className="w-full flex-wrap flex justify-center sm:items-center">
                {activity()}
                <div className="shadow transition m-2 space-y-2 hover:-translate-y-1 flex flex-col items-center justify-center w-96 h-36 bg-white bg-opacity-10 rounded-xl">
                    <p>WakaTime</p>
                    <p className="font-semibold text-2xl">{props.allTime}</p>
                    <p>All Time Since Today</p>
                </div>

                <div className="shadow transition m-2 hover:-translate-y-1 flex flex-col justify-center items-center w-96 h-36 bg-white bg-opacity-10 rounded-xl">
                    <p className="h-1/3">Knowledge Levels</p>
                    <div className="w-full flex items-center justify-between">
                        <button onClick={() => paginate(-1)}>
                            <PrevIcon className="w-6 h-6 mx-2" />
                        </button>
                        <div className="w-full">
                            <AnimatePresence
                                initial={false}
                                custom={direction}
                                mode="wait"
                            >
                                <motion.p
                                    key={page}
                                    custom={direction}
                                    variants={{
                                        enter: {
                                            opacity: 0,
                                        },
                                        center: {
                                            opacity: 1,
                                        },
                                        exit: {
                                            opacity: 0,
                                        },
                                    }}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        duration: 0.3,
                                    }}
                                >
                                    {levels[langIndex].name}
                                </motion.p>
                            </AnimatePresence>
                            <section className="w-full rounded-full bg-white bg-opacity-20">
                                <motion.div
                                    initial={{
                                        width: 0,
                                        backgroundColor: ghColors(levels[langIndex].name),
                                    }}
                                    animate={{
                                        width: `${levels[langIndex].level}%`,
                                        backgroundColor: ghColors(levels[langIndex].name),
                                    }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    className="h-4 rounded-full text-xs text-center"
                                >
                                    {levels[langIndex].level}%
                                </motion.div>
                            </section>
                        </div>
                        <button onClick={() => paginate(1)}>
                            <NextIcon className="w-6 h-6 mx-2" />
                        </button>
                    </div>
                    <div className="h-1/3" />
                </div>
            </section>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    dotenv.config();
    const res = await axios.get("https://wakatime.com/api/v1/users/Drackin/all_time_since_today", {
        headers: {
            Authorization: `Basic ${Buffer.from(process.env.WAKATIME_API_KEY as string).toString('base64')}`,
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