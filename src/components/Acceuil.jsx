import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Ban from './../assets/close-up-delicious-asian-food.jpg'


export default function Accueil() {
  return (
    <div>
      <Navbar />
      <div
        className="flex justify-center items-center align-center container mx-auto hidden fixed inset-0 bg-red-500 opacity-100 z-50"
        id="smallScreenMenu"
        onClick={toggleMenu}
      >
        <ul className="">
          <li>
            <a href="index.html">
              <h2 className="font-serif text-4xl text-white">Sushinee</h2>
            </a>
          </li>
          <li>
            <a href="menu.html">
              <h2 className="font-serif text-2xl text-white">Menu</h2>
            </a>
          </li>
          <li>
            <a href="pictures.html">
              <h2 className="font-serif text-2xl text-white">Pictures</h2>
            </a>
          </li>
          <li>
            <a href="restaurant.html">
              <h2 className="font-serif text-2xl text-white">Restaurant</h2>
            </a>
          </li>
          <li>
            <a href="contact.html">
              <h2 className="font-serif text-2xl text-white">Contact</h2>
            </a>
          </li>
        </ul>
      </div>
      <section
        className="bg-center bg-cover bg-no-repeat bg-gray-700 bg-blend-multiply"
        style={{
          backgroundImage: `url(${Ban})`,
        }}
      >        
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Suchinee
          </h1>

          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Notre restaurant de sushi propose une délicieuse sélection de sushis
            frais et créatifs, offrant une expérience culinaire japonaise
            authentique et raffinée dans un cadre chaleureux et accueillant.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="menu.html"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Notre menu
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="contact.html"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </section>
      <section className="pt-[20px]">
        <div className="container mx-auto text-center mb-4 shadow-lg border-2 border-black rounded-lg font-serif pt-[20px]">
          <p>
            Découvrez l'art du sushi à son meilleur chez nous ! Notre promo
            spéciale vous invite à plonger dans un festin de saveurs exquises,
            avec des sushis frais, des rouleaux créatifs et une explosion de
            délices japonais. Ne ratez pas cette opportunité de vous régaler à
            petit prix. Réservez votre table dès maintenant et laissez-vous
            emporter par la magie des sushis.
          </p>
        </div>
      </section>
      <section className="pb-[20px]">
        <div className="container mx-auto text-center shadow-lg border-2 border-black rounded-lg font-serif ">
          Restaurant où la consommation de nos sushi traditionnels se fait
          directement sur place afin de satisfaire vos papilles gustatives.
        </div>
      </section>

      <Footer />

      <div
        id="cookie-banner"
        className="fixed bottom-0 w-full bg-red-600 p-4 text-center text-white shadow-lg opacity-90 z-50"
      >
        Ce site utilise des cookies pour améliorer votre expérience.
        <button
          className="ml-4 px-4 py-2 bg-green-500 text-white rounded"
          onClick={handleAcceptCookies}
        >
          Accepter
        </button>
        <button
          className="ml-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={handleRefuseCookies}
        >
          Refuser
        </button>
      </div>
    </div>
  );
}

function toggleMenu() {
  const menu = document.getElementById('smallScreenMenu');
  menu.classList.toggle('hidden');
}

function handleAcceptCookies() {
  document.getElementById('cookie-banner').style.display = 'none';
}

function handleRefuseCookies() {
  document.getElementById('cookie-banner').style.display = 'none';
}
