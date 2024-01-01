import "./Decoration.scss";

// Components
import Navbar from "../../../../Components/Admin/Navbar/Navbar";
import Form from "../Form/Form";

// Images
import decoration from "../../../../Components/Admin/Sidebar/Assets/decoration.png";
import eventImg1 from "../../../User/Theater/Assets/eventImg1.png";
import deleteIcon from "../Cake/Assets/delete.png";

// Redux
import { useDispatch } from "react-redux";

//State Slice
import {
  handleFormOpen,
  handleFormTitle,
  handlePath,
  getItemId,
  setEditItem,
  setFormData,
} from "../../../../Redux/Slices/Admin/formSlice";

//Api Slice
import {
  useGetDecorationsQuery,
  useDeleteDecorationMutation,
} from "../../../../Redux/Api/Admin/adminApiSlice";

const Decoration = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetDecorationsQuery();
  const [deleteDecoration] = useDeleteDecorationMutation();

  const handleFormOpenModal = () => {
    dispatch(handleFormOpen());
    dispatch(handleFormTitle("Add new decoration"));
    dispatch(handlePath(`${window.location.pathname}`));
  };

  const handleDelete = async (id) => {
    const response = await deleteDecoration(id);
    if (response.data) {
      toast.success("Deleted!");
    }
    if (response.error) {
      toast.error(response.error.data.errors[0].message);
    }
  };
  const handleEdit = (card) => {
    dispatch(handlePath(`${window.location.pathname}`));
    dispatch(handleFormTitle("Edit decoration details"));
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
      <Navbar title="Decorations" image={decoration} />
      <section className="decoration">
        <div className="add">
          <button onClick={handleFormOpenModal}>Add New Decoration!</button>
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
                    <img src={eventImg1} alt="" className="cake-image" />
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

export default Decoration;
