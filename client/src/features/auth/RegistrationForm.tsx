import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { object, ref, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import openEye from './styles/images/open-eye.png';
import closedEye from './styles/images/closed-eye.png';
import {  Registr } from './types/auth';
import './styles/FormStyle.scss';
import { RootState, useAppDispatch } from '../../store';
import { registrStudent } from '../students/studentSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const schema = object().shape({
  lastName: string().required('Surname is required'),
  firstName: string().required('Name is required'),
  patronymic: string().required('Patronymic is required'),
  email: string().required('Email is required'),
  gitHub: string().required('Github account is required'),
  telephone:string().required('Telephone is required'),
  password: string()
    .required('Password is required')
    .min(8, 'Password length should be at least 8 characters')
    .max(25, 'Password cannot exceed more than 25 characters'),
  cpassword: string()
    .required('Confirm password is required')
    .min(8, 'Password length should be at least 8 characters')
    .max(25, 'Password cannot exceed more than 25 characters')
    .oneOf([ref('password')], 'Passwords do not match'),
});
const RegistrationForm = () => {
  const dispatch = useAppDispatch()
  const {student,message,error} = useSelector((store:RootState)=>store.student)
  const navigate = useNavigate()
  useEffect(()=>{
    if(student){
        navigate('/student/profile')
    }
        },[student])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Registr>({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);
  const onSubmit: SubmitHandler<Registr> = (data) =>dispatch(registrStudent(data));
  

  return (
    <div className="form__container">
    { message.length > 0  ?  <div className='form_message'>{message}</div>
    :
      <form className="form__body" onSubmit={handleSubmit(onSubmit)}>
      <h2>Регистрация</h2>
        <input
          className={errors.lastName && 'error'}
          {...register('lastName')}
          placeholder="Фамилия"
        />
        <span>{errors.lastName?.message}</span>
        <input {...register('firstName')} placeholder="Имя" />
        <span>{errors.firstName?.message}</span>
        <input {...register('patronymic')} placeholder="Отчество" />
        <span>{errors.patronymic?.message}</span>
        <input {...register('email')} placeholder="Электронная почта" />
        <span>{errors.email?.message}</span>
        <input {...register('telephone')} placeholder="Телефон" />
        <span>{errors.telephone?.message}</span>
            <label className="form__label-github">
              <input type="text" readOnly value={'https://github.com/'} />
              <input {...register('gitHub')} placeholder="Ваш аккаунт" />
            </label>
            <span>{errors.gitHub?.message}</span>
        <label htmlFor="">
          <input
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            placeholder="Пароль"
          />
          <img
            onClick={() => setShowPassword((prev) => !prev)}
            className="form__img-password"
            src={showPassword ? openEye : closedEye}
            alt="password eye"
          />
        </label>
        <span>{errors.password?.message}</span>
        <label htmlFor="">
          <input
            type={showCpassword ? 'text' : 'password'}
            {...register('cpassword')}
            placeholder="Повторный ввод пароля"
          />
          <img
            onClick={() => setShowCpassword((prev) => !prev)}
            className="form__img-cpassword"
            src={showCpassword ? openEye : closedEye}
            alt="password eye"
          />
        </label>
        {errors.cpassword && <span>{errors.cpassword?.message}</span>}
        {error && <div className='form_message'>{error}</div>}
        <button type="submit">Зарегистрироваться</button>
      </form>}
    </div>
  );
};

export default RegistrationForm;
