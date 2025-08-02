import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

// Base button with common modern styles
const BaseButton = styled(Button)({
  borderRadius: '12px',
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '0.875rem',
  padding: '10px 24px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  '&:active': {
    transform: 'translateY(0)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
    transition: 'left 0.5s ease-in-out',
  },
  '&:hover::before': {
    left: '100%',
  },
});

// Modern button variants
export const PrimaryButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: '#ffffff',
  '&:hover': {
    background: 'linear-gradient(135deg, #8b9ff8 0%, #8b5cf6 100%)',
    boxShadow: '0 10px 15px -3px rgba(102, 126, 234, 0.3), 0 4px 6px -2px rgba(102, 126, 234, 0.2)',
  },
});

export const SuccessButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  color: '#ffffff',
  '&:hover': {
    background: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
    boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.3), 0 4px 6px -2px rgba(16, 185, 129, 0.2)',
  },
});

export const WarningButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
  color: '#ffffff',
  '&:hover': {
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    boxShadow: '0 10px 15px -3px rgba(245, 158, 11, 0.3), 0 4px 6px -2px rgba(245, 158, 11, 0.2)',
  },
});

export const DangerButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
  color: '#ffffff',
  '&:hover': {
    background: 'linear-gradient(135deg, #f87171 0%, #ef4444 100%)',
    boxShadow: '0 10px 15px -3px rgba(239, 68, 68, 0.3), 0 4px 6px -2px rgba(239, 68, 68, 0.2)',
  },
});

export const InfoButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
  color: '#ffffff',
  '&:hover': {
    background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
    boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.2)',
  },
});

export const GhostButton = styled(BaseButton)({
  background: 'transparent',
  color: '#667eea',
  border: '2px solid #667eea',
  boxShadow: 'none',
  '&:hover': {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#ffffff',
    borderColor: '#667eea',
    boxShadow: '0 10px 15px -3px rgba(102, 126, 234, 0.3), 0 4px 6px -2px rgba(102, 126, 234, 0.2)',
  },
});

// Size variants
export const SmallButton = styled(BaseButton)({
  padding: '6px 16px',
  fontSize: '0.75rem',
});

export const LargeButton = styled(BaseButton)({
  padding: '14px 32px',
  fontSize: '1rem',
});

// Legacy button styles (updated with modern gradients)
export const RedButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
  color: '#ffffff',
  '&:hover': {
    background: 'linear-gradient(135deg, #f87171 0%, #ef4444 100%)',
    boxShadow: '0 10px 15px -3px rgba(239, 68, 68, 0.3), 0 4px 6px -2px rgba(239, 68, 68, 0.2)',
  },
});

export const BlackButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
  color: '#ffffff',
  '&:hover': {
    background: 'linear-gradient(135deg, #4b5563 0%, #374151 100%)',
    boxShadow: '0 10px 15px -3px rgba(55, 65, 81, 0.3), 0 4px 6px -2px rgba(55, 65, 81, 0.2)',
  },
});

export const DarkRedButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
  color: '#ffffff',
  '&:hover': {
    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    boxShadow: '0 10px 15px -3px rgba(220, 38, 38, 0.3), 0 4px 6px -2px rgba(220, 38, 38, 0.2)',
  },
});

export const BlueButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
  color: '#ffffff',
  '&:hover': {
    background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
    boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.2)',
  },
});

export const PurpleButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
  color: '#ffffff',
  '&:hover': {
    background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
    boxShadow: '0 10px 15px -3px rgba(139, 92, 246, 0.3), 0 4px 6px -2px rgba(139, 92, 246, 0.2)',
  },
});

export const LightPurpleButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
  color: '#ffffff',
  '&:hover': {
    background: 'linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%)',
    boxShadow: '0 10px 15px -3px rgba(167, 139, 250, 0.3), 0 4px 6px -2px rgba(167, 139, 250, 0.2)',
  },
});

export const GreenButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  color: '#ffffff',
  '&:hover': {
    background: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
    boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.3), 0 4px 6px -2px rgba(16, 185, 129, 0.2)',
  },
});

export const BrownButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #a16207 0%, #92400e 100%)',
  color: '#ffffff',
  '&:hover': {
    background: 'linear-gradient(135deg, #d97706 0%, #a16207 100%)',
    boxShadow: '0 10px 15px -3px rgba(161, 98, 7, 0.3), 0 4px 6px -2px rgba(161, 98, 7, 0.2)',
  },
});

export const IndigoButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
  color: '#ffffff',
  '&:hover': {
    background: 'linear-gradient(135deg, #818cf8 0%, #6366f1 100%)',
    boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.3), 0 4px 6px -2px rgba(99, 102, 241, 0.2)',
  },
});

// Button container for grouping buttons
export const ButtonContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
});
