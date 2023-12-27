import "./Form.scss";
import { useEffect } from "react";

// MUi
import { Box, Modal } from "@mui/material";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  handleFormClose,
  handleFormTitle,
} from "../../../../Redux/Slices/Admin/formSlice";

import { RootState } from "../../../../Redux/Store/store";

const Form = () => {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.form.open);
  const title = useSelector((state: RootState) => state.form.title);

  const handleCloseModal = () => {
    dispatch(handleFormClose());
  };

  useEffect(() => {
    dispatch(handleFormTitle("Test"));
  }, []);
  return (
    <div className="form">
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="form-box">
          <h2>{title}</h2>

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
