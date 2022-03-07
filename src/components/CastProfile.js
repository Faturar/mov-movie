import React from 'react'

import noProfileImage from '../assets/img/noprofile.png'

function CastProfile(casts) {
  const {name, profile_path} = casts.cast

  return (
    <div className='flex flex-col items-center'>
        <img src={profile_path !== null ? `https://image.tmdb.org/t/p/w200/${profile_path}` : noProfileImage} alt="" className='w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover' />
        <h4 className='text-center mt-4 text-sm lg:text-base'>{name}</h4>
    </div>
  )
}

export default CastProfile