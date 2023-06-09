import { Diploma } from "./types/diploma";
import { Student } from "./types/student";



export const updateStudent = async (student: Student): Promise<Student> => {
  const res = await fetch(`http://localhost:4000/students/update/${student.id}`,{
    method: 'PUT',
    headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(student)
  });
  return res.json();
};

export const addDiplomaStudentFetch = async (diploma: Diploma): Promise<Diploma> => {
  const res = await fetch(`http://localhost:4000/students/diploma`,{
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(diploma)
  });
  return res.json();
};