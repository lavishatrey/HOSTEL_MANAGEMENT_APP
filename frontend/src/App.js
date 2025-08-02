import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as CustomThemeProvider } from './contexts/ThemeContext';
import Homepage from './pages/Homepage';
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import WardenDashboard from './pages/warden/WardenDashboard';
import LoginPage from './pages/LoginPage';
import AdminRegisterPage from './pages/admin/AdminRegisterPage';
import ChooseUser from './pages/ChooseUser';

// Create a modern theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
      light: '#8b9ff8',
      dark: '#5a6fd8',
    },
    secondary: {
      main: '#764ba2',
      light: '#a855f7',
      dark: '#6a4190',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
    },
    success: {
      main: '#10b981',
    },
    warning: {
      main: '#f59e0b',
    },
    error: {
      main: '#ef4444',
    },
    info: {
      main: '#3b82f6',
    },
  },
  typography: {
    fontFamily: 'Inter, Poppins, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 12,
          padding: '10px 24px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            '&:hover fieldset': {
              borderColor: '#667eea',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#667eea',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          border: '1px solid #e2e8f0',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

const App = () => {
  const { currentRole } = useSelector(state => state.user);

  return (
    <CustomThemeProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          {currentRole === null &&
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/choose" element={<ChooseUser visitor="normal" />} />
              <Route path="/chooseasguest" element={<ChooseUser visitor="guest" />} />

              <Route path="/Adminlogin" element={<LoginPage role="Admin" />} />
              <Route path="/Studentlogin" element={<LoginPage role="Student" />} />
              <Route path="/Wardenlogin" element={<LoginPage role="Warden" />} />

              <Route path="/Adminregister" element={<AdminRegisterPage />} />

              <Route path='*' element={<Navigate to="/" />} />
            </Routes>}

          {currentRole === "Admin" &&
            <>
              <AdminDashboard />
            </>
          }

          {currentRole === "Student" &&
            <>
              <StudentDashboard />
            </>
          }

          {currentRole === "Warden" &&
            <>
              <WardenDashboard />
            </>
          }
        </Router>
      </ThemeProvider>
    </CustomThemeProvider>
  )
}

export default App