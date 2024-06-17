import React from 'react'
import s from '../Admin/CoursesAdmn.module.css'
import { FaBars } from "react-icons/fa6";
import SideBar from './SideBar'
import { useState } from 'react';
import BarTeacher from '../Teacher/BarTeacher'
function HomeWork({onMenuClick}) {
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
    <div><SideBar/></div>
    <div className={s.childContainer}>
    <div className={s.titleDiv}>
    <FaBars onClick={ handleMenuClick} className={s.menuButton} />
    <BarTeacher open={drawerOpen} onClose={handleDrawerClose} />
    <h1>Home Work</h1></div>
    <div className={s.contentDiv}>Content</div>
    </div>
    </div>
    </>
  )
}

export default HomeWork