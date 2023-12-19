import React from 'react'
import { Link } from 'react-router-dom';
import Ban from './../assets/close-up-delicious-asian-food.jpg'


export default function Menu() {
  return (
    <div className='h-screen w-screen bg-white flex justify-center items-center'>
        <div className='h-[90%] w-[90%] shadow-2xl rounded-xl  text-gray-200 px-[40px] bg-center bg-cover bg-no-repeat bg-gray-700 bg-blend-multiply' style={{
          backgroundImage: `url(${Ban})`,
        }}>
            <div className='h-[15%] w-full flex items-center relative'>
                <h1 className='text-6xl font-medium text-gray-200 pl-[150px]'>MENU</h1>
            </div>
            <div className='h-[85%] w-full flex'>

                <div className='w-1/2 h-full flex flex-col gap-[50px] items-center'>
                    
                    <div className='w-[300px] bg-red-500  rounded-md'>
                        <div className='text-gray-200 font-medium text-3xl w-full h-[70px] flex justify-center items-center '>
                            Callifornia Rolls
                        </div>
                        <div className=''>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Salmon cheese</div>
                                <div className='h-full w-[10%]'>9$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Salmon avocat</div>
                                <div className='h-full w-[10%]'>12$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Salmon mangue</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Sweet chicken</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Spicy tempura scampi</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>tempura scampi mangue</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Comcombre avocat</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Surimi avocat</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Pink panthere</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Dynamite</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Spicy love</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                        </div>
                    </div>

                    <div className='w-[300px]'>
                        <div className='text-gray-200 font-medium text-3xl w-full h-[70px] flex justify-center items-center bg-red-500  rounded-md'>
                            Plateau
                        </div>
                        <div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>California love</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Salmon forever</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>California dream</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                        </div>
                    </div>

                </div>

                










                <div className='w-1/2 h-full flex flex-col gap-[50px] items-center'>
                    
                    <div className='w-[300px]'>
                        <div className='text-gray-200 font-medium text-3xl w-full h-[70px] flex justify-center items-center bg-red-500  rounded-md'>
                            Suchi
                        </div>
                        <div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Maki suchi</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Sashimi</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Nigiri suchi</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Gumkan suchi</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Temaki Suchi</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                        </div>
                    </div>

                    <div className='w-[300px] bg-red-500  rounded-md'>
                        <div className='text-gray-200 font-medium text-3xl w-full h-[70px] flex justify-center items-center'>
                            Rafraichissements
                        </div>
                        <div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Arizona Pomme grenade</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Arizona Mucho mange</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Arizona Watermelon</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Pepsi</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Eau</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                            <div className='flex w-full h-[30px] px-2'>
                                <div className='h-full w-[90%]'>Thé</div>
                                <div className='h-full w-[10%]'>10$</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <div className='text-gray-200 font-semibold text-3xl absolute top-[80px] right-[120px] cursor-pointer'>
            <Link to={"/"}>X</Link>
        </div>

    </div>
  )
}