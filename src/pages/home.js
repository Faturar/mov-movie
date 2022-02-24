import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from "swiper";

// Components
import movies from '../movieData';
import MovieCard from '../components/MovieCard'

// Images
import headerImg from '../assets/img/header-img.png'
import eclipse1 from '../assets/img/eclipse1.svg'
import eclipse2 from '../assets/img/eclipse2.svg'
import eclipse3 from '../assets/img/eclipse3.svg'
import eclipse4 from '../assets/img/eclipse4.svg'
import eclipse5 from '../assets/img/eclipse5.svg'
import eclipse6 from '../assets/img/eclipse6.svg'
import eclipse7 from '../assets/img/eclipse7.svg'

function home() {
    return (
        <div className='container mx-auto text-white'>

            <div className='absolute top-0 right-0 -z-10'>
                <img src={eclipse1} alt="" />
            </div>

            <div className='absolute top-96 left-0 -z-10'>
                <img src={eclipse2} alt="" />
            </div>

            <div className='absolute right-0 -z-10' style={{top: '500px'}}>
                <img src={eclipse3} alt="" />
            </div>

            <div className='absolute right-0 -z-10' style={{top: '1240px'}}>
                <img src={eclipse4} alt="" />
            </div>

            <div className='absolute left-0 -z-10' style={{top: '1460px'}}>
                <img src={eclipse5} alt="" />
            </div>

            <div className='absolute left-0 -z-10' style={{top: '2000px'}}>
                <img src={eclipse6} alt="" />
            </div>

            <div className='absolute right-0 -z-10' style={{top: '2300px'}}>
                <img src={eclipse7} alt="" />
            </div>

            {/* Header */}
            <header className='flex items-center mx-auto w-11/12'>
                {/* Header Image */}
                <div className='flex-1'>
                    <img src={headerImg} alt="film list" width="520" />
                </div>

                {/* Header Content */}
                <div className='flex-1'>
                    <h1 className='text-6xl w-11/12 font-semibold -mt-8'>
                        More Than <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-fuchsia-600'>10,000+</span> Movies  You Can Find Here
                    </h1>

                    <div className='flex mt-16 text-white'>
                        <div className='w-8/12 rounded-lg border border-transparent bg-clip-border bg-gradient-to-r from-blue-600 to-fuchsia-600'>
                            <input type="text" placeholder='Movie Name or Keyword' className='px-4 w-full h-full focus:outline-none placeholder:text-white placeholder:font-normal bg-neutral-800 rounded-lg' />    
                        </div>
                        <button className='px-8 py-3 rounded-lg ml-4 bg-gradient-to-r from-blue-600 to-fuchsia-600'>Search</button>
                    </div>
                </div>
            </header>

            <main>

                {/* Popular Movies Section */}
                <section className='mt-36' id='popular'>
                    <h2 className='text-3xl font-medium'>Popular Movies</h2>
                    
                    <Swiper
                        className='mt-16'
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
                
                {/* Top Rated Movies Section */}
                <section className='mt-20' id='top-rated'>
                    <h2 className='text-3xl font-medium'>Top Rated Movies</h2>
                    
                    <Swiper
                        className='mt-16'
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

                {/* Explore */}
                <section className='mt-20' id='explore'>
                    <h2 className='text-3xl font-medium'>Explore</h2>
                        
                    <div className="mt-16 grid grid-cols-6 auto-rows-auto gap-6">
                        {movies.map((movie, index) => {
                            return (
                                <MovieCard key={index} movie={movie} />
                            )
                        })}
                    </div>
                    
                    <div className='w-full flex justify-center mt-20'>
                        <button className='px-6 py-3 rounded-lg mx-auto bg-gradient-to-r from-blue-600 to-fuchsia-600'>Show More</button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default home