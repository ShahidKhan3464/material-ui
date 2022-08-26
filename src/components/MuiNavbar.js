import React, { useState } from 'react'
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu'
import { KeyboardArrowDown } from '@mui/icons-material'

const MuiNavbar = () => {
    const [anchorEl, setAnchorEl] = useState()
    const open = Boolean(anchorEl)

    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='open drawer' >
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' sx={{ flexGrow: 1 }} >
                    Navbar
                </Typography>
                <Stack direction='row' spacing='2'>
                    <Button color='inherit'>Features</Button>
                    <Button color='inherit'>Contact us</Button>
                    <Button color='inherit'>About us</Button>
                    <Button
                        color='inherit'
                        id='resources-button'
                        endIcon={<KeyboardArrowDown />}
                        onClick={e => setAnchorEl(e.currentTarget)}
                        aria-controls={open ? 'resources-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                    >
                        Resources
                    </Button>
                </Stack>

                {/* MenuItems */}
                <Menu
                    id='resources-menu'
                    anchorEl={anchorEl}
                    open={open}
                    MenuListProps={{
                        'aria-labelledby': 'resources-button'
                    }}
                    onClose={() => setAnchorEl(null)}
                >
                    <MenuItem onClick={() => setAnchorEl(null)}>Blog</MenuItem>
                    <MenuItem onClick={() => setAnchorEl(null)}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default MuiNavbar