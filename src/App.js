
import './App.css';
import AdminPage from './Components/AdminPage';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TeacherPage from './Components/TeacherPage';
import ParentPage from './Components/ParentPage';
import Portfolio from './Components/Portfolio';
import ContactUs from './Components/ContactUs';
import UserLogin from './Components/UserLogin';
import OnlineAdmission from './Components/OnlineAdmission';
import StudentHome from './Components/StudentHome';
import StudnetPage from './Components/StudentPage';
import TeacherHome from './Components/TeacherHome';
import OnlineCourses from './Components/Teacher/OnlineCourses.js'
import ZoomMeeting from './Components/Teacher/ZoomMeeting.js'
import SideBar from './Components/Teacher/SideBar.js';
import Syllbus from './Components/Teacher/Syllabus.js'
import ClassTimeTable from './Components/Teacher/ClassTimeTable.js'
import ApplyLeave from './Components/Teacher/ApplyLeave.js'
import Exams from './Components/Teacher/Exams.js'
import Results from './Components/Teacher/Results.js'
import NoticeBord from './Components/Teacher/NoticeBord.js'
import HomeWork from './Components/Teacher/HomeWork.js'

import ApplyLeaveAdmn from './Components/Admin/ApplyLeaveAdmn.js'
import CoursesAdmn from './Components/Admin/CoursesAdmn.js'
import ExamsAdmn from './Components/Admin/ExamsAdmn.js'
import HomeWorkAdmn from './Components/Admin/HomeWorkAdmn.js'
import NoticeBordAdmn from './Components/Admin/NoticeBordAdmn.js'
import ResultsAdmn from './Components/Admin/ResultsAdmn.js'
import SideBarAdmn from './Components/Admin/SideBarAdmn.js'
import SyllabusAdmn from './Components/Admin/SyllabusAdmn.js'
import TimeTableAdmn from './Components/Admin/TimeTableAdmn.js'
import ZoomMeetingAdmn from './Components/Admin/ZoomMeetingAdmn.js'

import CoursesStud from './Components/Student/CoursesStud.js'
import ExamsStud from './Components/Student/ExamsStud.js'
import HomeWorkStud from './Components/Student/HomeWorkStud.js'
import NoticeBordStud from './Components/Student/NoticeBordStud.js'
import ResultsStud from './Components/Student/ResultsStud.js'
import SideBarStud from './Components/Student/SideBarStud.js'
import SyllabusStud from './Components/Student/SyllabusStud.js'
import TimeTableStud from './Components/Student/TimeTableStud.js'
import ZoomMeetingStud from './Components/Student/ZoomMeetingStud.js'
import ApplyLeaveStud from './Components/Student/ApplyLeaveStud.js'

import ExamsPar from './Components/Parent/ExamsPar.js'
import HomeWorkPar from './Components/Parent/HomeWorkPar.js'
import NoticeBordPar from './Components/Parent/NoticeBordPar.js'
import ResultsPar from './Components/Parent/ResultsPar.js'
import SideBarPar from './Components/Parent/SideBarPar.js'
import TimeTablePar from './Components/Parent/TimeTablePar.js'
import ZoomMeetingPar from './Components/Parent/ZoomMeetingPar.js'


import Headerr from './Components/Headerr.js'
import Home from './Components/HomePage/Home.js'


function App(){

  // const [drawerOpen, setDrawerOpen] = useState(false);

  // const handleMenuClick = () =>{
  //   setDrawerOpen(true);
  // };
  
  // const handleDrawerClose = () =>{
  //   setDrawerOpen(false);
  // };

  
  return (
    <>

      <BrowserRouter>

        {/* <Header /> */}

        <Headerr/>
       
    
        
      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/user' element={<UserLogin />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/teacher' element={<TeacherPage />} />
          <Route path='/parent' element={<ParentPage />} />
          <Route path='/online_admission' element={<OnlineAdmission />} />
          <Route path='/student_home_page' element={<StudentHome />} />
          <Route path='/student' element={<StudnetPage />} />
          <Route path='/Teacher_home_page' element={<TeacherHome/>} />
          
          <Route path='/SideBar' element={<SideBar />} />
          <Route path='/online' element={<OnlineCourses />} />
          <Route path='/zoom-meet' element={<ZoomMeeting />} />
          <Route path='/syllabus' element={<Syllbus/>} />
          <Route path='/apply-leave' element={<ApplyLeave  />} />
          <Route path='/class-time-table' element={<ClassTimeTable  />} />
          <Route path='/exams' element={<Exams  />} />
          <Route path='/results' element={<Results  />} />
          <Route path='/notice-board' element={<NoticeBord  />} />
          <Route path='/home-work' element={<HomeWork  />} />

          <Route path='/SideBarAdmn' element={<SideBarAdmn />} />
          <Route path='/online-admin' element={<CoursesAdmn />} />

          <Route path='/zoom-meet-admin' element={<ZoomMeetingAdmn  />} />

          <Route path='/syllabus-admin' element={<SyllabusAdmn/>} />
          <Route path='/apply-leave-admin' element={<ApplyLeaveAdmn/>} />
          <Route path='/class-time-table-admin' element={<TimeTableAdmn  />} />
          <Route path='/exams-admin' element={<ExamsAdmn/>} />
          <Route path='/results-admin' element={<ResultsAdmn/>} />
          <Route path='/notice-board-admin' element={<NoticeBordAdmn  />} />
          <Route path='/home-work-admin' element={<HomeWorkAdmn/>} />

          <Route path='/SideBarStud' element={<SideBarStud />} />
          <Route path='/online-student' element={<CoursesStud  />} />
          <Route path='/zoom-meet-student' element={<ZoomMeetingStud  />} />
          <Route path='/syllabus-student' element={<SyllabusStud/>} />
          <Route path='/apply-leave-student' element={<ApplyLeaveStud  />} />
          <Route path='/class-time-table-student' element={<TimeTableStud  />} />
          <Route path='/exams-student' element={<ExamsStud/>} />
          <Route path='/results-student' element={<ResultsStud/>} />
          <Route path='/notice-board-student' element={<NoticeBordStud  />} />
          <Route path='/home-work-student' element={<HomeWorkStud/>}  />

          <Route path='/SideBarPar' element={<SideBarPar />} />
          <Route path='/zoom-meet-parent' element={<ZoomMeetingPar   />} />
          <Route path='/class-time-table-parent' element={<TimeTablePar/>} />
          <Route path='/exams-parent' element={<ExamsPar/>} />
          <Route path='/results-parent' element={<ResultsPar  />} />
          <Route path='/notice-board-parent' element={<NoticeBordPar  />} />
          <Route path='/home-work-parent' element={<HomeWorkPar/>} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
