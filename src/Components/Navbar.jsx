import React from 'react'
import logo from '../assets/arts.png'
import { NavLink, useNavigate } from 'react-router'

const Navbar = () => {
    const navigate = useNavigate()

    const links = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/explore'}>Explore Artworks</NavLink>
        <NavLink to={'/add'}>Add Artwork</NavLink>
        <NavLink to={'/gallery'}>My Gallery</NavLink>
        <NavLink to={'/favorites'}>My Favorites</NavLink>
    </>


  return (
<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start max-sm:w-150">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          {links}
      </ul>
    </div>
        <div className='flex justify-center items-center gap-2 ml-10'>
            <p className='text-4xl font-serif font-extrabold'>Artify</p>
            <img className='w-13 h-13' src={logo} alt="logo" />
        </div>
  </div>
  <div className="navbar-center hidden lg:flex max-sm:flex-col">
    <ul className="menu menu-horizontal flex gap-5 text-2xl text-cyan-700 font-bold">
        {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a onClick={()=>navigate('login')} className="btn btn-primary font-bold mr-10">Sign In</a>
  </div>
</div>
  )
}

export default Navbar