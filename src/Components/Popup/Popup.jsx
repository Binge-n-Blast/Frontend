import "./Popup.scss";

// MUi
import { Box, Modal } from "@mui/material";

//Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Reducers
import { handlePopupClose } from "../../Redux/Slices/Admin/popupSlice";

const Popup = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.popup.open);

  const handlePopupCloseModal = () => {
    dispatch(handlePopupClose());
  };

  return (
    <div className="popup">
      <Modal
        open={open}
        onClose={handlePopupCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="popup-box">
          <h2>Are you sure ?</h2>
          <div className="buttons">
            <button className="yes">Yes</button>
            <button className="no" onClick={handlePopupCloseModal}>
              No
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Popup;
