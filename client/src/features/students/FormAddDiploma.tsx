
import { useForm, SubmitHandler } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Diploma } from './types/diploma';
import { useAppDispatch } from '../../store';
import { addDiplomaStudent } from './studentSlice';

const schema = object().shape({
  series: string().required('Заполните все поля'),
  number:string().required('Заполните все поля'),
    lastName:string().required('Заполните все поля'),
    firstName:string().required('Заполните все поля'),
    patronymic:string().required('Заполните все поля'),
    dateBirth:string().required('Заполните все поля'),
    snils:string().required('Заполните все поля'),
    citizenship:string().required('Заполните все поля'),
});

const FormAddDiploma = ({setOpenFormDiploma}:{setOpenFormDiploma:()=>void}) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Diploma>({
    defaultValues: {
    typeEducation: 'Высшее образование',
    sex:'Мужской',
    },
    resolver: yupResolver(schema),
  });


  const onSubmit: SubmitHandler<Diploma> = (data) =>{
    setOpenFormDiploma()
    dispatch(addDiplomaStudent(data))
  } 

  return (
    <div>
      <form  onSubmit={handleSubmit(onSubmit)}>
        <select {...register('typeEducation')}>
          <option value="Высшее образование">Высшее образование</option>
          <option value="Средне специальное образование">Средне специальное образование</option>
        </select>

        <span>{errors.series?.message}</span>
        <input
          {...register('series')}
          placeholder="Серия документа о образовании"
        />
        <span>{errors.number?.message}</span>
        <input {...register('number')} placeholder="Номер документа о образовании" />
  
        <span>{errors.lastName?.message}</span>
        <input {...register('lastName')} placeholder="Фамилия указанная в дипломе " />
      
        <span>{errors.firstName?.message}</span>
        <input {...register('firstName')} placeholder="Имя указанное в дипломе" />
        
        <span>{errors.patronymic?.message}</span>
        <input {...register('patronymic')} placeholder="Отчество указанное в дипломе" />
    
        <span>{errors.dateBirth?.message}</span>
        <input {...register('dateBirth')} placeholder="Дата рождения получателя" />

        <select {...register('sex')}>
          <option value="Мужской">Мужской</option>
          <option value="Женский">Женский</option>
        </select>
       
        <span>{errors.snils?.message}</span>
        <input {...register('snils')} placeholder="СНИЛС" />

        <span>{errors.citizenship?.message}</span>
        <input {...register('citizenship')} placeholder="Гражданство получателя (код страны по ОКСМ, РФ - 643)" />

        <button type="submit">Сохранить данные о дипломе</button>
      </form>
    </div>
  );
};

export default FormAddDiploma