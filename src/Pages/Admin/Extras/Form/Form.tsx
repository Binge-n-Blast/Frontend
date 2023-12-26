import "./Form.scss";
import { useState } from "react";

// MUi
import { Box, Modal } from "@mui/material";

const Form = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="form">
      <button onClick={handleOpen}>Open modal</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="form-box">
          <h2>Add new cake</h2>

          <div className="form">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Description" />
            <input type="text" placeholder="Price" />
            <input type="file" />
          </div>
          <div className="buttons">
            <button>Save</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Form;
