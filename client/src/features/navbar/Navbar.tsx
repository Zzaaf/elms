import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/NavbarStyle.scss'
import { RootState, useAppDispatch } from '../../store'
import { logoutStudent } from '../students/studentSlice'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const {student} = useSelector((store:RootState)=>store.student)
  const logout =()=>{
    dispatch(logoutStudent())
  }
  return (
    <div className='container'>
      {!student ?
      <>
      <div ><NavLink to='/auth/registr'>Registration</NavLink></div>
      <div ><NavLink to='/auth/login/student'>Login</NavLink></div></>
      :
      <>
      <div ><NavLink to='/student'>StudentAll</NavLink></div>
      <div ><NavLink to='/student/profile'>Profile</NavLink></div>
      <div ><NavLink to='' onClick={logout}>Logout</NavLink></div>
      </>
      }
    </div>
  )
}

export default Navbar