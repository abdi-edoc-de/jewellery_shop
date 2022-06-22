import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import {MdLogout} from "react-icons/md"
import Button from '@mui/material/Button'
import React, { useState } from 'react';
// import { useSession, signOut } from 'next-auth/react'
// import { useEffect, useState } from 'react'
// import { useRouter } from 'next/router'
// import {MdLineWeight} from ""

export default function ButtonAppBar() {
  const pages = ['Products', 'Pricing', 'Blog']
  

  // const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        {/* <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
        > */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            // onClick={backToHome}
          >
            Blog App (React Demo)
          </Typography>
          <>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Typography variant="h6" sx={{ margin: '5px' }}>
                "Abdi"
              </Typography>
              <Avatar
                name="profile"
                alt="Remy Sharp"
                
                // onClick={openProfile}
              />
              <MdLogout
                sx={{ mx: '10px' }}
                // onClick={logoutHandler}
              ></MdLogout>
            </>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
