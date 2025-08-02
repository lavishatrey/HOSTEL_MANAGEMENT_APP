import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
    IconButton,
} from '@mui/material';
import { Warning, Close } from '@mui/icons-material';
import { DangerButton, GhostButton } from './buttonStyles';

const DeleteConfirmationDialog = ({ open, onClose, onConfirm, title, message, itemName }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: '16px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                },
            }}
        >
            <DialogTitle sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                pb: 1,
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Warning sx={{ color: '#ef4444', fontSize: 28 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {title || 'Confirm Delete'}
                    </Typography>
                </Box>
                <IconButton
                    onClick={onClose}
                    sx={{
                        color: '#64748b',
                        '&:hover': {
                            backgroundColor: 'rgba(100, 116, 139, 0.1)',
                        },
                    }}
                >
                    <Close />
                </IconButton>
            </DialogTitle>
            
            <DialogContent sx={{ pt: 0 }}>
                <Typography variant="body1" sx={{ color: '#64748b', mb: 2 }}>
                    {message || `Are you sure you want to delete this ${itemName || 'item'}?`}
                </Typography>
                <Typography variant="body2" sx={{ color: '#94a3b8', fontStyle: 'italic' }}>
                    This action cannot be undone.
                </Typography>
            </DialogContent>
            
            <DialogActions sx={{ 
                px: 3, 
                pb: 3, 
                gap: 2,
                justifyContent: 'flex-end',
            }}>
                <GhostButton
                    onClick={onClose}
                    sx={{ px: 3, py: 1 }}
                >
                    Cancel
                </GhostButton>
                <DangerButton
                    onClick={onConfirm}
                    sx={{ px: 3, py: 1 }}
                >
                    Delete
                </DangerButton>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteConfirmationDialog; 