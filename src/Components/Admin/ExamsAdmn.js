import React from 'react'
import s from '../Admin/CoursesAdmn.module.css'
import SideBarAdmn from './SideBarAdmn'

function Exams() {
  return (
    <>
    <SideBarAdmn/>
    <div  className={s.mainContainer}>
    <div className={s.titleDiv}> <h1>Exams</h1></div>
    <div className={s.contentDiv}>
      Content
    </div>
    </div>
    </>
  )
}

export default Exams