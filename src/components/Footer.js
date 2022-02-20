import React from 'react'
import { Link } from 'react-router-dom'

import logoName from '../assets/img/logo-name.png'

function Footer() {
  return (
    <div className="container mx-auto mt-32 py-10">
      <div className='container grid grid-cols-2 grid-rows-2 text-white'>
        <div>
          <img src={logoName} alt="" className='h-10' />
          <p className='mt-8 w-80'>Platform that serves you to search movie information from all over the world.</p>
        </div>
        <div className='ml-auto'>
          <ul className="space-x-12 mr-20 flex text-white">
            <li>
              <Link to="#">Popular</Link>
            </li>
            <li>
              <Link to="#">Top Rated</Link>
            </li>
            <li>
              <Link to="#">Explore</Link>
            </li>
          </ul>
        </div>
        <div className='mt-24'>
          <p>&copy; 2021 Designed and Developed by Fatur Powered by TMDB</p>
        </div>
        <div className='mt-24 ml-auto'>
          <ul className="space-x-12 mr-20 flex text-white">
            <li>
              <Link to="#">Privacy & Policy</Link>
            </li>
            <li>
              <Link to="#">Term</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer