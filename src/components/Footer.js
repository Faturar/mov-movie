import React from 'react'
import { Link } from 'react-router-dom'

import logoName from '../assets/img/logo-name.png'

function Footer() {
  return (
    <div className="container mx-auto mt-24 lg:mt-32 py-10">
      <div className='container grid gird-rows-4 lg:grid-rows-2 text-white'>
        <div className="flex flex-col lg:flex-row">
          <div className='text-center mx-auto lg:mx-0 lg:text-left'>
            <img src={logoName} alt="" className='h-10 mx-auto lg:mx-0' />
            <p className='mt-8 w-80'>Platform that serves you to search movie information from all over the world.</p>
          </div>
          <div className='mt-12 lg:mt-0 mx-auto lg:mx-0 lg:ml-auto'>
            <ul className="space-x-8 lg:space-x-12 lg:mr-20 flex text-white">
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
        </div>
        <div className='mt-16 lg:mt-20 flex flex-col-reverse lg:flex-row items-center'>
          <div className='text-center mx-12 lg:mx-0 mt-6'>
            <p>&copy; 2021 Designed and Developed by Fatur Powered by TMDB</p>
          </div>
          <div className='lg:ml-auto mx-auto lg:mx-0'>
            <ul className="space-x-8 lg:space-x-12 lg:mr-20 flex text-white">
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
    </div>
  )
}

export default Footer