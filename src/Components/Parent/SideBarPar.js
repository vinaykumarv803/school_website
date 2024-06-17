import React from 'react'
import s from '../Admin/SideBarAdmn.module.css'
import { Link } from 'react-router-dom'
import { TbPointFilled } from "react-icons/tb";

function SideBar() {
  return (<>

    <div className={s.sidebar}>

      <div className={s.schoolTitle}><h1>Name of School</h1></div>

      <div className={s.eleContainer} >

        {/* <Link to='/online-parent'><div className={s.elements}>Online Courses</div></Link> */}
        <Link to='/zoom-meet-parent'  className={s.Link}><div className={s.elements}><TbPointFilled style={{fontSize:"15px"}}/>&nbsp; Online Meetings</div></Link>
        {/* <Link to='/class-time-table-parent'><div className={s.elements}>Class time tables</div></Link> */}
        {/* <Link to='/syllabus-parent'><div className={s.elements}>Syllabus</div></Link> */}
        {/* <Link to='/home-work-parent'><div className={s.elements}>Home work</div></Link> */}
        {/* <Link to='/apply-leave-parent'><div className={s.elements}>Apply Leave</div></Link> */}
        {/* <Link to='/exams-parent'><div className={s.elements}>Exams and Mock tests</div></Link> */}
        <Link to='/results-parent' className={s.Link}><div className={s.elements}><TbPointFilled style={{fontSize:"15px"}}/>&nbsp; Student Results</div></Link>
        <Link to='/notice-board-parent'  className={s.Link}><div className={s.elements}><TbPointFilled style={{fontSize:"15px"}}/>&nbsp; Notice Board</div></Link>
      </div>

    </div>
     <div className={s.pannelName}>Parent-Pannel</div>


     </>)
}

export default SideBar



/**
 *  <Link to='/online'> <div className={s.elements}><h4 className={s.eleText}>Online Courses</h4></div></Link>
      <Link to='/Zoom-meet'>  <div className={s.elements}><h4 className={s.eleText}>Zoom meet classes</h4></div></Link>
      <Link to='/class-timetable'> <div className={s.elements}><h4 className={s.eleText}>Class time tables</h4></div></Link>
      <Link to='/syllbus'><div className={s.elements}><h4 className={s.eleText}>Syllabus</h4></div></Link>

 */