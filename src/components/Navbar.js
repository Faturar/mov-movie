import React from 'react'
import { useLocation } from 'react-router-dom'
import {Link as Scroll} from 'react-scroll'
import {Link} from 'react-router-dom'

import logo from '../assets/img/logo.png';
import searchIcon from '../assets/icon/search.svg';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="container relative px-6 xl:px-0 mx-auto my-8 lg:mt-10">
        <div className="flex justify-between items-center">
          <div className=''>
            <Link to="/">
              <img src={logo} alt="Logo Moe Movie" width="40px" />
            </Link>
          </div>
          
          {/* Desktop */}
          <div className="flex-1 flex items-center justify-end text-white">
              <div className={`${location.pathname === '/' ? 'hidden lg:flex' : 'hidden'} space-x-12 mr-16`}>
                <div className='cursor-pointer'>
                  <Scroll to="popular" spy={true} smooth={true}>Popular</Scroll>
                </div>
                <div className='cursor-pointer'>
                  <Scroll to="top-rated" spy={true} smooth={true}>Top Rated</Scroll>
                </div>
                <div className='cursor-pointer'>
                  <Scroll to="explore" spy={true} smooth={true}>Explore</Scroll>
                </div>
              </div>
              <a href="/search">
                <img src={searchIcon} alt="" className='w-7' />
              </a>
          </div>
        </div>
        
    </nav>
  )
}

export default Navbar