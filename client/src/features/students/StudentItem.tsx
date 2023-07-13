import { Student } from './types/student';

const StudentsItem = ({ student }: { student: Student }) => {
  return (
      <tr >
        <td>{student.id}</td>
        <td>{student.firstName}</td>
        <td>{student.lastName}</td>
        <td>{student.patronymic}</td>
        <td>{student.email}</td>
        <td>{student.telephone}</td>
        <td>{student.gitHub}</td>
      </tr>
  );
};

export default StudentsItem;
