import React from 'react';
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const navs = [
    {
      url: "https://twitter.com/s_gmss35",
      icon: FaTwitter,
    },
    {
      url: "https://instagram.com/gmss.35",
      icon: FaInstagram,
    },
    {
      url: "https://www.linkedin.com/in/drackin-best-031a48226/",
      icon: FaLinkedin,
    },
    {
      url: "https://discord.com/users/607507574018801664",
      icon: FaDiscord
    },
  ]


  return (
    <footer className='mobile:hidden mobile:h-0 bottom-0 mobile:z-0 z-[99] w-full h-10 border-t border-gray-800 flex items-center justify-between font-fira text-[#607B96]'>
        <p className='border-r mobile:border-none text-sm border-gray-800 h-full w-[12.5%] flex items-center justify-center'>i am here:</p>

        <div className='flex items-center mobile:hidden text-sm w-[75%] h-full'>

            {navs.map((nav, i) => (
                <a href={nav.url} rel="noreferrer" target="_blank" className='border-r border-gray-800 w-[7.5%] h-full flex items-center hover:border-b-2 hover:border-b-orange-500 justify-center hover:text-white transition duration-200' key={i}>
                  <nav.icon />
                </a>
            ))}

        </div>

        <a href="https://github.com/Drackin" className="flex items-center justify-center mobile:hidden border-l border-gray-800 h-full w-[12.5%] hover:text-white transition duration-200 hover:border-b-2 hover:border-b-orange-500">
          <FaGithub />
          <p className='pl-2'>
            @Drackin
          </p>
        </a>
    </footer>
  )
}

export default Footer