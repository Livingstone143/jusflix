import React from 'react'
import { AppBar,IconButton,Toolbar,Drawer,Button,Avatar } from '@mui/material';
import { Menu,AccountCircle,Brightness4,Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import UseStyles from './styles.js';
const NavBar = () => {
  const classes=UseStyles();
  return (
    <>

      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>

        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar