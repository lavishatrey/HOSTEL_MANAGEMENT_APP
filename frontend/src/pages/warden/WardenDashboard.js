import { useState } from 'react';
import {
    CssBaseline,
    Box,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import WardenSideBar from './WardenSideBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import WardenHomePage from './WardenHomePage';
import WardenProfile from './WardenProfile';
import WardenBatchDetails from './WardenBatchDetails';
import WardenViewStudent from './WardenViewStudent';
import WardenComplain from './WardenComplain';
import Logout from '../Logout'
import AccountMenu from '../../components/AccountMenu';
import NightModeToggle from '../../components/NightModeToggle';
import { AppBar, Drawer } from '../../components/styles';

const WardenDashboard = () => {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <Box sx={{ display: 'flex', minHeight: '100vh', background: 'var(--color-bg-primary)' }}>
                <CssBaseline />
                <AppBar open={open} position='fixed' elevation={0}>
                    <Toolbar sx={{ 
                        pr: '24px',
                        minHeight: '70px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleDrawer}
                                sx={{
                                    marginRight: '24px',
                                    ...(open && { display: 'none' }),
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        transform: 'scale(1.05)',
                                    },
                                    transition: 'all 0.2s ease-in-out',
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                component="h1"
                                variant="h5"
                                color="inherit"
                                noWrap
                                sx={{ 
                                    flexGrow: 1,
                                    fontWeight: 600,
                                    letterSpacing: '0.5px',
                                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                Warden Dashboard
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <NightModeToggle />
                            <AccountMenu />
                        </Box>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open} sx={open ? styles.drawerStyled : styles.hideDrawer}>
                    <Toolbar sx={styles.toolBarStyled}>
                        <IconButton 
                            onClick={toggleDrawer}
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                                    transform: 'scale(1.05)',
                                },
                                transition: 'all 0.2s ease-in-out',
                            }}
                        >
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider sx={{ 
                        my: 1,
                        backgroundColor: 'var(--color-border)',
                        opacity: 0.6,
                    }} />
                    <List component="nav" sx={{ px: 1 }}>
                        <WardenSideBar />
                    </List>
                </Drawer>
                <Box component="main" sx={styles.boxStyled}>
                    <Toolbar sx={{ minHeight: '70px' }} />
                    <Routes>
                        <Route path="/" element={<WardenHomePage />} />
                        <Route path='*' element={<Navigate to="/" />} />
                        <Route path="/Warden/dashboard" element={<WardenHomePage />} />
                        <Route path="/Warden/profile" element={<WardenProfile />} />

                        <Route path="/Warden/batchdetails" element={<WardenBatchDetails />} />
                        <Route path="/Warden/student/:id" element={<WardenViewStudent />} />
                        <Route path="/Warden/complain" element={<WardenComplain />} />

                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </Box>
            </Box>
        </>
    );
}

export default WardenDashboard

const styles = {
    boxStyled: {
        backgroundColor: 'var(--color-bg-primary)',
        flexGrow: 1,
        minHeight: '100vh',
        overflow: 'auto',
        background: 'linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%)',
    },
    toolBarStyled: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1],
        minHeight: '70px',
    },
    drawerStyled: {
        display: "flex",
        '& .MuiDrawer-paper': {
            borderRight: '1px solid var(--color-border)',
            boxShadow: '4px 0 6px -1px rgba(0, 0, 0, 0.1), 2px 0 4px -1px rgba(0, 0, 0, 0.06)',
        },
    },
    hideDrawer: {
        display: 'flex',
        '@media (max-width: 600px)': {
            display: 'none',
        },
    },
}