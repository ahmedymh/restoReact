import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

export default function Restaurant() {
  return (
    <div>
    <Navbar />

    <main>
        <section class="col-start-1 col-end-5 mx-4 md:mx-0 lg:mx-0 md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-13 row-start-2 row-end-3 p-4 text-center rounded-lg">
            <div class="container mx-auto max-w-screen-xl p-6">
                <h1 class="text-3xl font-bold mb-4">Nos restaurants</h1>
            
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div class="bg-white p-4 rounded-lg md:shadow-lg">
                        <p class="flex justify-center mb-4"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.0477430324813!2d4.280316213025036!3d50.86731587155685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c13edc51218d%3A0xbb0775d896effc1d!2sHunderenveld%20145%2C%201082%20Berchem-Sainte-Agathe!5e0!3m2!1sfr!2sbe!4v1696950445322!5m2!1sfr!2sbe" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
                        <h2 class="text-xl font-semibold mb-2">Berchem-Saint-Aghate</h2>
                        <p class="mb-2">Av. du Hunderenveld 145, 1082 Berchem-Saint-Aghate</p>
                        <p class="mb-4">Lun-Ven: 12:00 - 00:00, Sam-Dim: 12:00 - 2:00</p>
                        <div id="map1" class="h-40 w-full rounded"></div>
                    </div>
            
            
                    <div class="bg-white p-4 rounded-lg md:shadow-lg">
                        <p class="flex justify-center mb-4"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.89568857405!2d4.3506876130243874!3d50.8516158715535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c38132c71875%3A0x3baf470c1244243c!2sPl.%20De%20Brouck%C3%A8re%2088%2C%201000%20Bruxelles!5e0!3m2!1sfr!2sbe!4v1696950411365!5m2!1sfr!2sbe" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
                        <h2 class="text-xl font-semibold mb-2">Bruxelles 1000</h2>
                        <p class="mb-2">1 Grand Place, 1000 Bruxelles</p>
                        <p class="mb-4">Lun-Ven: 12:00 - 00:00, Sam-Dim: 12:00 - 01:00</p>
                        <div id="map2" class="h-40 w-full rounded"></div>
                    </div>

                </div>


            </div>
        </section>
    </main>

    <Footer />
    </div>
  )
}
