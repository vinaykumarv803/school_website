import React from 'react'
import SideBarAdmn from './SideBarAdmn'
import s from '../Admin/CoursesAdmn.module.css'
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import BarAdmin from '../Admin/BarAdmin'

function NoticeBord({onMenuClick}) {
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
        <div><SideBarAdmn /></div>
        <div className={s.childContainer}>
          <div className={s.titleDiv}> 
          <FaBars onClick={ handleMenuClick} className={s.menuButton} />
            <BarAdmin open={drawerOpen} onClose={handleDrawerClose} />
          <h1 className={s.titleText}>Notice Board</h1></div>
          <div className={s.contentDiv}>Content</div>
        </div>
      </div>
    </>
  )
}

export default NoticeBord