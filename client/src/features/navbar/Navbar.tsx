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
      <div>
          <NavLink to="/presentations">Презентации</NavLink>
        </div>
        <div>
          <NavLink to="/videos">Видео</NavLink>
        </div>
      {!student ?
      <>
        <div>
          <NavLink to='/auth/registr'>Регистрация</NavLink>
        </div>
        <div>
          <NavLink to='/auth/login/student'>Авторизация</NavLink>
        </div>
       </>
      :
      <>
        <div>
          <NavLink to='/students'>Студенты</NavLink>
        </div>
        <div>
          <NavLink to='/student/profile'>Профиль</NavLink>
        </div>
        <div>
          <NavLink to='' onClick={logout}>Logout</NavLink>
        </div>
      </>
      }
    </div>
  );
};

export default Navbar;
