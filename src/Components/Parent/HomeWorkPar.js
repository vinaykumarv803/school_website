import React from 'react'
import s from '../Parent/CoursesPar.module.css'
import SideBarPar from '../Parent/SideBarPar'

function HomeWork() {
  return (
    <>
    <SideBarPar/>
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