import { Route, Routes } from 'react-router-dom';
import RegistrationForm from '../features/auth/RegistrationForm';
import ProfileStudent from '../features/students/ProfileStudent';
import StudentsList from '../features/students/StudentsList';
import LoginForm from '../features/auth/LoginForm';
import { useEffect } from 'react';
import { useAppDispatch } from '../store';
import { verificationStudent } from '../features/students/studentSlice';
import Navbar from '../features/navbar/Navbar';
import VideoPage from '../features/videos/VideoPage';
import PresentationList from '../features/presentations/PresentationList';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(verificationStudent());
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/auth/registr" element={<RegistrationForm />} />
        <Route path="/auth/login" element={<LoginForm />} />
        <Route path="/student" element={<StudentsList />} />
        <Route path="/student/profile" element={<ProfileStudent />} />
        <Route path="/presentations" element={<PresentationList />} />
        <Route path="/videos" element={<VideoPage />} />
      </Routes>
    </>
  );
}

export default App;
