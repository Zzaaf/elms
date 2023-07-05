import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormUpdateStudent from './FormUpdateStudent'
import FormAddDiploma from './FormAddDiploma'
import './styles/ProfileStyle.scss'

import { RootState } from '../../store'
import { GroupStudent } from './types/student'

const ProfileStudent = () => {
  const [openFormStudent,setOpenFormStudent] = useState(false)
  const [openFormDiploma,setOpenFormDiploma] = useState(false)
  const {student,diploma} = useSelector((store:RootState)=>store.student)
  return (
    <div className='profile'>
      <div className='container-box'>
        <div >
   {!openFormStudent && student ?   <><div><h3><p>Фамилия</p>{student.lastName}</h3><h3><p>Имя</p>{student.firstName}</h3><h3><p>Отчество</p>{student.patronymic}</h3></div>
        <div><h3><p>Почта</p>{student.email}</h3><h3><p>GitHub</p>{student.gitHub}</h3></div>
        <div>
         { student.GroupStudents.map((group:GroupStudent)=><div key={group.id}>
          phase:{group.Phase.name}
         name:{ group.Group.name}
         status:{group.status}
         </div>)}
        </div>
        <p onClick={()=>setOpenFormStudent(true)}>Изменить личные данные</p>
        </> 
        : <FormUpdateStudent setOpenFormStudent={()=>setOpenFormStudent(false)} student={student}/>}
      {diploma && (!openFormDiploma ? <h3 onClick={()=>setOpenFormDiploma(true)}>Добавить данные по диплому </h3>
       : <FormAddDiploma setOpenFormDiploma={()=>setOpenFormDiploma(false)}/>)}
        </div>
       <div>
       <div>
        <img src={`http://localhost:4000/${student?.avatar}`} alt='avatar'/>
        </div>
       </div>
       </div>
    </div>
  )
}

export default ProfileStudent