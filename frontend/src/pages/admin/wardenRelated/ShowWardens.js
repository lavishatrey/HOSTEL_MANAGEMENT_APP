import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { getAllWardens } from '../../../redux/wardenRelated/wardenHandle';
import { deleteUser } from '../../../redux/userRelated/userHandle';
import { BlueButton } from '../../../components/buttonStyles';
import TableTemplate from '../../../components/TableTemplate';
import SpeedDialTemplate from '../../../components/SpeedDialTemplate';
import Popup from '../../../components/Popup';

const ShowWardens = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const { wardensList, loading, error, getresponse } = useSelector((state) => state.warden);
    const { currentUser } = useSelector(state => state.user)

    const adminID = currentUser._id

    useEffect(() => {
        dispatch(getAllWardens(adminID, "Warden"));
    }, [adminID, dispatch]);

    if (error) {
        console.log(error)
    }

    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    const deleteHandler = (deleteID, address) => {
        console.log(deleteID);
        console.log(address);
        dispatch(deleteUser(deleteID, address))
            .then(() => {
                dispatch(getAllWardens(adminID, "Warden"));
                setMessage("Warden deleted successfully!");
                setShowPopup(true);
            })
            .catch((error) => {
                setMessage("Failed to delete warden. Please try again.");
                setShowPopup(true);
            });
    }

    const wardenColumns = [
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'email', label: 'Email', minWidth: 100 },
        { id: 'phone', label: 'Phone', minWidth: 100 },
        { id: 'teachBatch', label: 'Batch', minWidth: 100 },
    ]

    const wardenRows = wardensList && wardensList.length > 0 && wardensList.map((warden) => {
        return {
            name: warden.name,
            email: warden.email,
            phone: warden.phone,
            teachBatch: warden.teachBatch?.batchName || 'N/A',
            id: warden._id,
        };
    })

    const WardenButtonHaver = ({ row }) => {
        return (
            <>
                <IconButton 
                    onClick={() => deleteHandler(row.id, "Warden")}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        },
                    }}
                >
                    <DeleteIcon color="error" />
                </IconButton>
                <BlueButton variant="contained"
                    onClick={() => navigate("/Admin/wardens/warden/" + row.id)}>
                    View
                </BlueButton>
            </>
        );
    };

    const actions = [
        {
            icon: <PersonAddAlt1Icon color="primary" />, name: 'Add New Warden',
            action: () => navigate("/Admin/wardens/choosebatch")
        },
        {
            icon: <DeleteIcon color="error" />, name: 'Delete All Wardens',
            action: () => deleteHandler(currentUser._id, "Wardens")
        }
    ];

    return (
        <>
            <TableTemplate buttonHaver={WardenButtonHaver} columns={wardenColumns} rows={wardenRows} />
            <SpeedDialTemplate actions={actions} />
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </>
    );
};

export default ShowWardens