import React from 'react'
import {Link} from 'react-router-dom'

import star from '../assets/icon/star.svg'

function MovieCard(movie) {
  return (
    <div className='w-48 relative drop-shadow-lg rounded-lg'>
        <img src={movie.movie.poster} alt="" width="100%" height="100%" />
        <div className={`${movie.movie.poster ? 'absolute' : ''} bottom-0 bg-gradient-to-t from-black`}>
          <h4 className='px-4'>
            <Link to="#">{movie.movie.title}</Link>
          </h4>
          <div className='inline-flex px-4 mt-2'>
            <img src={star} alt="" />
            <span className='text-xs ml-2'>{movie.movie.rating}</span>
          </div>
        </div>
    </div>
  )
}

export default MovieCard