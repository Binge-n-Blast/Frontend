import "./Form.scss";
import toast from "react-hot-toast";

// MUi
import { Box, Modal } from "@mui/material";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  handleFormClose,
  setFormData,
  setEditItem,
} from "../../../../Redux/Slices/Admin/formSlice";
import {
  useAddCakeMutation,
  useEditCakeMutation,
} from "../../../../Redux/Api/Admin/adminSlice";

const Form = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.form.open);
  const title = useSelector((state) => state.form.title);
  const formData = useSelector((state) => state.form.formData);
  const isEdit = useSelector((state) => state.form.isEdit);

  console.log(isEdit);
  //Popup
  const handleCloseModal = () => {
    dispatch(handleFormClose());
    dispatch(setEditItem(false));
    dispatch(setFormData({ itemsName: "", details: "", price: "" }));
  };

  // Main
  const [addCake] = useAddCakeMutation();
  const [editCake] = useEditCakeMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addCake(formData);
    if (response.data) {
      toast.success("Added Successfully!");
      handleCloseModal();
      dispatch(setFormData({ itemsName: "", details: "", price: "" }));
      dispatch(setEditItem(false));
    }
    if (response.error) {
      toast.error(response.error.data.errors[0].message);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const response = await editCake(formData);
    if (response.data) {
      toast.success("Edited Successfully!");
      handleCloseModal();
      dispatch(
        setFormData({
          itemsName: "",
          details: "",
          price: "",
        })
      );
      dispatch(setEditItem(false));
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
              value={formData.itemsName}
              name="itemsName"
            />
            <input
              type="text"
              placeholder="Description"
              onChange={handleChange}
              value={formData.details}
              name="details"
            />
            <input
              type="text"
              placeholder="Price"
              onChange={handleChange}
              value={formData.price}
              name="price"
            />
            <input type="file" />
          </div>
          <div className="buttons" onClick={isEdit ? handleEdit : handleSubmit}>
            <button>{isEdit ? "Edit" : "Save"}</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Form;
