import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from "swiper";

// Components
import movies from '../movieData';
import MovieCard from '../components/MovieCard'

// img 
import headerImg from '../assets/img/header-detail.jpg'
import poster from '../assets/img/poster-3.png'

function detail() {
    return (
        <div className='container mx-auto text-white'>

            {/* Header */}
            <header className='mx-auto mt-20'>
                <img src={headerImg} alt="" className='rounded-xl' />
            </header>

            <main>
                <div className='grid grid-cols-3'>
                    {/* Poster */}
                    <div className='w-72 -mt-36 ml-16'>
                        <img src={poster} alt="" className='w-64' />
                    </div>

                    {/* Description section */}
                    <div>
                        <h1>Encanto</h1>
                    </div>
                </div>
                
            </main>
        </div>
    )
}

export default detail