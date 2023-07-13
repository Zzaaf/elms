import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FormUpdateStudent from './FormUpdateStudent';
import FormAddDiploma from './FormAddDiploma';
import './styles/ProfileStyle.scss';

import { RootState } from '../../store';
import { GroupStudent } from './types/student';

const ProfileStudent = () => {
  const [openFormStudent,setOpenFormStudent] = useState(false);
  const [openFormDiploma,setOpenFormDiploma] = useState(false);
  const {student,diploma} = useSelector((store:RootState)=>store.student);

  useEffect(() => {
    document.title = 'Профиль студента'
  }, []);

  return (
    <div className='profile'>
      <div>
        {!openFormStudent && student ? 
      <>
        <div className='profile__body'>
          <div className='profile__body-avatar'>
            <img src={`http://localhost:4000/${student?.avatar}`} alt='avatar'/>
          </div>
          <b>Имя:</b>
          <p>{student.lastName}</p>
          <b>Фамилия:</b>
          <p>{student.firstName}</p>
          <b>Отчество:</b>
          <p>{student.patronymic}</p>
          <b>Электронная почта:</b>
          <p>{student.email}</p>
          <b>Аккаунт GitHub:</b>
          <p>{student.gitHub}</p>

          <div>
            { student.GroupStudents.map((group:GroupStudent)=> <div key={group.id}>
            phase:{group.Phase.name}
            name:{ group.Group.name}
            status:{group.status}
            </div>)}
          </div>

          <button type='button' onClick={()=>setOpenFormStudent(true)}>Изменить личные данные</button>
        </div>
      </> 
        : <FormUpdateStudent setOpenFormStudent={()=>setOpenFormStudent(false)} student={student}/>}
          {diploma && (!openFormDiploma ? <p onClick={()=>setOpenFormDiploma(true)}>Добавить данные по диплому </p>
        : <FormAddDiploma setOpenFormDiploma={()=>setOpenFormDiploma(false)}/>)}
      </div>
    </div>
  )
}

export default ProfileStudent;