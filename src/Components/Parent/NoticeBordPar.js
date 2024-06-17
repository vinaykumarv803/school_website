import React from 'react'
import s from '../Admin/CoursesAdmn.module.css'
import { FaBars } from "react-icons/fa6";
import SideBarPar from '../Parent/SideBarPar'
import { useState } from 'react';
import BarPar from './BarPar'

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
        <div><SideBarPar /></div>
        <div className={s.childContainer}>
          <div className={s.titleDiv}>
            <FaBars onClick={ handleMenuClick} className={s.menuButton} />
            <BarPar open={drawerOpen} onClose={handleDrawerClose} />
            <h1>Notice Bord</h1>
          </div>
          <div className={s.contentDiv}>
            Content
          </div>
        </div>
      </div>
     </>
  )
}

export default NoticeBord