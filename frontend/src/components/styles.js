import {
    TableCell,
    TableRow,
    styled,
    tableCellClasses,
    Drawer as MuiDrawer,
    AppBar as MuiAppBar,
} from "@mui/material";

const drawerWidth = 280;

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#ffffff',
        fontWeight: 600,
        fontSize: '0.875rem',
        borderBottom: '2px solid #e2e8f0',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        padding: '16px 12px',
        borderBottom: '1px solid #f1f5f9',
        color: '#1e293b',
        transition: 'all 0.2s ease-in-out',
    },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#f8fafc',
        '&:hover': {
            backgroundColor: '#f1f5f9',
            transform: 'scale(1.01)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
    },
    '&:nth-of-type(even)': {
        backgroundColor: '#ffffff',
        '&:hover': {
            backgroundColor: '#f8fafc',
            transform: 'scale(1.01)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
    },
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            background: 'var(--color-bg-primary)',
            borderRight: '1px solid var(--color-border)',
            boxShadow: '4px 0 6px -1px rgba(0, 0, 0, 0.1), 2px 0 4px -1px rgba(0, 0, 0, 0.06)',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            overflowX: 'hidden',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
        '& .MuiListItemButton-root': {
            margin: '6px 12px',
            borderRadius: '12px',
            transition: 'all 0.2s ease-in-out',
            minHeight: '48px',
            '&:hover': {
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                transform: 'translateX(4px)',
            },
            '&.Mui-selected': {
                backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#ffffff',
                '&:hover': {
                    backgroundColor: 'linear-gradient(135deg, #8b9ff8 0%, #8b5cf6 100%)',
                    background: 'linear-gradient(135deg, #8b9ff8 0%, #8b5cf6 100%)',
                },
            },
        },
        '& .MuiListItemIcon-root': {
            minWidth: '48px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'inherit',
            '& .MuiSvgIcon-root': {
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
        '& .MuiListItemText-root': {
            margin: 0,
            '& .MuiTypography-root': {
                fontWeight: 500,
                fontSize: '0.875rem',
                lineHeight: 1.2,
            },
            '& .MuiListItemText-primary': {
                marginBottom: '2px',
            },
        },
        '& .MuiDivider-root': {
            margin: '16px 8px',
            backgroundColor: 'var(--color-border)',
        },
        '& .MuiListSubheader-root': {
            backgroundColor: 'transparent',
            color: 'var(--color-text-secondary)',
            fontWeight: 600,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            padding: '16px 16px 8px 16px',
            margin: 0,
            lineHeight: 1,
        },
    }),
);

// Additional styled components for better dashboard experience
export const DashboardCard = styled('div')(({ theme }) => ({
    background: 'var(--color-bg-primary)',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    border: '1px solid var(--color-border)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
}));

export const StatCard = styled('div')(({ theme, color = 'primary' }) => ({
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '16px',
    padding: '24px',
    color: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '-50%',
        right: '-50%',
        width: '100%',
        height: '100%',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        transform: 'rotate(45deg)',
    },
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 20px 25px -5px rgba(102, 126, 234, 0.3), 0 10px 10px -5px rgba(102, 126, 234, 0.2)',
    },
}));

export const PageContainer = styled('div')(({ theme }) => ({
    padding: '24px',
    background: 'var(--color-bg-primary)',
    minHeight: '100vh',
    '& > *': {
        marginBottom: '24px',
    },
}));

export const SectionTitle = styled('h2')(({ theme }) => ({
    fontSize: '1.5rem',
    fontWeight: 600,
    color: 'var(--color-text-primary)',
    marginBottom: '16px',
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-4px',
        left: 0,
        width: '40px',
        height: '3px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '2px',
    },
}));

export const ActionButton = styled('button')(({ theme, variant = 'primary' }) => ({
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    fontWeight: 500,
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    ...(variant === 'primary' && {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#ffffff',
        '&:hover': {
            background: 'linear-gradient(135deg, #8b9ff8 0%, #8b5cf6 100%)',
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 6px -1px rgba(102, 126, 234, 0.3)',
        },
    }),
    ...(variant === 'secondary' && {
        background: 'transparent',
        color: '#667eea',
        border: '2px solid #667eea',
        '&:hover': {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#ffffff',
            borderColor: '#667eea',
        },
    }),
    ...(variant === 'danger' && {
        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
        color: '#ffffff',
        '&:hover': {
            background: 'linear-gradient(135deg, #f87171 0%, #ef4444 100%)',
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 6px -1px rgba(239, 68, 68, 0.3)',
        },
    }),
}));