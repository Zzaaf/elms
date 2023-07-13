import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/NavbarStyle.scss';
import { RootState, useAppDispatch } from '../../store';
import { logoutStudent } from '../students/studentSlice';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { student } = useSelector((store: RootState) => store.student);
  const logout = () => {
    dispatch(logoutStudent());
  };
  return (
    <div className="container">
      {!student ? (
        <>
          <div>
            <NavLink to="/auth/registration">Регистрация</NavLink>
          </div>
          <div>
            <NavLink to="/auth/authorization">Авторизация</NavLink>
          </div>
        </>
      ) : (
        <>
          <div>
            <NavLink to="/presentations">Презентации</NavLink>
          </div>
          <div>
            <NavLink to="/videos">Видео</NavLink>
          </div>
          <div>
            <NavLink to="/students">Студенты</NavLink>
          </div>
          <div>
            <NavLink to="/student/profile">Профиль</NavLink>
          </div>
          <div>
            <NavLink to="" onClick={logout}>
              Выйти
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
