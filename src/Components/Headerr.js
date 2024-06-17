import React from "react";
import h from '../Components/Headerr.module.css'
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoSchoolSharp } from "react-icons/io5";

const Headerr = () => {
  return (
    <>
      <header className={h.header}>

   
      <IoSchoolSharp className={h.logo}/>
       
            <div className={h.eleDiv}>
             <Link to='/' style={{textDecoration:"none"}}><div className={h.elements}>HOME</div></Link>
             <Link to='/portfolio' style={{textDecoration:"none"}}><div className={h.elements} >PORTFOLIO</div></Link>
             <Link to='/contactus' style={{textDecoration:"none"}}><div className={h.elements}>CONTACT </div></Link> 
             <Link to='/online_admission' style={{textDecoration:"none"}}><div className={h.elements}>ADMISSION </div></Link> 
            </div>
          
        
           <Link to='/user'><FaUser  className={h.loginLogo}/></Link>   
          

      </header>
    </>
  );
};

export default Headerr;
