import React from 'react'
import s from '../Admin/CoursesAdmn.module.css'
import SideBar from './SideBarAdmn'

function Results() {
  return (
    <>
    <SideBar/>
    <div  className={s.mainContainer}>
    <div className={s.titleDiv}> <h1>Results</h1></div>
    <div className={s.contentDiv}>
      Content
    </div>
    </div>
    </>
  )
}

export default Results