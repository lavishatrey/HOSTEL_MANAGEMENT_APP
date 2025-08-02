import * as React from 'react';
import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Box
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import ReportIcon from '@mui/icons-material/Report';
import AssignmentIcon from '@mui/icons-material/Assignment';

const SideBar = () => {
  const location = useLocation();
  const { isDarkMode } = useTheme();

  const isActive = (path) => {
    if (path === "/" || path === "/Admin/dashboard") {
      return location.pathname === "/" || location.pathname === "/Admin/dashboard";
    }
    return location.pathname.startsWith(path);
  };

  const NavItem = ({ to, icon: Icon, text, description }) => {
    const active = isActive(to);
    return (
      <ListItemButton
        component={Link}
        to={to}
        sx={{
          px: 2,
          py: 1,
          my: '2px',
          borderRadius: '10px',
          backgroundColor: active
            ? (isDarkMode ? 'rgba(102, 126, 234, 0.15)' : 'rgba(102, 126, 234, 0.08)')
            : 'transparent',
          border: active
            ? `1px solid ${isDarkMode ? '#667eea44' : '#667eea22'}`
            : '1px solid transparent',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: active
              ? (isDarkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.12)')
              : (isDarkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)'),
            transform: 'translateX(3px)',
          },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 36,
            color: active ? '#667eea' : (isDarkMode ? '#cbd5e1' : '#64748b'),
          }}
        >
          <Icon fontSize="small" />
        </ListItemIcon>
        <ListItemText
          primary={text}
          secondary={description}
          primaryTypographyProps={{
            fontSize: '0.85rem',
            fontWeight: active ? 600 : 500,
            color: active
              ? (isDarkMode ? '#f1f5f9' : '#1e293b')
              : (isDarkMode ? '#cbd5e1' : '#334155'),
            lineHeight: 1.2,
          }}
          secondaryTypographyProps={{
            fontSize: '0.7rem',
            color: isDarkMode ? (active ? '#a5b4fc' : '#94a3b8') : (active ? '#667eea' : '#94a3b8'),
            lineHeight: 1.1,
          }}
        />
      </ListItemButton>
    );
  };

  return (
    <Box
      sx={{
        height: '100vh',
        maxWidth: '220px',
        minWidth: '180px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: isDarkMode
          ? 'linear-gradient(180deg, #232946 0%, #1e293b 100%)'
          : 'linear-gradient(180deg, #f8fafc 0%, #e0e7ff 100%)',
        boxShadow: isDarkMode
          ? '0 4px 24px rgba(30, 41, 59, 0.7)'
          : '0 4px 24px rgba(102, 126, 234, 0.12)',
        borderRadius: '16px',
        margin: '12px 8px',
        padding: '12px 0',
        backdropFilter: 'blur(6px)',
        border: isDarkMode ? '1px solid #334155' : '1px solid #e0e7ff',
        transition: 'all 0.3s',
      }}
    >
      <Box sx={{ flex: 1, py: 1 }}>
        <NavItem to="/" icon={HomeIcon} text="Dashboard" description="Overview and analytics" />
        <NavItem to="/Admin/batches" icon={ClassOutlinedIcon} text="Batches" description="Manage student batches" />
        <NavItem to="/Admin/hostels" icon={AssignmentIcon} text="Hostels" description="Hostel management" />
        <NavItem to="/Admin/wardens" icon={SupervisorAccountOutlinedIcon} text="Wardens" description="Warden administration" />
        <NavItem to="/Admin/students" icon={PersonOutlineIcon} text="Students" description="Student records" />
        <NavItem to="/Admin/notices" icon={AnnouncementOutlinedIcon} text="Notices" description="Announcements" />
        <NavItem to="/Admin/complains" icon={ReportIcon} text="Complaints" description="Student complaints" />
      </Box>
      <Box sx={{
        borderTop: isDarkMode
          ? '1px solid #475569'
          : '1px solid #e2e8f0',
        pt: 1,
      }}>
        <ListSubheader
          component="div"
          sx={{
            backgroundColor: 'transparent',
            color: isDarkMode ? '#f1f5f9' : '#64748b',
            fontWeight: 600,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            px: 2,
            pb: 0.5,
          }}
        >
          User Management
        </ListSubheader>
        <NavItem to="/Admin/profile" icon={AccountCircleOutlinedIcon} text="Profile" description="Your account settings" />
        <NavItem to="/logout" icon={ExitToAppIcon} text="Logout" description="Sign out of system" />
      </Box>
    </Box>
  );
};

export default SideBar;
