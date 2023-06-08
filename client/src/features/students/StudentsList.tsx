import React from 'react';
import StudentItem from './StudentItem';
import './styles/StudentsList.scss';
import { Student } from './types/types';

const students: Student[] = [
  {
    id: 1,
    firstName: 'Anya',
    lastName: 'Makarova',
    patronymic: 'Victorovna',
    email: 'a@a',
    gitHub: 'gitgitgit',
    status: 'true',
    avatar: 'https://ic.pics.livejournal.com/iglokott/37190182/1358256/1358256_original.jpg',
    telephone: '88888888888',
  },
  {
    id: 2,
    firstName: 'Anya',
    lastName: 'Makarova',
    patronymic: 'Victorovna',
    email: 'a@a',
    gitHub: 'gitgitgit',
    status: 'true',
    avatar: 'https://ic.pics.livejournal.com/iglokott/37190182/1358256/1358256_original.jpg',
    telephone: '88888888888',
  },
  {
    id: 3,
    firstName: 'Anya',
    lastName: 'Makarova',
    patronymic: 'Victorovna',
    email: 'a@a',
    gitHub: 'gitgitgit',
    status: 'true',
    avatar: 'https://ic.pics.livejournal.com/iglokott/37190182/1358256/1358256_original.jpg',
    telephone: '88888888888',
  },
  {
    id: 4,
    firstName: 'Sergey',
    lastName: 'Ivanov',
    patronymic: 'Petrovich',
    email: 's@s',
    gitHub: 'sergeyGit',
    status: 'true',
    avatar: 'https://example.com/avatar1.jpg',
    telephone: '77777777777',
  },
  {
    id: 5,
    firstName: 'Maria',
    lastName: 'Petrova',
    patronymic: 'Ivanovna',
    email: 'm@m',
    gitHub: 'mariaGit',
    status: 'true',
    avatar: 'https://example.com/avatar2.jpg',
    telephone: '66666666666',
  },
  {
    id: 6,
    firstName: 'Ivan',
    lastName: 'Sidorov',
    patronymic: 'Sergeevich',
    email: 'i@i',
    gitHub: 'ivanGit',
    status: 'true',
    avatar: 'https://example.com/avatar3.jpg',
    telephone: '55555555555',
  },
  {
    id: 7,
    firstName: 'Elena',
    lastName: 'Kuznetsova',
    patronymic: 'Alexeevna',
    email: 'e@e',
    gitHub: 'elenaGit',
    status: 'true',
    avatar: 'https://example.com/avatar4.jpg',
    telephone: '44444444444',
  },
  {
    id: 8,
    firstName: 'Alexey',
    lastName: 'Popov',
    patronymic: 'Mikhailovich',
    email: 'a@a',
    gitHub: 'alexeyGit',
    status: 'true',
    avatar: 'https://example.com/avatar5.jpg',
    telephone: '33333333333',
  },
];
const StudentsList = () => {
  return (
    <div className="studentsList__container">
      {students.map((student) => (
        <StudentItem key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentsList;
