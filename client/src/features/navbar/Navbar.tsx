import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/NavbarStyle.scss'

const Navbar = () => {
  return (
    <div className='container'>
      <div ><NavLink to='/auth/registr'>Registration</NavLink></div>
      <div ><NavLink to='/auth/login'>Login</NavLink></div>
      <div ><NavLink to=''>Logout</NavLink></div>
      <div ><NavLink to='/student'>StudentAll</NavLink></div>
      <div ><NavLink to='/student/profile'>Profile</NavLink></div>
    </div>
  )
}

export default Navbar