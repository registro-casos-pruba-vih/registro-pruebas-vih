'use client'

import React, { useState, MouseEvent } from 'react'
import { AppBar, Avatar, Box, Container, IconButton, Menu, MenuItem, Toolbar } from '@mui/material'

import styles from './layout.module.css'

const Layout = ({children}: {children: React.ReactNode}) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <div>
        <AppBar 
            position="static"
            className={styles.app}    
        >
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}/>
                <IconButton edge="end" onClick={handleMenu} color="inherit">
                    <Avatar
                        alt = "Profile Picture"
                        src="https://via.placeholder.com/40"
                        className={styles.avatar}
                    />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
        {children}
    </div>
  )
}

export default Layout