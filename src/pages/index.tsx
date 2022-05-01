import React, { useEffect, useState } from "react";
import type { NextPage } from 'next';
import Head from 'next/head';
import Loader from "react-loader-spinner";
import Projects from "@components/Projects";
import About from "@components/About";
import Skills from "@components/Skills";
import Repositories from "@components/Repositories";
import Stats from "@components/Stats";
import Links from "@components/Links";
import WeatherApi from "@components/WeatherApi";
import Navbar from "@components/Navbar";

const Home: NextPage = () => {

  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [])

  return (
    <div>
      <div>
        
      </div>
      <div className="max-w-full min-h-screen bg-[#0B0B0C] text-white">
        <Head>
          <title>Drackin</title>
          <link rel="icon" href="https://avatars.githubusercontent.com/u/78258229?v=4" />
          <meta name="theme-color" content="#3b82f6" />
          <meta name="author" content="Drackin Best" />
          <meta content="https://i.imgur.com/qDSu23l.jpg" property="og:image" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta content="Drackin's Website" property="og:title" />
          <meta content="drackin.me" property="og:site_name" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="description" content="Hello!
          I'm Drackin. I'm a Developer & Violinist & Athlete. This is My Personal Website. I Love Coding." />
          <meta content="Hello!
          I'm Drackin. I'm a Developer & Violinist & Athlete. This is My Personal Website. I Love Coding." property="og:description"/>
          <meta name="keywords" content="Drackin, drackin, drackin best, Drackin Best, github drackin, ess, portfolio, developer, blog drackin, drackin blog, blog, ess web, drackin website, drackin site, drackin me, drackin.me" />
        </Head>
        {isLoading === true ?
          <div className="w-full h-screen flex flex-col items-center justify-center select-none bg-gray-900">
            <Loader type="Rings" color="#007fff" width="200" height="200" />
            <p className="text-2xl font-semibold text-gray-300">Hold on, Almost Done.</p>
          </div>
        :
          <div className="h-full w-full bg-[#0B0B0C]">
            <Navbar />
            <About />
            <Skills />
            <Projects />
            <Repositories />
            <Stats />
            <Links />
            <WeatherApi />
          </div>
        }
      </div>
    </div>
  )
  
}

export default Home
