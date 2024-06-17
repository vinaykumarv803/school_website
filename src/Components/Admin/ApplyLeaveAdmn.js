import React from 'react'
import s from '../Admin/CoursesAdmn.module.css'
import SideBar from './SideBarAdmn'

function ApplyLeave() {
  return (

    <>
    <SideBar/>
    <div  className={s.mainContainer}>
    <div className={s.titleDiv}> <h1>Apply Leave</h1></div>
    <div className={s.contentDiv}>
      Content
    </div>
    </div>
    </>
  )
}

export default ApplyLeave