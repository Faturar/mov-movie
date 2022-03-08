import React, { useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

import axios from 'axios';
import AOS from 'aos';

// Components
import MovieCard from '../components/MovieCard'

import eclipse from '../assets/img/eclipse8.svg'

const apiKey = process.env.REACT_APP_MOVIE_API_KEY

export default function Search({keyw}) {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0)
        AOS.refresh()

        if(keyw) {
            setKeyword(keyw)
        }
    
        const searchMovie = () => {
            if(keyword !== undefined && keyword !== '') {
                setLoading(true)
                axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${keyword}`)
                    .then(response => {
                        setResults(response.data.results)
                        setLoading(false)
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        }
        
        searchMovie()
    }, [keyword, keyw])

    return (
        <div className='container px-6 xl:px-0 mx-auto text-white'>
            <img src={eclipse} alt="" className='absolute -z-10 -top-10 right-0' />

            <header className='mt-16 lg:mt-24' data-aos="fade-down" data-aos-duration="700">
                <h1 className='text-center text-3xl lg:text-4xl xl:text-5xl mt-4 xl:mt-8'>
                    Find a movie
                </h1>
                <div className='w-10/12 lg:w-6/12 mt-8 lg:mt-16 mx-auto flex justify-center lg:justify-start text-white'>
                    <div className='w-full rounded-lg border border-transparent bg-clip-border bg-gradient-to-r from-blue-600 to-fuchsia-600'>
                        <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder='Movie Name or Keyword' className='px-3 lg:px-4 w-full h-full text-sm lg:text-base focus:outline-none placeholder:text-white placeholder:font-normal bg-neutral-800 rounded-lg' />    
                    </div>
                    <button className='flex py-2 px-4 md:px-8 md:py-3 rounded-lg ml-4 bg-gradient-to-r from-blue-600 to-fuchsia-600' {...loading ? 'disable' : ''}>
                        <span className={`${loading ? 'hidden' : 'block'}`}>Search</span>
                        <div className={`${loading ? 'flex' : 'hidden'} justify-center items-center`}>
                            <ClipLoader color={'#ffffff'} loading={loading} size={24} />
                        </div>
                </button>
                </div>
            </header>
            
            <main className='mt-16 lg:mt-32'>
                
                <div className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 auto-rows-auto">
                    {results.map(movie => {
                        return (
                            <MovieCard key={movie.id} movie={movie} />
                        )
                    })}
                </div>
            </main>
        </div>
    )
}