import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getAllHostels } from '../../../redux/hostelRelated/hostelHandle';
import { deleteUser } from '../../../redux/userRelated/userHandle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import {
    Paper, Box, IconButton,
} from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import TableTemplate from '../../../components/TableTemplate';
import { BlueButton, GreenButton } from '../../../components/buttonStyles';
import SpeedDialTemplate from '../../../components/SpeedDialTemplate';
import Popup from '../../../components/Popup';

const ShowHostels = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { hostelsList, loading, error, getresponse } = useSelector((state) => state.hostel);
    const { currentUser } = useSelector(state => state.user)

    const adminID = currentUser._id

    useEffect(() => {
        dispatch(getAllHostels(adminID, "AllHostels"));
    }, [adminID, dispatch]);

    if (error) {
        console.log(error);
    }

    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    const deleteHandler = (deleteID, address) => {
        console.log(deleteID);
        console.log(address);
        dispatch(deleteUser(deleteID, address))
            .then(() => {
                dispatch(getAllHostels(adminID, "AllHostels"));
                setMessage("Hostel deleted successfully!");
                setShowPopup(true);
            })
            .catch((error) => {
                setMessage("Failed to delete hostel. Please try again.");
                setShowPopup(true);
            });
    }

    const hostelColumns = [
        { id: 'subName', label: 'Hostel Name', minWidth: 170 },
        { id: 'sessions', label: 'Sessions', minWidth: 100 },
        { id: 'batchName', label: 'Batch', minWidth: 170 },
    ]

    const hostelRows = hostelsList && hostelsList.length > 0 && hostelsList.map((hostel) => {
        return {
            subName: hostel.subName,
            sessions: hostel.sessions,
            batchName: hostel.batchName?.batchName || 'N/A',
            batchID: hostel.batchName?._id || '',
            id: hostel._id,
        };
    })

    const HostelsButtonHaver = ({ row }) => {
        return (
            <>
                <IconButton 
                    onClick={() => deleteHandler(row.id, "Hostel")}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        },
                    }}
                >
                    <DeleteIcon color="error" />
                </IconButton>
                <BlueButton variant="contained"
                    onClick={() => navigate(`/Admin/hostels/hostel/${row.batchID}/${row.id}`)}>
                    View
                </BlueButton>
            </>
        );
    };

    const actions = [
        {
            icon: <PostAddIcon color="primary" />, name: 'Add New Hostel',
            action: () => navigate("/Admin/hostels/choosebatch")
        },
        {
            icon: <DeleteIcon color="error" />, name: 'Delete All Hostels',
            action: () => deleteHandler(currentUser._id, "Hostels")
        }
    ];

    return (
        <>
            {loading ?
                <div>Loading...</div>
                :
                <>
                    {getresponse ?
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                            <GreenButton variant="contained"
                                onClick={() => navigate("/Admin/hostels/choosebatch")}>
                                Add Hostels
                            </GreenButton>
                        </Box>
                        :
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            {Array.isArray(hostelsList) && hostelsList.length > 0 &&
                                <TableTemplate buttonHaver={HostelsButtonHaver} columns={hostelColumns} rows={hostelRows} />
                            }
                            <SpeedDialTemplate actions={actions} />
                        </Paper>
                    }
                </>
            }
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />

        </>
    );
};

export default ShowHostels;