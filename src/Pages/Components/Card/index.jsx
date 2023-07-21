import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'

const Card = ( { title, img, price, category } ) => {
  return (
    <div className='w-60 h-64 rounded-lg shadow-lg'>
        <figure className='relative flex justify-center items-center w-full h-4/5'>
            <img className='w-[70%] h-[70%] object-contain rounded-t-lg' src={img} alt={title} />
            <span className='absolute bottom-0 left-0 m-2 px-2 py-0.5 text-xs font-semibold rounded-lg bg-white/60'>{category}</span>
            <button className='absolute flex justify-center items-center outline-none top-0 right-0 m-2 rounded-full text-lg'>
                <AiFillPlusCircle size={25} color='black' />
            </button>
        </figure>
        <div className='flex justify-between items-center w-full h-1/5 my-auto bg-black/10 rounded-b-lg'>
            <span className='mx-3 text-sm font-light truncate'>{title}</span>
            <span className='mx-3 text-lg font-semibold'>${price}</span>
        </div>
    </div>
  )
}

export default Card