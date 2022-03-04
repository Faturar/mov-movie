import React from 'react'

// Components
import movies from '../movieData';
import MovieCard from '../components/MovieCard'

import eclipse from '../assets/img/eclipse8.svg'


function home() {
    return (
        <div className='container px-6 xl:px-0 mx-auto text-white'>
            <img src={eclipse} alt="" className='absolute -z-10 -top-10 right-0' />

            <header className='mt-16'>
                <h1 className='text-center text-3xl lg:text-4xl xl:text-5xl mt-4 xl:mt-8'>
                    Find a movie
                </h1>
                <div className='w-10/12 lg:w-6/12 mt-8 lg:mt-16 mx-auto flex justify-center lg:justify-start text-white'>
                    <div className='w-full rounded-lg border border-transparent bg-clip-border bg-gradient-to-r from-blue-600 to-fuchsia-600'>
                        <input type="text" placeholder='Movie Name or Keyword' className='px-3 lg:px-4 w-full h-full text-sm lg:text-base focus:outline-none placeholder:text-white placeholder:font-normal bg-neutral-800 rounded-lg' />    
                    </div>
                    <button className='py-2 px-4 md:px-8 md:py-3 rounded-lg ml-4 bg-gradient-to-r from-blue-600 to-fuchsia-600'>Search</button>
                </div>
            </header>
            
            <main className='mt-16 lg:mt-24'>
                <div className="mt-12 lg:mt-16 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 auto-rows-auto">
                    {movies.map((movie, index) => {
                        return (
                            <MovieCard key={index} movie={movie} />
                        )
                    })}
                </div>
            </main>
        </div>
    )
}

export default home