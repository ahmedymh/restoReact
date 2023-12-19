import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from 'react-router-dom';

import ArizonaPome from './../assets/ArizonaPome.jpeg'
import ArizonaMango from './../assets/ArizonaMango.jpeg'
import ArizonaWater from './../assets/ArizonaWater.jpeg'
import Pepsi from './../assets/Pepsi.jpeg'
import EauSpa from './../assets/EauSpa.jpeg'


export default function PicturesSlide4() {
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
                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                  
                  <a href="pictures.html" aria-current="page" class="relative text-gray-900 z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                    <Link to="/pictures">1</Link>
                  </a>
                  <a class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <Link to="/pictureSlide2">2</Link>
                  </a>
                  <a href="page3.html" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">
                    <Link to="/pictureSlide3">3</Link>
                  </a>
                  <a href="page4.html" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-red-600  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <Link to="/pictureSlide4">4</Link>
                  </a>
                  <a href="page2.html" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <span class="sr-only">Next</span>
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
          </div>
          </div>
        <main class="m-4">
            <h1 class="text-4xl font-serif">Les Rafraichissement</h1>
            <ul class="flex flex-wrap md:grid md:grid-cols-12 md:grid-rows-2 md:gap-0 bg-white p-2 rounded-lg shadow-lg  md:justify-around m-5">
              <li class="md:col-start-1 md:col-end-5 md:row-star-1 md:row-end-2"><h2 class="text-2xl font-serif">Arizona pomegranate</h2><img class="w-2/3 h-2/3" src={ArizonaPome} alt=""/></li>
              <li class="md:col-start-5 md:col-end-9 md:row-star-1 md:row-end-2"><h2 class="text-2xl font-serif">Arizona mucho mango</h2><img class="w-2/3 h-2/3" src={ArizonaMango} alt=""/></li>
              <li class="md:col-start-9 md:col-end-13 md:row-star-1 md:row-end-2"><h2 class="text-2xl font-serif">Arizona watermelon</h2><img class="w-2/3 h-2/3" src={ArizonaWater} alt=""/></li>
              <li class="md:col-start-1 md:col-end-5 md:row-star-2 md:row-end-3"><h2 class="text-2xl font-serif">Pepsi</h2><img class="w-2/3 h-2/3" src={Pepsi} alt=""/></li>
              <li class="md:col-start-5 md:col-end-9 md:row-star-2 md:row-end-3"><h2 class="text-2xl font-serif">Eau Spa</h2><img class="w-2/3 h-2/3" src={EauSpa} alt=""/></li>
            </ul>  
          </main>
      <Footer />
    </div>
  )
}
