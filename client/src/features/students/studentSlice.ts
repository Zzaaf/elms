
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/state';
import * as api from './api';
import { Student } from './types/student';
import { Diploma } from './types/diploma';
import { Login, Registr } from '../auth/types/auth';

const initialState: State = {
    error:'',
    diploma:null,
   student:null,
   students:[],
   message:''
};

export const registrStudent = createAsyncThunk('student/registr', (obj: Registr) =>
  api.registrStudentFetch(obj)
);
export const confirmationStudent = createAsyncThunk('student/confirmation', (str: string) =>
  api.confirmationStudentFetch(str)
);
export const loginStudent = createAsyncThunk('student/login', (obj: Login) =>
  api.loginStudentFetch(obj)
);
export const logoutStudent = createAsyncThunk('student/logout', () =>
  api.logoutStudentFetch()
);
export const verificationStudent = createAsyncThunk('student/verification', () =>
  api.verificationStudentFetch()
);
export const updateStudent = createAsyncThunk('student/update', (student: Student) =>
  api.updateStudentFetch(student)
);
export const addDiplomaStudent = createAsyncThunk('student/diploma', (diploma: Diploma) =>
  api.addDiplomaStudentFetch(diploma)
);
export const allStudents = createAsyncThunk('student/all', () =>
  api.allStudentsFetch()
);

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(registrStudent.fulfilled, (state, action) => {
      if(action.payload.message === 'successfully'){
        state.message = 'Вы успешно зарегистрировались пройдите на почту указанную при регистрации';
      }
      
    })
    .addCase(registrStudent.rejected, (state, action) => {
      state.error = action.error.message;
    })
    .addCase(loginStudent.fulfilled, (state, action) => {
      state.student = action.payload;
    })
    .addCase(loginStudent.rejected, (state, action) => {
      state.error = action.error.message;
    })
    .addCase(verificationStudent.fulfilled, (state, action) => {
      state.student = action.payload;
    })
    .addCase(verificationStudent.rejected, (state) => {
      state.error = '';
    })
    .addCase(logoutStudent.fulfilled, (state) => {
      state.student = null;
    })
    .addCase(logoutStudent.rejected, (state, action) => {
      state.error = action.error.message;
    })
    .addCase(updateStudent.fulfilled, (state, action) => {
       state.student = action.payload;
    })
     .addCase(updateStudent.rejected, (state, action) => {
       state.error = action.error.message;
    })
     .addCase(addDiplomaStudent.fulfilled, (state, action) => {
       state.diploma = action.payload;
    })
    .addCase(addDiplomaStudent.rejected, (state, action) => {
       state.error = action.error.message;
    })
    .addCase(allStudents.fulfilled, (state, action) => {
      state.students = action.payload;
   })
   .addCase(allStudents.rejected, (state, action) => {
      state.error = action.error.message;
   })
  },
});

export default studentSlice.reducer;
