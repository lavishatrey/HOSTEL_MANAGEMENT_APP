import React from 'react';
import { IconButton, Tooltip, Box } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';

const NightModeToggle = ({ sx = {} }) => {
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <Tooltip title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            <IconButton
                onClick={toggleDarkMode}
                sx={{
                    color: 'inherit',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    width: '40px',
                    height: '40px',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'scale(1.05)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    },
                    '&:active': {
                        transform: 'scale(0.95)',
                    },
                    ...sx,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.3s ease-in-out',
                        transform: isDarkMode ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                >
                    {isDarkMode ? (
                        <LightMode sx={{ fontSize: '20px' }} />
                    ) : (
                        <DarkMode sx={{ fontSize: '20px' }} />
                    )}
                </Box>
            </IconButton>
        </Tooltip>
    );
};

export default NightModeToggle; 