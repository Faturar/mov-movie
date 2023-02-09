import React from 'react'
import {Link} from 'react-router-dom'

import star from '../assets/icon/star.svg'
import noposter from '../assets/img/noposter.jpg'

export default function MovieCard(movie) {
  
  const {id, poster_path, title, vote_average} = movie.movie

  return (
    <Link to={`/detail/${id}`}>
      <div className='mx-2 md:mx-3 lg:mx-4 mb-8 lg:mb-6 relative shadow-md shadow-blue-700 rounded-lg'>
          {/* Poster */}
          <img src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : noposter} alt="" className="xl:w-48 xl:h-[272px] rounded-lg" />
          
          <div className={`${title ? 'absolute' : ''} w-full rounded-lg bottom-0 bg-gradient-to-t from-black`}>
            <h4 className='px-4 text-sm lg:text-base'>
          
              {/* Title */}
              {title ? title : ''}
            </h4>
            <div className='inline-flex px-4 mt-2 mb-3'>
              <img src={star} alt="" className='w-3 lg:w-4' />
              {/* Rating */}
              <span className='text-xs ml-1 lg:ml-2'>{vote_average ? vote_average : '-'}</span>
            </div>
          </div>
      </div>
    </Link>
  )
}