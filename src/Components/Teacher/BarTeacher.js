// Bar.js
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';

import { Link } from 'react-router-dom';
import s from './SideBar.module.css'
import { TbPointFilled } from "react-icons/tb";

export default function Bar({ open, onClose }) {
  const DrawerList = (
    <Box sx={{ width: 270 }} role="presentation" onClick={onClose} className={s.slideBox} >
      <List>
        <ListItem>
        <Link to='/online' className={s.Link}><div className={s.elements}><TbPointFilled style={{fontSize:"15px"}}/>&nbsp;Online Courses</div></Link>
        </ListItem>
      </List>

      <List>
        <ListItem>
        <Link to='/zoom-meet' className={s.Link}><div className={s.elements}><TbPointFilled style={{fontSize:"15px"}}/>&nbsp;Zoom meet classes</div></Link>
        </ListItem>
      </List>

      <List>
        <ListItem>
        <Link to='/class-time-table' className={s.Link}><div className={s.elements}><TbPointFilled style={{fontSize:"15px"}}/>&nbsp;Class time tables</div></Link>
        </ListItem>
      </List>

      <List>
        <ListItem>
        <Link to='/home-work' className={s.Link}><div className={s.elements}><TbPointFilled style={{fontSize:"15px"}}/>&nbsp;Home work</div></Link>
        </ListItem>
      </List>

      <List>
        <ListItem>
        <Link to='/apply-leave' className={s.Link}><div className={s.elements}><TbPointFilled style={{fontSize:"15px"}}/>&nbsp;Apply Leave</div></Link>
        </ListItem>
      </List>

      <List>
        <ListItem>
        <Link to='/notice-board' className={s.Link}><div className={s.elements}><TbPointFilled style={{fontSize:"15px"}}/>&nbsp;Notice Board</div></Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer open={open} onClose={onClose}>
      {DrawerList}
    </Drawer>
  );
}
