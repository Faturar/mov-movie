import React from 'react'

function CastProfile(cast) {
  const {name, image} = cast.cast

  return (
    <div className='flex flex-col items-center'>
        <img src={image} alt="" className='w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover' />
        <h4 className='text-center mt-4 text-sm lg:text-base'>{name}</h4>
    </div>
  )
}

export default CastProfile