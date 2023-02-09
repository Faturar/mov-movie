import React, { useState, useEffect  } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import AOS from 'aos';

import { Swiper, SwiperSlide } from 'swiper/react';
import ClipLoader from "react-spinners/ClipLoader";

// import required modules
import { Navigation } from "swiper";

// Components
import MovieCard from '../components/MovieCard'

// Images
import headerImg from '../assets/img/header-img.png'
import eclipse from '../assets/img/eclipse8.svg'

export default function Home({keywordData}) {
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [explore, setExplore] = useState([]);
    const [loading, setLoading] = useState(true);

    const [keyword, setKeyword] = useState('');

    const apiKey = process.env.REACT_APP_MOVIE_API_KEY

    useEffect(() => {
        setLoading(true)
        window.scrollTo(0, 0)
        AOS.refresh();

        const getPopular = () => {
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate`)
                .then(response => {
                    setPopular(response.data.results)
                })
                .catch(error => {
                    console.log(error);
                })
        }
    
        const getTopRated = () => {
            axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en&page=1`)
                .then(response => {
                    setTopRated(response.data.results)
                })
                .catch(error => {
                    console.log(error);
                })
        }
    
        const getExplore = () => {
            axios.get(`https://api.themoviedb.org/3/movie/634649/recommendations?api_key=${apiKey}&language=en-US&page=1`)
                .then(response => {
                    setExplore(response.data.results)
                    setLoading(false)
                    AOS.refresh();
                })
                .catch(error => {
                    console.log(error);
                })
        }

        getPopular()
        getTopRated()
        getExplore()
    }, [apiKey])

  return (
    <div className='container px-6 xl:px-0 mx-auto text-white'>
        {/* Loading screen */}
        <div className={`${loading ? 'flex' : 'hidden'} bg-black fixed left-0 top-0 w-screen h-screen justify-center items-center z-20 transition-all`}>
                <ClipLoader color={'#EF05CA'} loading={loading} size={60} />
        </div>

        <img src={eclipse} alt="" className='absolute -z-10 top-[-100px] right-0' />


        {/* <div className='absolute top-0 right-0 -z-10'>
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
        </div> */}

        {/* Header */}
        <header className='flex lg:flex-row flex-col items-center relative w-11/12 mx-auto mb-72 md:mb-10 lg:mb-12 lg:pb-14'>
            {/* Header Image */}
            <div className='flex-1' data-aos="fade-right">
                <img src={headerImg} alt="film list" className='w-10/12 blur-sm lg:blur-none opacity-40 lg:opacity-100 mx-auto' />
            </div>

            {/* Header Content */}
            <div className='flex-1 absolute top-20 md:top-32 lg:top-0 lg:relative' data-aos="fade-left">
                <h1 className='w-11/12 mx-auto  lg:mx-0 lg:-mt-8 leading-tight lg:leading-none text-5xl md:text-6xl lg:text-left text-center font-semibold'>
                    More Than <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-fuchsia-600'>10,000+</span> Movies  You Can Find Here
                </h1>

                <div className='flex justify-center lg:justify-start mt-16 text-white'>
                    <div className='w-8/12 rounded-lg border border-transparent bg-clip-border bg-gradient-to-r from-blue-600 to-fuchsia-600'>
                        <input 
                            value={keyword} 
                            onChange={(e) => setKeyword(e.target.value)} 
                            type="text"
                            placeholder='Movie Name or Keyword' 
                            className='px-3 lg:px-4 w-full h-full text-sm lg:text-base focus:outline-none placeholder:text-white placeholder:font-normal bg-neutral-800 rounded-lg' 
                        />    
                    </div>
                    <Link to={`/search`}>
                        <button onClick={() => keywordData(keyword)} className='py-2 px-4 md:px-8 md:py-3 rounded-lg ml-4 bg-gradient-to-r from-blue-600 to-fuchsia-600'>
                            Search
                        </button>
                    </Link>
                </div>
            </div>
        </header>

        <main>
            {/* Popular Movies Section */}
            <section className='mb-12 lg:mb-24' id='popular'>
                <div data-aos="fade-up" data-aos-duration="500">
                    <h2 className='lg:px-2 text-2xl md:text-3xl font-medium'>Popular Movies</h2>
                
                    <Swiper
                    className='mt-12 lg:mt-16'
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetweenSlides: 10
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetweenSlides: 20
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetweenSlides: 50
                        },
                        1280: {
                            slidesPerView: 6,
                            spaceBetweenSlides: 50
                        },
                    }}
                >
                    {popular.map(movie => (
                        <SwiperSlide>
                            <MovieCard key={movie.id} movie={movie} />
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
            </section>
            
            {/* Top Rated Movies Section */}
            <section className='mb-12 lg:mb-24' id='top-rated'>
                <div data-aos="fade-up" data-aos-duration="500">
                    <h2 className='lg:px-2 text-2xl md:text-3xl font-medium'>Top Rated Movies</h2>

                    {/* Slider */}
                    <Swiper
                        className='mt-12 lg:mt-10'
                        navigation={true}
                        modules={[Navigation]}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetweenSlides: 10
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetweenSlides: 20
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetweenSlides: 50
                            },
                            1280: {
                                slidesPerView: 6,
                                spaceBetweenSlides: 50
                            },
                        }}
                    >
                        {topRated.map(movie => (
                            <SwiperSlide>
                                <MovieCard key={movie.id} movie={movie} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Explore */}
            <section id='explore'>
                <div data-aos="fade-up" data-aos-duration="500">
                    <h2 className='px-2 text-2xl md:text-3xl font-medium'>Explore</h2>
                    
                    {/* Slider */}
                    <Swiper
                        className='mt-12 lg:mt-10'
                        navigation={true}
                        modules={[Navigation]}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetweenSlides: 10
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetweenSlides: 20
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetweenSlides: 50
                            },
                            1280: {
                                slidesPerView: 6,
                                spaceBetweenSlides: 50
                            },
                        }}
                    >
                        {explore.map(movie => (
                            <SwiperSlide>
                                <MovieCard key={movie.id} movie={movie} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </main>
    </div>
  )
}