import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button, Typography, Paper } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { PrimaryButton, GhostButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0} sx={{ minHeight: '100vh' }}>
                <Grid item xs={12} md={6} sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                    
                    <Box sx={{ 
                        position: 'relative', 
                        zIndex: 1,
                        textAlign: 'center',
                        color: 'white',
                        p: 4,
                    }}>
                        <Typography 
                            variant="h2" 
                            sx={{ 
                                mb: 3,
                                fontWeight: 700,
                                textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            Hostel Management
                            <br />
                            System
                        </Typography>
                        <Typography 
                            variant="h5" 
                            sx={{ 
                                mb: 4,
                                opacity: 0.9,
                                fontWeight: 400,
                            }}
                        >
                            Streamline your hostel operations with our comprehensive management solution
                        </Typography>
                        <img 
                            src={Students} 
                            alt="students" 
                            style={{ 
                                width: '80%', 
                                maxWidth: '500px',
                                filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))',
                            }} 
                        />
                    </Box>
                </Grid>
                
                <Grid item xs={12} md={6} sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#ffffff',
                    p: 4,
                }}>
                    <StyledPaper elevation={0}>
                        <Box sx={{ textAlign: 'center', mb: 6 }}>
                            <Typography 
                                variant="h3" 
                                sx={{ 
                                    mb: 2,
                                    fontWeight: 700,
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Welcome Back
                            </Typography>
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    color: '#64748b',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.6,
                                    maxWidth: '500px',
                                    mx: 'auto',
                                }}
                            >
                                Streamline Hostel management, class organization, and add students and faculty.
                                Seamlessly track attendance, assess performance, and provide feedback.
                                Access records, view marks, and communicate effortlessly.
                            </Typography>
                        </Box>
                        
                        <StyledBox>
                            <StyledLink to="/choose">
                                <PrimaryButton 
                                    variant="contained" 
                                    fullWidth
                                    sx={{ 
                                        py: 2,
                                        fontSize: '1.1rem',
                                        mb: 3,
                                    }}
                                >
                                    Get Started
                                </PrimaryButton>
                            </StyledLink>
                            
                            <Typography 
                                variant="body2" 
                                sx={{ 
                                    color: '#64748b',
                                    mb: 2,
                                }}
                            >
                                Don't have an account?{' '}
                                <StyledSignUpLink to="/Adminregister">
                                    Sign up
                                </StyledSignUpLink>
                            </Typography>
                            
                            <StyledLink to="/chooseasguest">
                                <GhostButton 
                                    variant="outlined" 
                                    fullWidth
                                    sx={{ 
                                        py: 1.5,
                                    }}
                                >
                                    Try as Guest
                                </GhostButton>
                            </StyledLink>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  max-width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
`;

const StyledPaper = styled(Paper)`
  padding: 48px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  max-width: 500px;
  width: 100%;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const StyledSignUpLink = styled(Link)`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease-in-out;
  
  &:hover {
    color: #764ba2;
    text-decoration: underline;
  }
`;
