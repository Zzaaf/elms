import { useEffect } from 'react';
import StudentItem from './StudentItem';
import './styles/StudentsList.scss';
import { RootState, useAppDispatch } from '../../store';
import { allStudents } from './studentSlice';
import { useSelector } from 'react-redux';


const StudentsList = () => {
  const dispatch= useAppDispatch()
  const {students} = useSelector((store:RootState)=>store.student)
  useEffect(()=>{
    dispatch(allStudents())
    document.title = "Список всех студентов";
  },[])
  return (
    <div className="studentsList__container">
      <div className='table'>
    <tr>
    <th>Уникальный номер</th>
    <th>Фамилия</th>
    <th>Имя</th>
    <th>Отчество</th>
    <th>Почта</th>
    <th>Телефон</th>
    <th>gitHub</th>
   </tr>
      {students.map((student) => (
        <StudentItem key={student.id} student={student} />
      ))}
      </div>
    </div>
  );
};

export default StudentsList;
