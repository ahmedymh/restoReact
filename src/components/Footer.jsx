import React from 'react'
import Logo from './../assets/SuchineeLogo.jpg'


export default function Footer() {
  return (
    <footer className="w-screen h-[200px] flex mt-[70px]">
        <div className="h-full w-[40%] flex justify-center items-center flex-col gap-2 text-xl font-semibold">
          <h1>Suchinee</h1>
          <p>Hunderenveld 145 1082 Berchem</p>
          <p>Suchinee@gmail.com</p>
          <p>+32484471618</p>
        </div>
        <div className="h-full w-[40%]"></div>
        <div className="h-[80%] w-[20%] flex justify-center items-center">
          <a href="index.html">
            {' '}
            <img
              className="h-full w-full"
              src={Logo}
              alt="sushi"
            />
          </a>
        </div>
    </footer>
  )
}
