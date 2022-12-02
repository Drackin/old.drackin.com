import React from "react";
import type { NextPage } from "next";
import About from "@components/About";

const Home: NextPage = () => {
    return (
        <div className="w-full h-full">
            <About />
        </div>
    );
};

export default Home;
