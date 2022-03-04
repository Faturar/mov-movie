import React from 'react'
import {Link} from 'react-router-dom'

import star from '../assets/icon/star.svg'

function MovieCard(movie) {
  const {poster, title, rating} = movie.movie

  return (
    <Link to="/detail">
      <div className='mx-2 md:mx-3 lg:mx-4 mb-8 relative shadow-md shadow-blue-700 rounded-lg'>
          <img src={poster} alt="" width="100%" height="100%" />
          <div className={`${title ? 'absolute' : ''} w-full rounded-lg bottom-0 bg-gradient-to-t from-black`}>
            <h4 className='px-4 text-sm lg:text-base'>
              {title}
            </h4>
            <div className='inline-flex px-4 mt-2'>
              <img src={star} alt="" className='w-3 lg:w-4' />
              <span className='text-xs ml-1 lg:ml-2'>{rating}</span>
            </div>
          </div>
      </div>
    </Link>
  )
}

export default MovieCard