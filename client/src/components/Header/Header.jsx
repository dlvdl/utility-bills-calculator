import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

const generate = (element, eventListener) => {
  return ['Calculator', 'History', 'Settings'].map((value, i) => {
    return React.cloneElement(
      element,
      {
        key: i,
        onClick() {
          eventListener
        },
      },
      <Link to={`/${value.toLocaleLowerCase()}`}>{value}</Link>
    )
  })
}

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}
              color="secondary"
            >
              Utility app
            </Typography>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              variant="outlined"
              size="medium"
              color="secondary"
            >
              <MenuIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {generate(
                <MenuItem
                  sx={{
                    '&:hover': {
                      backgroundColor: 'grey',
                    },
                  }}
                />,
                handleClose
              )}
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  )
}

export default Header
