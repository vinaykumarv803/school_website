import React from 'react'
import s from '../Teacher/OnlineCourses.module.css'
import SideBar from './SideBar'

function Syllabus() {
  return (
    <>
    <SideBar/>
    <div  className={s.mainContainer}>
    <div className={s.titleDiv}> <h1>Syllabus</h1></div>
    <div className={s.contentDiv}>
      Content
    </div>
    </div>
    </>
  )
}

export default Syllabus