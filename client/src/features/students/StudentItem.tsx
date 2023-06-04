import React from 'react';
import { Student } from './types/types';

const StudentsItem = ({ student }: { student: Student }) => {
  return (
    <div className="studentsList__item">
      <span>{student.id}</span>
      <span>{student.lastName}</span>
      <span>{student.firstName}</span>
      <span>{student.patronymic}</span>
      <span>{student.email}</span>
      <span>{student.telephone}</span>
      <span>{student.gitHub}</span>
      <span>{student.status}</span>
    </div>
  );
};

export default StudentsItem;
