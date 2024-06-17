import React from 'react'
import s from '../Parent/CoursesPar.module.css'
import SideBarPar from '../Parent/SideBarPar'

function ClassTimeTable() {
  return (
    <>
    <SideBarPar/>
   <div  className={s.mainContainer}>
    <div className={s.titleDiv}> <h1>Class Time Tabel</h1></div>
    <div className={s.contentDiv}>
      Content
    </div>
    </div>
    </>
  )
}

export default ClassTimeTable