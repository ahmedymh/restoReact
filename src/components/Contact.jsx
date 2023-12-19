import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <form class="m-10">
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-4">
                <label
                  for="username"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nom
                </label>
                <div class="mt-2">
                  <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600 sm:max-w-md">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autocomplete="username"
                      class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Janes"
                    />
                  </div>
                </div>
              </div>
              <div class="sm:col-span-4">
                <label
                  for="username"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Prenom
                </label>
                <div class="mt-2">
                  <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600 sm:max-w-md">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autocomplete="username"
                      class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder=" Mith"
                    />
                  </div>
                </div>
              </div>
              <div class="sm:col-span-4">
                <label
                  for="username"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  adresse email
                </label>
                <div class="mt-2">
                  <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600 sm:max-w-md">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autocomplete="username"
                      class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="janesmith@exemple.com"
                    />
                  </div>
                </div>
              </div>

              <div class="col-span-full">
                <label
                  for="about"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Commentaire
                </label>
                <div class="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                    placeholder="Votre commentaire..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="rounded-md m-1 bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Envoyé
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
