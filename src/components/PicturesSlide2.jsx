import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from 'react-router-dom';

import Maki from './../assets/maki-sushi.jpg'
import Sashimi from './../assets/Sashimi.jpg'
import Nigiri from './../assets/Nigiri-sushi.jpg'
import Uramaki from './../assets/Uramaki.jpeg'
import Temaki from './../assets/temaki.jpg'
import Gunkan from './../assets/Gunkan-maki.jpg'

export default function PicturesSlide2() {
  return (
    <div>
      <Navbar />
      <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div class="flex flex-1 justify-between sm:hidden">
              <a href="#" class="relative inline-flex items-center rounded-md  bg-white px-4 py-2 text-sm font-medium "></a>
              <a href="page2.html" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
            </div>
            <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <Link to="/pictures" aria-current="page" className="relative z-10 inline-flex items-center bg-red-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                1
              </Link>
              <Link to="/pictureSlide2" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                2
              </Link>
              <Link to="/pictureSlide3" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">
                3
              </Link>
              <Link to="/pictureSlide4" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                4
              </Link>
              <Link to="/pictureSlide3" className="relative inline-flex items-center rounded-r-md px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                Next
              </Link>
            </nav>
          </div>
          </div>
          </div>
          <main class="m-4">
            <h1 class="text-4xl font-serif">Les suchis</h1>
            <ul class="flex flex-wrap md:grid md:grid-cols-12 md:grid-rows-1 md:gap-0 bg-white p-2 rounded-lg shadow-lg  md:justify-around m-5">
                <li class="md:col-start-1 md:col-end-5 md:row-star-1 md:row-end-2">
                    <h2 class="text-2xl font-serif">Maki-sushi</h2>
                    <img class="w-2/3 h-2/3" src={Maki} alt=""/>
                </li>
                <li class="col-start-5 md:col-end-9 md:row-star-1 md:row-end-1">
                    <h2 class="text-2xl font-serif">Sashimi</h2>
                    <img class="w-2/3 h-2/3" src={Sashimi} alt=""/>
                </li>
                <li class="col-start-9 md:col-end-13 md:row-star-1 md:row-end-1">
                    <h2 class="text-2xl font-serif">Nigiri-sushi</h2>
                    <img class="w-2/3 h-2/3" src={Nigiri} alt=""/>
                </li>
                <li class="col-start-1 md:col-end-5 md:row-star-3 md:row-end-1">
                    <h2 class="text-2xl font-serif">Uramaki</h2>
                    <img class="w-2/3 h-2/3" src={Uramaki} alt=""/>
                </li>
                <li class="col-start-5 md:col-end-9 md:row-star-3 md:row-end-2">
                    <h2 class="text-2xl font-serif">Temaki-sushi</h2>
                    <img class="w-2/3 h-2/3" src={Temaki} alt=""/>
                </li>
                <li class="col-start-9 md:col-end-13 md:row-star-3 md:row-end-2">
                    <h2 class="text-2xl font-serif">Gunkan-maki</h2>
                    <img class="w-2/3 h-2/3" src={Gunkan} alt=""/>
                </li>
            </ul>  
        </main>
      <Footer />
    </div>
  )
}
