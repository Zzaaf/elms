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
  const {student} = useSelector((store:RootState)=>store.studentSlice)
  return (
    <div className='profile'>
        <div>
   {!openFormStudent ?   <><div><p>{student.lastName}</p><p>{student.firstName}</p><p>{student.patronymic}</p></div>
        <div><p>{student.email}</p><p>{student.gitHub}</p></div>
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
      {student.Diploma.length === 0  && (!openFormDiploma ? <p onClick={()=>setOpenFormDiploma(true)}>Добавить данные по диплому </p>
       : <FormAddDiploma setOpenFormDiploma={()=>setOpenFormDiploma(false)}/>)}
        </div>
       <div>
       <div>
        <img src={student.avatar} alt='avatar'/>
        </div>
       </div>
    </div>
  )
}

export default ProfileStudent