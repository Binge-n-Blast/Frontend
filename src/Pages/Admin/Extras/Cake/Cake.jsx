import "./Cake.scss";
import toast from "react-hot-toast";

// Components
import Navbar from "../../../../Components/Admin/Navbar/Navbar";
import Form from "../Form/Form";

// Images
import cake from "../../../../Components/Admin/Sidebar/Assets/cake.png";
import cakesImg1 from "../../../User/Theater/Assets/cakesImg1.png";
import deleteIcon from "./Assets/delete.png";

// Redux
import { useDispatch, useSelector } from "react-redux";

// State Slices
import {
  handleFormOpen,
  handlePath,
  handleFormTitle,
  getItemId,
  setEditItem,
  setFormData,
} from "../../../../Redux/Slices/Admin/formSlice";

// API Slices
import {
  useGetCakesQuery,
  useDeleteCakeMutation,
} from "../../../../Redux/Api/Admin/adminApiSlice";

const Cake = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.form.id);
  //API
  const { data, error, isLoading } = useGetCakesQuery();
  const [deleteCake] = useDeleteCakeMutation();

  const handleFormOpenModal = () => {
    dispatch(handleFormOpen());
    dispatch(handleFormTitle("Add new cake"));
    dispatch(handlePath(`${window.location.pathname}`));
  };

  const handleDelete = async (id) => {
    const response = await deleteCake(id);
    if (response.data) {
      toast.success("Deleted!");
    }
    if (response.error) {
      toast.error(response.error.data.errors[0].message);
    }
  };
  const handleEdit = (card) => {
    dispatch(handlePath(`${window.location.pathname}`));
    dispatch(handleFormTitle("Edit cake details"));
    dispatch(handleFormOpen());
    dispatch(setEditItem(true));
    dispatch(getItemId(card.uid));
    dispatch(
      setFormData({
        itemsName: card.itemsName,
        details: card.details,
        price: card.price,
      })
    );
  };
  return (
    <>
      <Form />
      <Navbar title="Cakes" image={cake} />

      <section className="cake">
        <div className="add">
          <button onClick={handleFormOpenModal}>Add New Cake!</button>
        </div>
        {isLoading ? (
          <div className="loading">
            <h1>Loading...</h1>
          </div>
        ) : (
          <div className="cards">
            {data && data.data.length === 0 ? (
              <h1 className="no-data">No Data!</h1>
            ) : (
              data.data.map((card) => {
                const { uid, price, itemsName, details } = card;
                return (
                  <div className="card" key={uid}>
                    <img
                      src={deleteIcon}
                      onClick={() => handleDelete(uid)}
                      className="delete"
                      alt=""
                    />
                    <img src={cakesImg1} alt="" className="cake-image" />
                    <div className="content">
                      <h4>{itemsName}</h4>
                      <p>{details}</p>
                      <div className="action">
                        <p>₹ {price}</p>
                        <button onClick={() => handleEdit(card)}>Edit</button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default Cake;
