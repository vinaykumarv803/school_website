import React from 'react'
import s from '../Teacher/OnlineCourses.module.css'
import SideBar from './SideBar'

function Exams() {
  return (
    <>
    <SideBar/>
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