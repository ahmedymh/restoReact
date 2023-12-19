import React from 'react'
import Logo from './../assets/SuchineeLogo.jpg'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header class="grid grid-cols-12 grid-rows-1 gap-0 bg-white p-2 rounded-lg shadow-lg md:w-screen md:h-[180px] md:flex md:items-center">    
        <div class="col-start-1 col-end-3  md:h-full md:w-[20%] md:flex sm:justify-center sm:items-center">
            <Link to='/'> <img class="w-[100%] h-[100%] md:h-full md:w-[60%]" src={Logo} alt="sushi"/></Link>
        </div>
        <div class="hidden w-[100%] col-start-1 col-end-5 row-start-1 row-end-2 rounded-lg  justify-center text-center md:h-full md:w-[80%] md:flex md:justify-center md:items-center md:text-xl md:font-serif">
            <div class="hidden col-start-1 col-end-5 row-start-1 row-end-2 rounded-lg  md:h-full md:w-[25%] md:flex  md:justify-center md:items-center">
                <Link to="/menu">Menu</Link>
            </div>
            <div class="hidden col-start-1 col-end-5 row-start-1 row-end-2 rounded-lg  md:h-full md:w-[25%] md:flex  md:justify-center md:items-center">
                <Link to="/pictures">Pictures</Link>
            </div>
            <div class="hidden col-start-1 col-end-5 row-start-1 row-end-2 rounded-lg  md:h-full md:w-[25%] md:flex md:justify-center md:items-center">
                <Link to="/restaurant">Restaurant</Link>
            </div>
            <div class="hidden col-start-1 col-end-5 row-start-1 row-end-2 rounded-lg  md:h-full md:w-[25%] md:flex md:justify-center md:items-center">
                <Link to="/contact">Contact</Link>
            </div>
        </div>
        <div class="flex col-start-6 justify-center align-center ">
            <h1 class="md:hidden flex items-center pl font-serif size text-2xl">Sushinee</h1>
        </div>
        <div class="sm:hidden md:hidden lg:hidden flex col-start-11 col-end-13 row-start-1 row-end-1  items-center">
            <svg onclick="toggleMenu()" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </div>
    </header>
  )
}
