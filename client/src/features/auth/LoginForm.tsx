import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { object,  string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import openEye from './styles/images/open-eye.png';
import closedEye from './styles/images/closed-eye.png';
import {  Login } from './types/auth';
import './styles/FormStyle.scss';
import { RootState, useAppDispatch } from '../../store';
import { loginStudent } from '../students/studentSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const schema = object().shape({
  email: string().required('Email is required'),
  password: string()
    .required('Password is required')
    .min(8, 'Password length should be at least 8 characters')
    .max(25, 'Password cannot exceed more than 25 characters'),
});
const LoginForm = () => {
    const {student} = useSelector((store:RootState)=>store.student)
    const navigate = useNavigate()
    useEffect(()=>{
if(student){
    navigate('/student/profile')
}
    },[student])
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const onSubmit: SubmitHandler<Login> = (data) =>dispatch(loginStudent(data));
  

  return (
    <div className="form__container">
      <form className="form__body" onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} placeholder="Email" />
        <span>{errors.email?.message}</span>
        <label htmlFor="">
          <input
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            placeholder="Password"
          />
          <img
            onClick={() => setShowPassword((prev) => !prev)}
            className="form__img-password"
            src={showPassword ? openEye : closedEye}
            alt="password eye"
          />
        </label>
        <span>{errors.password?.message}</span>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;