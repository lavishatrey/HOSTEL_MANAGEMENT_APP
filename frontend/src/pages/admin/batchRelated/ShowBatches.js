import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Menu, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { getAllBatches } from '../../../redux/batchRelated/batchHandle';
import { deleteUser } from '../../../redux/userRelated/userHandle';
import { BlueButton } from '../../../components/buttonStyles';
import { ButtonContainer } from '../../../components/buttonStyles';
import TableTemplate from '../../../components/TableTemplate';
import Popup from '../../../components/Popup';
import DeleteConfirmationDialog from '../../../components/DeleteConfirmationDialog';

const ShowBatches = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const { batchesList, loading, error, getresponse } = useSelector((state) => state.batch);
  const { currentUser } = useSelector(state => state.user)

  const adminID = currentUser._id

  useEffect(() => {
    dispatch(getAllBatches(adminID, "Batch"));
  }, [adminID, dispatch]);

  if (error) {
    console.log(error)
  }

  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const deleteHandler = (deleteID, address) => {
    setItemToDelete({ id: deleteID, address });
    setDeleteDialogOpen(true);
  }

  const confirmDelete = () => {
    if (!itemToDelete) return;
    
    dispatch(deleteUser(itemToDelete.id, itemToDelete.address))
      .then(() => {
        dispatch(getAllBatches(adminID, "Batch"));
        setMessage("Batch deleted successfully!");
        setShowPopup(true);
        setDeleteDialogOpen(false);
        setItemToDelete(null);
      })
      .catch((error) => {
        setMessage("Failed to delete batch. Please try again.");
        setShowPopup(true);
        setDeleteDialogOpen(false);
        setItemToDelete(null);
      });
  }

  const cancelDelete = () => {
    setDeleteDialogOpen(false);
    setItemToDelete(null);
  }

  const batchColumns = [
    { id: 'name', label: 'Batch Name', minWidth: 170 },
  ]

  const batchRows = batchesList && batchesList.length > 0 && batchesList.map((batch) => {
    return {
      name: batch.batchName,
      id: batch._id,
    };
  })

  const BatchButtonHaver = ({ row }) => {
    const actions = [
      { icon: <PostAddIcon />, name: 'Add Hostels', action: () => navigate("/Admin/addhostel/" + row.id) },
      { icon: <PersonAddAlt1Icon />, name: 'Add Student', action: () => navigate("/Admin/batch/addstudents/" + row.id) },
    ];
    return (
      <ButtonContainer>
        <IconButton 
          onClick={() => deleteHandler(row.id, "Batch")} 
          color="secondary"
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
            },
          }}
        >
          <DeleteIcon color="error" />
        </IconButton>
        <BlueButton variant="contained"
          onClick={() => navigate("/Admin/batches/batch/" + row.id)}>
          View
        </BlueButton>
        <ActionMenu actions={actions} />
      </ButtonContainer>
    );
  };

  const ActionMenu = ({ actions }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <PostAddIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          {actions.map((action, index) => (
            <MenuItem key={index} onClick={action.action}>
              {action.icon}
              <span style={{ marginLeft: '8px' }}>{action.name}</span>
            </MenuItem>
          ))}
        </Menu>
      </>
    );
  };

  return (
    <>
      <TableTemplate buttonHaver={BatchButtonHaver} columns={batchColumns} rows={batchRows} />
      <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
      <DeleteConfirmationDialog
        open={deleteDialogOpen}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
        title="Delete Batch"
        message="Are you sure you want to delete this batch? This will also delete all associated students, hostels, and wardens."
        itemName="batch"
      />
    </>
  )
}

export default ShowBatches