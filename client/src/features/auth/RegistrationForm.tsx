import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { object, ref, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import openEye from './styles/images/open-eye.png';
import closedEye from './styles/images/closed-eye.png';
import { Inputs } from './types/Inputs';
import './styles/FormStyle.scss';

const schema = object().shape({
  surname: string().required('Surname is required'),
  name: string().required('Name is required'),
  patronymic: string().required('Patronymic is required'),
  email: string().required('Email is required'),
  github: string().required('Github account is required'),
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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      role: 'student',
    },
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="form__container">
      <form className="form__body" onSubmit={handleSubmit(onSubmit)}>
        <select {...register('role')}>
          <option value="student">Student</option>
          <option value="manager">Manager</option>
          <option value="mentor">Mentor</option>
        </select>
        <input
          className={errors.surname && 'error'}
          {...register('surname')}
          placeholder="Surname"
        />
        <span>{errors.surname?.message}</span>
        <input {...register('name')} placeholder="Name" />
        <span>{errors.name?.message}</span>
        <input {...register('patronymic')} placeholder="Patronymic" />
        <span>{errors.patronymic?.message}</span>
        <input {...register('email')} placeholder="Email" />
        <span>{errors.email?.message}</span>
        {watch('role') === 'student' && (
          <>
            <label className="form__label-github">
              <input type="text" readOnly value={'https://github.com/'} />
              <input {...register('github')} placeholder="Your account here" />
            </label>
            <span>{errors.github?.message}</span>
          </>
        )}
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
        <label htmlFor="">
          <input
            type={showCpassword ? 'text' : 'password'}
            {...register('cpassword')}
            placeholder="Confirm password"
          />
          <img
            onClick={() => setShowCpassword((prev) => !prev)}
            className="form__img-cpassword"
            src={showCpassword ? openEye : closedEye}
            alt="password eye"
          />
        </label>
        {errors.cpassword && <span>{errors.cpassword?.message}</span>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
