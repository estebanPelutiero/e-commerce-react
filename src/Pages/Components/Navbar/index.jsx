import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const activeStyle = 'underline underline-offset-[6px] decoration-2 decoration-orange-600'

  return (
    <nav className='fixed z-10 top-0 flex justify-between items-center w-full px-6 py-3'>
      {/* Left Navbar */}

      <ul className='flex items-baseline gap-3'>
        <li className='font-semibold text-lg leading-8'>
          <NavLink to={'/'}>
            Black Box
          </NavLink>
        </li>
        <li className='text-sm'>
          <NavLink
            to={'/'}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li className='text-sm'>
          <NavLink 
            to={'/clothes'}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
            }>
            Clothes
          </NavLink>
        </li>
        <li className='text-sm'>
          <NavLink 
            to={'/electronics'}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
            }>
            Electronics
          </NavLink>
        </li>
        <li className='text-sm'>
          <NavLink 
            to={'/furnitures'}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
            }>
            Furnitures
          </NavLink>
        </li>
        <li className='text-sm'>
          <NavLink 
            to={'/toys'}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
            }>
            Toys
          </NavLink>
        </li>
        <li className='text-sm'>
          <NavLink 
            to={'/others'}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
            }>
            Others
          </NavLink>
        </li>
      </ul>

      {/* Right Navbar */}

      <ul className='flex gap-3 items-baseline'>
        <li className='text-sm text-black/60'>
            estebanpelutiero@gmail.com
        </li>
        <li className='text-sm'>
          <NavLink 
            to={'/my-orders'}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
            }>
            My Orders
          </NavLink>
        </li>
        <li className='text-sm'>
          <NavLink 
            to={'/my-account'}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
            }>
            My Account
          </NavLink>
        </li>
        <li className='text-sm'>
          <NavLink 
            to={'/sign-in'}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
            }>
            Sign In
          </NavLink>
        </li>
        <li>
            🛒 0
        </li>
      </ul>
    </nav>
  )
}

export default Navbar