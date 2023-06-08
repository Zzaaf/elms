
import { Student } from './types/student'
import { useForm, SubmitHandler } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '../../store';
import { updateStudent } from './studentSlice';


const schema = object().shape({
  firstName: string().required('Заполните все поля'),
  lastName: string().required('Заполните все поля'),
  patronymic: string().required('Заполните все поля'),
  email: string().required('Заполните все поля'),
  gitHub: string().required('Заполните все поля'),
  telephone:string().required('Заполните все поля')

});
const FormUpdateStudent = ({setOpenFormStudent,student}:{setOpenFormStudent:()=>void,student:Student}) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Student>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Student> = (data) =>{
   
    dispatch(updateStudent({...data,id:student.id}))
    setOpenFormStudent()
  }


  return (
    <div className="form__container">
      <form className="form__body" onSubmit={handleSubmit(onSubmit)}>

        <input {...register('firstName')} placeholder="Имя" defaultValue={student.firstName} />
        <span>{errors.firstName?.message}</span>

        <input {...register('lastName')} placeholder="Фамилия" defaultValue={student.lastName}/>
        <span>{errors.lastName?.message}</span>

        <input {...register('patronymic')} placeholder="Отчество" defaultValue={student.patronymic}/>
        <span>{errors.patronymic?.message}</span>

        <input {...register('email')} placeholder="Почта" defaultValue={student.email}/>
        <span>{errors.email?.message}</span>
       
        <input {...register('telephone')} placeholder="Телефон" defaultValue={student.telephone} />
        <span>{errors.telephone?.message}</span>

         <input {...register('gitHub')} placeholder="Your account here" defaultValue={student.gitHub}/>
         <span>{errors.gitHub?.message}</span>
         
    
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default FormUpdateStudent