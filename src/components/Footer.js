import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {Link as Scroll} from 'react-scroll'

import logoName from '../assets/img/logo-name.png'

function Footer() {
  const location = useLocation();
  
  return (
    <div className="container mx-auto mt-24 lg:mt-32 py-10">
      <div className='container grid gird-rows-4 lg:grid-rows-2 text-white'>
        <div className="flex flex-col lg:flex-row">
          <div className='text-center mx-auto lg:mx-0 lg:text-left'>
            <Link to="/">
              <img src={logoName} alt="" className='h-10 mx-auto lg:mx-0' />
            </Link>
            <p className='mt-8 w-96'>Platform that give you movie recomendation and search movie information.</p>
          </div>
          <div className='mt-12 lg:mt-0 mx-auto lg:mx-0 lg:ml-auto'>
            <ul className={`${location.pathname === '/' ? 'hidden lg:flex' : 'hidden'} space-x-8 lg:space-x-12 lg:mr-20 flex text-white `}>
              <li className='cursor-pointer'>
                <Scroll to="popular" spy={true} smooth={true}>Popular</Scroll>
              </li>
              <li className='cursor-pointer'>
                <Scroll to="top-rated" spy={true} smooth={true}>Top Rated</Scroll>
              </li>
              <li className='cursor-pointer'>
                <Scroll to="explore" spy={true} smooth={true}>Explore</Scroll>
              </li>
            </ul>
            <ul className={`${location.pathname === '/detail' ? 'hidden lg:flex' : 'hidden'} space-x-8 lg:space-x-12 lg:mr-20 flex text-white `}>
              <li className='cursor-pointer'>
                <Scroll to="cast" spy={true} smooth={true}>Cast</Scroll>
              </li>
              <li className='cursor-pointer'>
                <Scroll to="related" spy={true} smooth={true}>Related</Scroll>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-16 lg:mt-20 flex flex-col-reverse lg:flex-row items-center'>
          <div className='text-center mx-12 lg:mx-0 mt-6'>
            <p>&copy; 2022 Designed and Developed by Fatur Powered by TMDB</p>
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