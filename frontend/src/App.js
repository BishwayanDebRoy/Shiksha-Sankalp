import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Homepage from './pages/Homepage';
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import LoginPage from './pages/LoginPage';
import AdminRegisterPage from './pages/admin/AdminRegisterPage';
import ChooseUser from './pages/ChooseUser';
import User_signup from './pages/User_signup'; // Import the UserSignup component
import Chatbot from './pages/Chatbot';
import VideoChat from './pages/VideoChat';
import Calendar from './components/DemoApp';
import InternshipList from './pages/student/InternshipList'
import ScholarshipList from './pages/student/ScholarshipList'
import LoanList from './pages/student/LoanList'



//import "./App.css";

const App = () => {
  const { currentRole } = useSelector(state => state.user);

  // const isConnected = useHMSStore(selectIsConnectedToRoom);
  // const hmsActions = useHMSActions();

  // useEffect(() => {
  //   window.onunload = () => {
  //     if (isConnected) {
  //       hmsActions.leave();
  //     }
  //   };
  // }, [hmsActions, isConnected]);


  return (
    
    <Router>
      {currentRole === null &&
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/usersignup" element={<User_signup />} />
           {/* Added UserSignup route */}
           <Route path="/chatbot" element={<Chatbot />} />
           
           {/* <Route path="/videocall" element={<VideoChat />} />
           {isConnected ? (
        <>
          <Conference />
          <Footer />
        </>
      ) : (
        <JoinForm />
      )} */}


          <Route path="/choose" element={<ChooseUser visitor="normal" />} />
          <Route path="/chooseasguest" element={<ChooseUser visitor="guest" />} />

          <Route path="/Adminlogin" element={<LoginPage role="Admin" />} />
          <Route path="/Studentlogin" element={<LoginPage role="Student" />} />
          
          <Route path="/Teacherlogin" element={<LoginPage role="Teacher" />} />
          <Route path="/Student/internship" element={<InternshipList  />} />
                        <Route path="/Student/loan" element={<LoanList />} />
                        <Route path="/Student/scholarship" element={<ScholarshipList  />} />
                      

          <Route path="/Adminregister" element={<AdminRegisterPage />} />
          <Route path="/usersignup" element={<User_signup />} /> {/* Added UserSignup route */}

          <Route path='*' element={<Navigate to="/" />} />
        </Routes>}

      {currentRole === "Admin" &&
        <>
          <AdminDashboard />
        </>
      }

      {currentRole === "Student" &&
        <>
          <StudentDashboard />
        </>
      }

      {currentRole === "Teacher" &&
        <>
          <TeacherDashboard />
        </>
      }
    </Router>
  )
}

export default App