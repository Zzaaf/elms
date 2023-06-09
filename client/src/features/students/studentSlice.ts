
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/state';
import * as api from './students/api';
import { Student } from './types/student';
import { Diploma } from './types/diploma';

const initialState: State = {
    error:'',
    diploma:{},
   student:{
    "id": 2,
    "firstName": "Anya",
    "lastName": "Makarova",
    "patronymic": "Victorovna",
    "email": "a@a",
    "gitHub": "gitgitgit",
    "avatar": "https://ic.pics.livejournal.com/iglokott/37190182/1358256/1358256_original.jpg",
    "telephone": "88888888888",
    "GroupStudents": [
        {
            "id": 2,
            "studentId": 2,
            "groupId": 2,
            "phaseId": 2,
            "status": "pov",
            "Group": {
                "id": 2,
                "name": "fox",
                "typeDepartmentId": 2,
                "phaseId": 3,
                "startDate": "2023-05-03T15:22:52.518Z",
                "expirationDate": "2023-06-03T15:22:52.518Z"
            },
            "Phase": {
                "id": 2,
                "name": "1"
            }
        },
        {
            "id": 3,
            "studentId": 2,
            "groupId": 1,
            "phaseId": 2,
            "status": "idet",
            "Group": {
                "id": 1,
                "name": "cat",
                "typeDepartmentId": 2,
                "phaseId": 2,
                "startDate": "2023-06-03T15:22:52.518Z",
                "expirationDate": "2023-07-03T15:22:52.518Z"
            },
            "Phase": {
                "id": 2,
                "name": "1"
            }
        },
        {
            "id": 1,
            "studentId": 2,
            "groupId": 2,
            "phaseId": 1,
            "status": "go",
            "Group": {
                "id": 2,
                "name": "fox",
                "typeDepartmentId": 2,
                "phaseId": 3,
                "startDate": "2023-05-03T15:22:52.518Z",
                "expirationDate": "2023-06-03T15:22:52.518Z"
            },
            "Phase": {
                "id": 1,
                "name": "0"
            }
        }
    ]
}
};


export const updateStudent = createAsyncThunk('student/update', (student: Student) =>
  api.updateStudent(student)
);
export const addDiplomaStudent = createAsyncThunk('student/diploma', (diploma: Diploma) =>
  api.addDiplomaStudentFetch(diploma)
);

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
  },
});

export default studentSlice.reducer;
