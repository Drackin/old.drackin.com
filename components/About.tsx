import React from "react";

function Card() {

  return (
    <div
      id="card"
      className="w-full <lg:h-screen h-[50vh] flex items-center text-white justify-center bg-gray-900"
    >
      <div className="flex
        <lg:flex-col <lg:w-[90%] <lg:justify-center <lg:items-center w-[70%]
        rounded-xl items-center justify-center space-x-5 space-y-3">
        <img
          src="https://avatars.githubusercontent.com/u/78258229?v=4"
          alt="Drackin's Avatar"
          className="w-58 h-58 rounded-full"
        />
        <div className="h-[60%] flex flex-col space-y-4 <lg:w-full">
          <h1 className="text-3xl <lg:text-center">Welcome to My Website, I{"'"}m <span className="text-blue-500">Drackin</span>!</h1>
          <p>{`
            Hello, I'm Drackin. I'm 15 Years Old Full-Stack Developer. I am High School
            Student and I Live in Izmir/Turkey. My Purpose of Creating This Site
            Is To Introduce Myself And Make And Share APIs That Can Help You.
          `}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
