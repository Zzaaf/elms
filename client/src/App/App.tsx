import { Route, Routes } from 'react-router-dom';
import RegistrationForm from '../features/auth/RegistrationForm';
import ProfileStudent from '../features/students/ProfileStudent';
import StudentsList from '../features/students/StudentsList';

function App() {
  return (
    <>
      <Routes>
       <Route path='/auth/geristr' element={<RegistrationForm/>}/>
       <Route path='/student' element={<StudentsList/>}/>
       <Route path='/student/profile' element={<ProfileStudent/>}/>
      </Routes>
    </>
  );
}

export default App;
