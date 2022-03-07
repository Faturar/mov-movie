import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import ClipLoader from "react-spinners/ClipLoader";
import AOS from 'aos';
import axios from 'axios';

// import required modules
import { Navigation } from "swiper";

// Components
import CastProfile from '../components/CastProfile'
import MovieCard from '../components/MovieCard'

// img 
import eclipse from '../assets/img/eclipse8.svg'
import star from '../assets/icon/star.svg'
import noposter from '../assets/img/noposter.jpg'

const apiKey = process.env.REACT_APP_MOVIE_API_KEY

export default function Detail() {
    let { id } = useParams()
    
    const [detail, setDetail] = useState([])
    const [casts, setCasts] = useState([])
    const [related, setRelated] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        window.scrollTo(0, 0)
        AOS.refresh();

        const getMovieDetail = () => {
            axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
                .then(response => {
                    setDetail(response.data)
                })
                .catch(error => {
                    console.log(error);
                })
        }

        const getMovieCast = () => {
            axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`)
                .then(response => {
                    setCasts(response.data.cast)
                })
                .catch(error => {
                    console.log(error);
                })
        }

        const getRelatedMovie = () => {
            axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`)
                .then(response => {
                    setRelated(response.data.results)
                })
                .catch(error => {
                    console.log(error);
                })
        }

        getMovieCast()
        getMovieDetail()
        getRelatedMovie()
    }, [id])

    const {backdrop_path, poster_path, title, overview, vote_average, release_date, genres} = detail;

    return (
        <div className='container px-6 xl:px-0 mx-auto text-white'>
            {/* Loading screen */}
            <div className={`${loading ? 'flex' : 'hidden'} bg-black fixed left-0 top-0 w-screen h-screen justify-center items-center z-20`}>
                <ClipLoader color={'#EF05CA'} loading={loading} size={60} />
            </div>

            <img src={eclipse} alt="" className='absolute -z-10 -top-10 right-0' />

            {/* Header */}
            <header className='mx-auto mt-12 hidden lg:block'>
                <img onLoad={() => setLoading(false)} src={backdrop_path ? `http://image.tmdb.org/t/p/w1280${backdrop_path}` : ''} alt="" className='rounded-lg h-[480px] w-full object-cover' />
                <div className={`${loading ? 'flex' : 'hidden'} bg-black fixed left-0 top-0 w-screen h-screen justify-center items-center z-20`}>
                    <ClipLoader color={'#EF05CA'} loading={loading} size={60} />
                </div>
            </header>

            <main>
                <div className='grid grid-rows-1 grid-cols-1 lg:grid-rows-none lg:grid-cols-3 mt-0 md:mt-16 lg:mt-0 mb-16 md:mb-12 xl:mb-28'>
                    {/* Poster */}
                    <div className='m-auto w-56 md:w-56 lg:w-64 xl:w-72 mt-8 lg:-mt-8 xl:-mt-32 xl:ml-16' data-aos="fade-right" data-aos-duration="500">
                        <img src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : noposter} alt="" className='shadow-lg shadow-blue-700 rounded-lg'  />
                    </div>

                    {/* Description section */}
                    <div className='lg:col-span-2 ml-0 md:ml-3 lg:-ml-3 xl:-ml-10 lg:px-4'>
                        <h1 className='text-3xl md:text-4xl xl:text-5xl mt-16 md:mt-16 lg:mt-8 xl:mt-10'>
                            {title}
                        </h1>
                        <div className='inline-flex flex-wrap mt-4 text-sm md:text-base lg:text-lg space-x-4 lg:space-x-6'>
                            <div className='inline-flex align-center justify-center'>
                                 <img src={star} alt="" className='mr-2 w-4' />
                                 <span>{vote_average}/10</span>
                            </div>
                            <span>1h 42min</span>
                            <span>
                                {genres ? 
                                    genres.map((genre, index) => (
                                        index === genres.length - 1 ? genre.name : `${genre.name}, `
                                    )) : ''}
                            </span>
                            <span>{release_date ? release_date.substring(0, 4) : ''}</span>
                        </div>
                        <p className='mt-4 lg:mt-2 xl:mr-16 text-sm md:text-base lg:text-lg'>
                            {overview ? overview : ''}    
                        </p>
                    </div>
                </div>
                
                {/* Cast */}
                <section className='md:-mt-8 lg:mt-12' id='cast'>
                    <div data-aos="fade-up" data-aos-duration="500">
                        <h2 className='lg:px-2 text-2xl md:text-3xl mb-12 font-medium'>Cast</h2>
                        
                        <Swiper
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
                            {casts.map((cast, index) => (
                                <SwiperSlide>
                                    <CastProfile key={index} cast={cast} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>

                <section className='mt-16  xl:mt-20' id='related'>
                    <div data-aos="fade-up" data-aos-duration="500">
                        <h2 className='lg:px-2 text-2xl md:text-3xl font-medium'>Realated Movie</h2>
                    
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
                            {related.map((movie, index) => (
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