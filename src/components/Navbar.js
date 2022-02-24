import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/img/logo.png';
import searchIcon from '../assets/icon/search.svg';
import burgerIcon from '../assets/icon/burger.svg';

function Navbar() {
  return (
    <nav className="container relative px-8 lg:px-0 mx-auto my-8 lg:mt-10">
        <div className="flex justify-between items-center">
          <div className='flex-1'>
            <Link to="/">
              <img src={logo} alt="Logo Moe Movie" width="40px" />
            </Link>
          </div>
          
          {/* Desktop */}
          <div className="flex-1 hidden lg:flex justify-end">
              <ul className="space-x-12 mr-20 flex text-white">
                <li>
                  <Link to="#popular">Popular</Link>
                </li>
                <li>
                  <Link to="#">Top Rated</Link>
                </li>
                <li>
                  <Link to="#">Explore</Link>
                </li>
              </ul>
              <img src={searchIcon} alt="Search Icon" width="24px" />
          </div>

          {/* Mobile */}
          <div className="lg:hidden absolute top-0 right-0">
            <ul className="flex flex-col text-white">
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
            
            {/* Search */}
            <div className='relative inline-block bg-gray-700 rounded-lg'>
              <div className='inline-flex px-4 py-2'>
                <input type="text" className='bg-transparent mr-3 focus:outline-none text-white' />
                <label htmlFor="">
                  <img src={searchIcon} alt="Search Icon" width="24px" />
                </label>
              </div>
            </div>
          </div>

          <div className='flex-1 justify-end flex lg:hidden'>
            <img src={burgerIcon} alt="Burger Icon" width="32px"/>
          </div>
        </div>
        
    </nav>
  )
}

export default Navbar