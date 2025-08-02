import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, Box, Typography, Paper, Checkbox, FormControlLabel, TextField, CssBaseline, IconButton, InputAdornment, CircularProgress, Backdrop, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import bgpic from "../assets/designlogin.jpg"
import { PrimaryButton, GhostButton } from '../components/buttonStyles';
import styled from 'styled-components';
import { loginUser } from '../redux/userRelated/userHandle';
import Popup from '../components/Popup';

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#667eea',
        },
        secondary: {
            main: '#764ba2',
        },
    },
    typography: {
        fontFamily: 'Inter, Poppins, sans-serif',
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
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
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    textTransform: 'none',
                    fontWeight: 600,
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: '#667eea',
                    '&.Mui-checked': {
                        color: '#667eea',
                    },
                },
            },
        },
    },
});

const LoginPage = ({ role }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { status, currentUser, response, error, currentRole } = useSelector(state => state.user);;

    const [toggle, setToggle] = useState(false)
    const [guestLoader, setGuestLoader] = useState(false)
    const [loader, setLoader] = useState(false)
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [rollNumberError, setRollNumberError] = useState(false);
    const [studentNameError, setStudentNameError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (role === "Student") {
            const rollNum = event.target.rollNumber.value;
            const studentName = event.target.studentName.value;
            const password = event.target.password.value;

            if (!rollNum || !studentName || !password) {
                if (!rollNum) setRollNumberError(true);
                if (!studentName) setStudentNameError(true);
                if (!password) setPasswordError(true);
                return;
            }
            const fields = { rollNum, studentName, password }
            setLoader(true)
            dispatch(loginUser(fields, role))
        }

        else {
            const email = event.target.email.value;
            const password = event.target.password.value;

            if (!email || !password) {
                if (!email) setEmailError(true);
                if (!password) setPasswordError(true);
                return;
            }

            const fields = { email, password }
            setLoader(true)
            dispatch(loginUser(fields, role))
        }
    };

    const handleInputChange = (event) => {
        const { name } = event.target;
        if (name === 'email') setEmailError(false);
        if (name === 'password') setPasswordError(false);
        if (name === 'rollNumber') setRollNumberError(false);
        if (name === 'studentName') setStudentNameError(false);
    };

    const guestModeHandler = () => {
        const password = "zxc"

        if (role === "Admin") {
            const email = "yogendra@12"
            const fields = { email, password }
            setGuestLoader(true)
            dispatch(loginUser(fields, role))
        }
        else if (role === "Student") {
            const rollNum = "1"
            const studentName = "Dipesh Awasthi"
            const fields = { rollNum, studentName, password }
            setGuestLoader(true)
            dispatch(loginUser(fields, role))
        }
        else if (role === "Warden") {
            const email = "tony@12"
            const fields = { email, password }
            setGuestLoader(true)
            dispatch(loginUser(fields, role))
        }
    }

    useEffect(() => {
        if (status === 'success' || currentUser !== null) {
            if (currentRole === 'Admin') {
                navigate('/Admin/dashboard');
            }
            else if (currentRole === 'Student') {
                navigate('/Student/dashboard');
            } else if (currentRole === 'Warden') {
                navigate('/Warden/dashboard');
            }
        }
        else if (status === 'failed') {
            setMessage(response)
            setShowPopup(true)
            setLoader(false)
        }
        else if (status === 'error') {
            setMessage("Network Error")
            setShowPopup(true)
            setLoader(false)
            setGuestLoader(false)
        }
    }, [status, currentRole, navigate, error, response, currentUser]);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ 
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
            }}>
                {/* Background Pattern */}
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'url("data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>")',
                    opacity: 0.3,
                    pointerEvents: 'none',
                }} />
                
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container sx={{ 
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        background: '#ffffff',
                        minHeight: '600px',
                    }}>
                        <Grid item xs={12} md={6} sx={{ 
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: '3rem',
                            background: '#ffffff',
                        }}>
                            <Box sx={{ textAlign: 'center', mb: 4 }}>
                                <Typography 
                                    variant="h3" 
                                    sx={{ 
                                        mb: 1,
                                        fontWeight: 700,
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    {role} Login
                                </Typography>
                                <Typography 
                                    variant="body1" 
                                    sx={{ 
                                        color: '#64748b',
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    Welcome back! Please enter your details
                                </Typography>
                            </Box>

                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
                                {role === "Student" ? (
                                    <>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="rollNumber"
                                            label="Enter your Roll Number"
                                            name="rollNumber"
                                            autoComplete="off"
                                            type="number"
                                            autoFocus
                                            error={rollNumberError}
                                            helperText={rollNumberError && 'Roll Number is required'}
                                            onChange={handleInputChange}
                                            sx={{ mb: 2 }}
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="studentName"
                                            label="Enter your name"
                                            name="studentName"
                                            autoComplete="name"
                                            error={studentNameError}
                                            helperText={studentNameError && 'Name is required'}
                                            onChange={handleInputChange}
                                            sx={{ mb: 2 }}
                                        />
                                    </>
                                ) : (
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Enter your email"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        error={emailError}
                                        helperText={emailError && 'Email is required'}
                                        onChange={handleInputChange}
                                        sx={{ mb: 2 }}
                                    />
                                )}
                                
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type={toggle ? 'text' : 'password'}
                                    id="password"
                                    autoComplete="current-password"
                                    error={passwordError}
                                    helperText={passwordError && 'Password is required'}
                                    onChange={handleInputChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton 
                                                    onClick={() => setToggle(!toggle)}
                                                    sx={{ color: '#667eea' }}
                                                >
                                                    {toggle ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{ mb: 2 }}
                                />
                                
                                <Grid container sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                                    <FormControlLabel
                                        control={<Checkbox value="remember" />}
                                        label="Remember me"
                                        sx={{ color: '#64748b' }}
                                    />
                                    <StyledLink href="#">
                                        Forgot password?
                                    </StyledLink>
                                </Grid>
                                
                                <PrimaryButton
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ 
                                        mt: 3, 
                                        mb: 2,
                                        py: 1.5,
                                        fontSize: '1rem',
                                    }}
                                    disabled={loader}
                                >
                                    {loader ? (
                                        <CircularProgress size={24} color="inherit" />
                                    ) : (
                                        "Sign In"
                                    )}
                                </PrimaryButton>
                                
                                {role === "Admin" && (
                                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                                        <Typography variant="body2" sx={{ color: '#64748b' }}>
                                            Don't have an account?{' '}
                                            <StyledLink to="/Adminregister">
                                                Sign up
                                            </StyledLink>
                                        </Typography>
                                    </Box>
                                )}
                                
                                <Box sx={{ textAlign: 'center', mt: 3 }}>
                                    <GhostButton
                                        onClick={guestModeHandler}
                                        disabled={guestLoader}
                                        sx={{ 
                                            px: 3,
                                            py: 1,
                                        }}
                                    >
                                        {guestLoader ? (
                                            <CircularProgress size={20} color="inherit" />
                                        ) : (
                                            "Guest Mode"
                                        )}
                                    </GhostButton>
                                </Box>
                            </Box>
                        </Grid>
                        
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                backgroundImage: `url(${bgpic})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)',
                                },
                            }}
                        />
                    </Grid>
                </Container>
                
                <Backdrop
                    sx={{ 
                        color: '#fff', 
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                        background: 'rgba(0, 0, 0, 0.8)',
                    }}
                    open={guestLoader}
                >
                    <Box sx={{ textAlign: 'center' }}>
                        <CircularProgress color="inherit" sx={{ mb: 2 }} />
                        <Typography variant="h6">Please Wait...</Typography>
                    </Box>
                </Backdrop>
                
                <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
            </Box>
        </ThemeProvider>
    );
}

export default LoginPage

const StyledLink = styled(Link)`
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease-in-out;
  
  &:hover {
    color: #764ba2;
    text-decoration: underline;
  }
`;
