import { useState } from 'react';
import {
    CssBaseline,
    Box,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppBar, Drawer, PageContainer } from '../../components/styles';
import Logout from '../Logout';
import SideBar from './SideBar';
import AdminProfile from './AdminProfile';
import AdminHomePage from './AdminHomePage';
import NightModeToggle from '../../components/NightModeToggle';

import AddStudent from './studentRelated/AddStudent';
import SeeComplains from './studentRelated/SeeComplains';
import ShowStudents from './studentRelated/ShowStudents';
import StudentAttendance from './studentRelated/StudentAttendance';
import StudentExamMarks from './studentRelated/StudentExamMarks';
import ViewStudent from './studentRelated/ViewStudent';

import AddNotice from './noticeRelated/AddNotice';
import ShowNotices from './noticeRelated/ShowNotices';

import ShowHostels from './hostelRelated/ShowHostels';
import HostelForm from './hostelRelated/HostelForm';
import ViewHostel from './hostelRelated/ViewHostel';

import AddWarden from './wardenRelated/AddWarden';
import ChooseBatch from './wardenRelated/ChooseBatch';
import ChooseHostel from './wardenRelated/ChooseHostel';
import ShowWardens from './wardenRelated/ShowWardens';
import WardenDetails from './wardenRelated/WardenDetails';

import AddBatch from './batchRelated/AddBatch';
import BatchDetails from './batchRelated/BatchDetails';
import ShowBatches from './batchRelated/ShowBatches';
import AccountMenu from '../../components/AccountMenu';

const AdminDashboard = () => {
    const [open, setOpen] = useState(false);
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
                                Admin Dashboard
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
                        backgroundColor: '#e2e8f0',
                        opacity: 0.6,
                    }} />
                    <List component="nav" sx={{ px: 1 }}>
                        <SideBar />
                    </List>
                </Drawer>
                <Box component="main" sx={styles.boxStyled}>
                    <Toolbar sx={{ minHeight: '70px' }} />
                    <Container maxWidth="xl" sx={{ py: 3 }}>
                        <Routes>
                            <Route path="/" element={<AdminHomePage />} />
                            <Route path='*' element={<Navigate to="/" />} />
                            <Route path="/Admin/dashboard" element={<AdminHomePage />} />
                            <Route path="/Admin/profile" element={<AdminProfile />} />
                            <Route path="/Admin/complains" element={<SeeComplains />} />

                            {/* Notice */}
                            <Route path="/Admin/addnotice" element={<AddNotice />} />
                            <Route path="/Admin/notices" element={<ShowNotices />} />

                            {/* Hostel */}
                            <Route path="/Admin/hostels" element={<ShowHostels />} />
                            <Route path="/Admin/hostels/hostel/:batchID/:hostelID" element={<ViewHostel />} />
                            <Route path="/Admin/hostels/choosebatch" element={<ChooseBatch situation="Hostel" />} />

                            <Route path="/Admin/addhostel/:id" element={<HostelForm />} />
                            <Route path="/Admin/batch/hostel/:batchID/:hostelID" element={<ViewHostel />} />

                            <Route path="/Admin/hostel/student/attendance/:studentID/:hostelID" element={<StudentAttendance situation="Hostel" />} />
                            <Route path="/Admin/hostel/student/marks/:studentID/:hostelID" element={<StudentExamMarks situation="Hostel" />} />

                            {/* Batch */}
                            <Route path="/Admin/addbatch" element={<AddBatch />} />
                            <Route path="/Admin/batches" element={<ShowBatches />} />
                            <Route path="/Admin/batches/batch/:id" element={<BatchDetails />} />
                            <Route path="/Admin/batch/addstudents/:id" element={<AddStudent situation="Batch" />} />

                            {/* Student */}
                            <Route path="/Admin/addstudents" element={<AddStudent situation="Student" />} />
                            <Route path="/Admin/students" element={<ShowStudents />} />
                            <Route path="/Admin/students/student/:id" element={<ViewStudent />} />
                            <Route path="/Admin/students/student/attendance/:id" element={<StudentAttendance situation="Student" />} />
                            <Route path="/Admin/students/student/marks/:id" element={<StudentExamMarks situation="Student" />} />

                            {/* Warden */}
                            <Route path="/Admin/wardens" element={<ShowWardens />} />
                            <Route path="/Admin/wardens/warden/:id" element={<WardenDetails />} />
                            <Route path="/Admin/wardens/choosebatch" element={<ChooseBatch situation="Warden" />} />
                            <Route path="/Admin/wardens/choosehostel/:id" element={<ChooseHostel situation="Norm" />} />
                            <Route path="/Admin/wardens/choosehostel/:batchID/:wardenID" element={<ChooseHostel situation="Warden" />} />
                            <Route path="/Admin/wardens/addwarden/:id" element={<AddWarden />} />

                            <Route path="/logout" element={<Logout />} />
                        </Routes>
                    </Container>
                </Box>
            </Box>
        </>
    );
}

export default AdminDashboard

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