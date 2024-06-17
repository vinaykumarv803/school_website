import React from 'react'
import s from '../Student/CoursesStud.module.css'
import SideBarStud from './SideBarStud'

function Exams() {
  return (
    <>
    <SideBarStud/>
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