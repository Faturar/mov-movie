import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from "swiper";

// Components
import casts from '../castList';
import CastProfile from '../components/CastProfile'
import movies from '../movieData';
import MovieCard from '../components/MovieCard'

// img 
import eclipse from '../assets/img/eclipse8.svg'
import headerImg from '../assets/img/header-detail.jpg'
import poster from '../assets/img/poster-3.png'
import star from '../assets/icon/star.svg'

function detail() {
    return (
        <div className='container px-6 xl:px-0 mx-auto text-white'>

            <img src={eclipse} alt="" className='absolute -z-10 -top-10 right-0' />

            {/* Header */}
            <header className='mx-auto mt-16 hidden lg:block'>
                <img src={headerImg} alt="" className='rounded-lg' />
            </header>

            <main>
                <div className='grid grid-rows-2 grid-cols-1 md:grid-rows-none md:grid-cols-3 mt-0 md:mt-16 lg:mt-0'>
                    {/* Poster */}
                    <div className='m-auto w-56 md:w-56 xl:w-72 lg:-mt-8 xl:-mt-28 xl:ml-16'>
                        <img src={poster} alt="" className='shadow-lg shadow-blue-700 rounded-lg'  />
                    </div>

                    {/* Description section */}
                    <div className='col-span-2 ml-0 md:ml-3 lg:-ml-3 px-4'>
                        <h1 className='text-3xl lg:text-4xl xl:text-5xl mt-4 xl:mt-8'>Encanto</h1>
                        <div className='inline-flex flex-wrap mt-4 text-sm lg:text-base space-x-4 lg:space-x-6'>
                            <div className='inline-flex align-center justify-center'>
                                 <img src={star} alt="" className='mr-2 w-4' />
                                 <span>7.8/10</span>
                            </div>
                            <span>1h 42min</span>
                            <span>Animation, Comedy, Family, Fantasy</span>
                            <span>2021</span>
                        </div>
                        <p className='mt-4 lg:mt-2 lg:mr-16'>
                            The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to healevery child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.</p>
                    </div>
                </div>
                
                {/* Cast */}
                <section className='mt-16 md:mt-12 xl:mt-28'>
                    <h2 className='text-2xl md:text-3xl font-medium'>Cast</h2>
                    
                    <Swiper
                        className='mt-12'
                        navigation={true}
                        modules={[Navigation]}
                        breakpoints={{
                            0: {
                                slidesPerView: 3,
                                spaceBetweenSlides: 10
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetweenSlides: 20
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetweenSlides: 50
                            },
                            1280: {
                                slidesPerView: 6,
                                spaceBetweenSlides: 50
                            },
                        }}
                    >
                        {casts.map((cast, index) => {
                            return (
                                <SwiperSlide>
                                    <CastProfile key={index} cast={cast} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </section>

                <section className='mt-16 lg:mt-20' id='related'>
                    <h2 className='text-2xl md:text-3xl font-medium'>Realated Movie</h2>
                    
                    <Swiper
                        className='mt-16'
                        navigation={true}
                        modules={[Navigation]}
                        breakpoints={{
                            0: {
                                slidesPerView: 3,
                                spaceBetweenSlides: 10
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetweenSlides: 20
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetweenSlides: 50
                            },
                            1280: {
                                slidesPerView: 6,
                                spaceBetweenSlides: 50
                            },
                        }}
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