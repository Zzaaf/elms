import {  Login, Message, Registr } from "../auth/types/auth";
import { Diploma } from "./types/diploma";
import { Student } from "./types/student";

export const registrStudentFetch = async (obj: Registr): Promise<Message> => {
  const res = await fetch(`http://localhost:4000/auth/registration`,{
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(obj)
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
 }
  return res.json();
};

export const confirmationStudentFetch = async (str: string): Promise<Message> => {
  const res = await fetch(`http://localhost:4000/auth/confirmation/${str}`,{
    method: 'PUT',
    headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
 }
  return res.json();
};

export const loginStudentFetch = async (obj: Login): Promise<Student> => {
  const res = await fetch(`http://localhost:4000/auth/login`,{
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(obj)
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
 }
  return res.json();
};
export const verificationStudentFetch = async (): Promise<Student> => {
  const res = await fetch(`http://localhost:4000/auth/verification`,{
    method: 'GET',
      credentials: 'include',
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
 }
  return res.json();
};
export const logoutStudentFetch = async (): Promise<Message> => {
  const res = await fetch(`http://localhost:4000/auth/logout`,{
    method: 'GET',
      credentials: 'include',
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
 }
  return res.json();
};

export const updateStudentFetch = async (student: Student): Promise<Student> => {
  const res = await fetch(`http://localhost:4000/students/update/${student.id}`,{
    method: 'PUT',
    headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(student)
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
 }
  return res.json();
};

export const addDiplomaStudentFetch = async (diploma: Diploma): Promise<Diploma> => {
  const res = await fetch(`http://localhost:4000/students/diploma`,{
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(diploma)
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
 }
  return res.json();
};

export const allStudentsFetch = async (): Promise<Student[]> => {
  const res = await fetch('http://localhost:4000/students/all');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
 }
  return res.json();
};