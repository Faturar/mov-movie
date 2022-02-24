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
import star from '../assets/icon/star.svg'

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
                        <img src={poster} alt="" className='w-72' />
                    </div>

                    {/* Description section */}
                    <div className='col-span-2 -ml-3'>
                        <h1 className='text-5xl mt-8'>Encanto</h1>
                        <div className='inline-flex mt-4'>
                            <div className='inline-flex'>
                                 <img src={star} alt="" className='mr-2' />
                                 <span>7.8/10</span>
                            </div>
                            <span className='ml-6'>1h 42min</span>
                            <span className='ml-6'>Animation, Comedy, Family, Fantasy</span>
                            <span className='ml-6'>2021</span>
                        </div>
                        <p className='mt-2 mr-16'>
                            The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to healevery child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.</p>
                    </div>
                </div>
                
                {/* Cast */}
                <section className='mt-20'>
                    <h2 className='text-3xl font-medium'>Cast</h2>
                    
                    <Swiper
                        className='mt-12'
                        spaceBetween={50}
                        slidesPerView={6}
                        navigation={true}
                        modules={[Navigation]}
                    >
                        {movies.map((movie, index) => {
                            return (
                                <SwiperSlide>
                                    <MovieCard key={index} movie={movie} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </section>
            </main>
        </div>
    )
}

export default detail