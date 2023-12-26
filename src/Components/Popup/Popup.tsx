import "./Popup.scss";

// MUi
import { Box, Modal } from "@mui/material";

//Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Reducers
import { handleClose } from "../../Redux/Slices/Admin/popupSlice";
import { RootState } from "../../Redux/Store/store";

const Popup = () => {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.popup.open);

  const handleCloseModal = () => {
    dispatch(handleClose());
  };
  return (
    <div className="popup">
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="popup-box">
          <h2>Are you sure ?</h2>
          <div className="buttons">
            <button className="yes">Yes</button>
            <button className="no" onClick={handleCloseModal}> No</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Popup;
