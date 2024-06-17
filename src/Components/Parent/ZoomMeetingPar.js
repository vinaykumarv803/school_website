import React from 'react'
import s from '../Admin/CoursesAdmn.module.css'
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import SideBarPar from '../Parent/SideBarPar'
import BarPar from './BarPar'
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
    <div className={s.mainContainer}>
        <div><SideBarPar /></div>
        <div className={s.childContainer}>
          <div className={s.titleDiv}>
          <FaBars onClick={ handleMenuClick} className={s.menuButton} />
            <BarPar open={drawerOpen} onClose={handleDrawerClose} />
            <h1>Online Meetings</h1>
          </div>
          <div className={s.contentDiv}>
            Content
          </div>
        </div>
      </div>
    </>
  )
}

export default ZoomMeeting