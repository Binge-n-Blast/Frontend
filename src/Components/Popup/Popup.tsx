import "./Popup.scss";
import { useState } from "react";

// MUi
import {Box,Modal} from "@mui/material";

const Popup = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="popup">
      <button onClick={handleOpen}>Open modal</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="popup-box">
          <h2>Are you sure ?</h2>
          <div className="buttons">
            <button className="yes">Yes</button>
            <button className="no"> No</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Popup;
