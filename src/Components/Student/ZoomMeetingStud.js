import React from 'react'
import s from '../Admin/CoursesAdmn.module.css'
import { FaBars } from "react-icons/fa6";
import SideBarStud from './SideBarStud'
import { useState } from 'react';
import BarStud from './BarStud'

function ZoomMeeting() {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuClick = () =>{
    setDrawerOpen(true);
  };
  
  const handleDrawerClose = () =>{
    setDrawerOpen(false);
  };
  
  return (
    <>
    <div  className={s.mainContainer}>
    <div><SideBarStud/></div>
    <div className={s.childContainer}>
    <div className={s.titleDiv}>
    <FaBars onClick={ handleMenuClick} className={s.menuButton} />
   <BarStud open={drawerOpen} onClose={handleDrawerClose} />
     <h1>Zoom Meeting</h1></div>
    <div className={s.contentDiv}>Content</div>
    </div>
    </div>
    </>
  )
}

export default ZoomMeeting