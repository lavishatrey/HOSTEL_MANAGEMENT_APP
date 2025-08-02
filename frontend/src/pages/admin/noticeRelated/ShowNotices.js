import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { getAllNotices } from '../../../redux/noticeRelated/noticeHandle';
import { deleteUser } from '../../../redux/userRelated/userHandle';
import { BlueButton } from '../../../components/buttonStyles';
import TableTemplate from '../../../components/TableTemplate';
import SpeedDialTemplate from '../../../components/SpeedDialTemplate';
import Popup from '../../../components/Popup';

const ShowNotices = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const { noticesList, loading, error, getresponse } = useSelector((state) => state.notice);
    const { currentUser } = useSelector(state => state.user)

    const adminID = currentUser._id

    useEffect(() => {
        dispatch(getAllNotices(adminID, "Notice"));
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
                dispatch(getAllNotices(adminID, "Notice"));
                setMessage("Notice deleted successfully!");
                setShowPopup(true);
            })
            .catch((error) => {
                setMessage("Failed to delete notice. Please try again.");
                setShowPopup(true);
            });
    }

    const noticeColumns = [
        { id: 'title', label: 'Title', minWidth: 170 },
        { id: 'details', label: 'Details', minWidth: 200 },
        { id: 'date', label: 'Date', minWidth: 100 },
    ]

    const noticeRows = noticesList && noticesList.length > 0 && noticesList.map((notice) => {
        return {
            title: notice.title,
            details: notice.details,
            date: new Date(notice.date).toLocaleDateString(),
            id: notice._id,
        };
    })

    const NoticeButtonHaver = ({ row }) => {
        return (
            <>
                <IconButton 
                    onClick={() => deleteHandler(row.id, "Notice")}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        },
                    }}
                >
                    <DeleteIcon color="error" />
                </IconButton>
                <BlueButton variant="contained"
                    onClick={() => navigate("/Admin/notices/notice/" + row.id)}>
                    View
                </BlueButton>
            </>
        );
    };

    const actions = [
        {
            icon: <PostAddIcon color="primary" />, name: 'Add New Notice',
            action: () => navigate("/Admin/addnotice")
        },
        {
            icon: <DeleteIcon color="error" />, name: 'Delete All Notices',
            action: () => deleteHandler(currentUser._id, "Notices")
        }
    ];

    return (
        <>
            <TableTemplate buttonHaver={NoticeButtonHaver} columns={noticeColumns} rows={noticeRows} />
            <SpeedDialTemplate actions={actions} />
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </>
    );
};

export default ShowNotices