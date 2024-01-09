import "./Addon.scss";
import { toast } from "react-hot-toast";

// Components
import Navbar from "../../../../Components/Admin/Navbar/Navbar";
import Form from "../Form/Form";

// Images
import addon from "../../../../Assets/addon.png";
import deleteIcon from "../../../../Assets/delete.png";
import noImg from "../../../../Assets/noImg.jpg";

// Redux
import { useDispatch } from "react-redux";

// State Slice
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
  useDeleteAddonMutation,
  useGetAddonsQuery,
} from "../../../../Redux/Api/apiSlice";
import { HexToImage, separateHex } from "../../../../Utils/HexToImage";

const Addon = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetAddonsQuery();
  const [deleteAddon] = useDeleteAddonMutation();

  const handleFormOpenModal = () => {
    dispatch(handlePath(`${window.location.pathname}`));
    dispatch(handleFormOpen());
    dispatch(handleFormTitle("Add new addon"));
  };

  const handleDelete = async (id) => {
    const response = await deleteAddon(id);
    if (response.data) {
      toast.success("Deleted!");
    }
    if (response.error) {
      toast.error(response.error.data.errors[0].message);
    }
  };

  const handleEdit = (card) => {
    dispatch(handlePath(`${window.location.pathname}`));
    dispatch(handleFormTitle("Edit add-on details"));
    dispatch(handleFormOpen());
    dispatch(setEditItem(true));
    dispatch(getItemId(card.uid));
    dispatch(
      setFormData({
        itemsName: card.itemsName,
        details: card.details,
        price: card.price,
        uid: card.uid,
      })
    );
  };

  return (
    <>
      <Form />
      <Navbar title="Add ons" image={addon} />
      <section className="add-ons">
        <div className="add">
          <button onClick={handleFormOpenModal}>Add New Addon!</button>
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
              data &&
              data.data.map((card) => {
                const { uid, price, itemsName, details, imagesJsonArray } =
                  card;
                return (
                  <div className="card" key={uid}>
                    <img
                      src={deleteIcon}
                      onClick={() => handleDelete(uid)}
                      className="delete"
                      alt=""
                    />
                    {imagesJsonArray ? (
                      <HexToImage
                        styleName="cake-image"
                        hexValue={separateHex(imagesJsonArray.image)}
                      />
                    ) : (
                      <img src={noImg} alt="" className="cake-image" />
                    )}

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

export default Addon;
