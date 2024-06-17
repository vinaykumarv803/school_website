import React from 'react'
import s from '../Parent/CoursesPar.module.css'
import SideBarPar from '../Parent/SideBarPar'

function ApplyLeave() {
  return (

    <>
    <SideBarPar/>
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