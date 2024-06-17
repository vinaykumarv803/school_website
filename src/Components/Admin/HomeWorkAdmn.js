import React from 'react'
import s from '../Admin/CoursesAdmn.module.css'
import SideBar from './SideBarAdmn'

function HomeWork() {
  return (
    <>
    <SideBar/>
    <div  className={s.mainContainer}>
    <div className={s.titleDiv}> <h1>HomeWork</h1></div>
    <div className={s.contentDiv}>
      Content
    </div>
    </div>
    </>
  )
}

export default HomeWork