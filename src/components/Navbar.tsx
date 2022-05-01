import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 z-[99] w-full h-[10vh] border-b border-neutral-900 backdrop-filter backdrop-blur-2xl flex items-center justify-center'>
        <a href="/" className='font-jetbrains font-bold text-2xl w-1/3 text-center'>drackin<span className='text-sm'>.me</span></a>

        <div className='flex items-center space-x-5 w-1/3 justify-center font-manrope font-semibold mobile:hidden font-inter'>
            <a href="#card" className="">About</a>
            <a href="#i-use" className="flex items-center max-w-content">Uses</a>
            <a href="#projects" className="">Projects</a>
            <a href="#repositories" className="">Repositories</a>
            <a href="#stats" className="">Stats</a>
            <a href="#links" className="">Links</a>
        </div>

        <div className='flex items-center space-x-2 w-1/3 justify-center mobile:hidden'>
        </div>
    </nav>
  )
}

export default Navbar