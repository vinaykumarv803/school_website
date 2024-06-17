import React from 'react'
import s from '../Student/SideBarStud.module.css'
import { Link } from 'react-router-dom'
import { TbPointFilled } from "react-icons/tb";

function SideBar() {
  return (<>

    <div className={s.sidebar}>

      <div className={s.schoolTitle}><h1>Name of School</h1></div>

      <div className={s.eleContainer}>

        <Link to='/online-student' className={s.Link}><div className={s.elements}><TbPointFilled style={{fontSize:"15px"}}/>&nbsp;Online Courses</div></Link>
        <Link to='/zoom-meet-student' className={s.Link}><div className={s.elements}><TbPointFilled style={{fontSize:"15px"}}/>&nbsp;Zoom meet classes</div></Link>
        <Link to='/class-time-table-student' className={s.Link}><div className={s.elements}><TbPointFilled style={{fontSize:"15px"}}/>&nbsp;Class time tables</div></Link>
        {/* <Link to='/syllabus-student' className={s.Link}><div className={s.elements}><TbPointFilled style={{fontSize:"15px"}}/>&nbsp;Syllabus</div></Link> */}
        <Link to='/home-work-student' className={s.Link}><div className={s.elements}><TbPointFilled style={{fontSize:"15px"}}/>&nbsp;Home work</div></Link>
        <Link to='/apply-leave-student' className={s.Link}><div className={s.elements}><TbPointFilled style={{fontSize:"15px"}}/>&nbsp;Apply Leave</div></Link>
        {/* <Link to='/exams-student' className={s.Link}><div className={s.elements}><TbPointFilled style={{fontSize:"15px"}}/>&nbsp;Exams and Mock tests</div></Link> */}
        {/* <Link to='/results-student' className={s.Link}><div className={s.elements}><TbPointFilled style={{fontSize:"15px"}}/>&nbsp;Results</div></Link> */}
        <Link to='/notice-board-student' className={s.Link}><div className={s.elements}><TbPointFilled style={{fontSize:"15px"}}/>&nbsp;Notice Board</div></Link>
      </div>

    </div>
     <div className={s.pannelName}>Student-Pannel</div>


     </>)
}

export default SideBar



/**
 *  <Link to='/online'> <div className={s.elements}><h4 className={s.eleText}>Online Courses</h4></div></Link>
      <Link to='/Zoom-meet'>  <div className={s.elements}><h4 className={s.eleText}>Zoom meet classes</h4></div></Link>
      <Link to='/class-timetable'> <div className={s.elements}><h4 className={s.eleText}>Class time tables</h4></div></Link>
      <Link to='/syllbus'><div className={s.elements}><h4 className={s.eleText}>Syllabus</h4></div></Link>

 */