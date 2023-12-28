import "./Form.scss";
import { useState } from "react";
import toast from "react-hot-toast";

// MUi
import { Box, Modal } from "@mui/material";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { handleFormClose } from "../../../../Redux/Slices/Admin/formSlice";
import {
  useAddCakeMutation,
} from "../../../../Redux/Api/Admin/adminSlice";

const Form = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.form.open);
  const title = useSelector((state) => state.form.title);

  //Popup
  const handleCloseModal = () => {
    dispatch(handleFormClose());
  };

  // Main
  const [addCake] = useAddCakeMutation();

  const [item, setItem] = useState({
    itemsName: "",
    details: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addCake(item);
    if (response.data) {
      toast.success("Added Successfully!");
      handleCloseModal();
      setItem({
        itemsName: "",
        details: "",
        price: "",
      });
    }
    if (response.error) {
      toast.error(response.error.data.errors[0].message);
    }
  };

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
            <input
              type="text"
              placeholder="Name"
              onChange={handleChange}
              value={item.itemsName}
              name="itemsName"
            />
            <input
              type="text"
              placeholder="Description"
              onChange={handleChange}
              value={item.details}
              name="details"
            />
            <input
              type="text"
              placeholder="Price"
              onChange={handleChange}
              value={item.price}
              name="price"
            />
            <input type="file" />
          </div>
          <div className="buttons" onClick={handleSubmit}>
            <button>Save</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Form;
