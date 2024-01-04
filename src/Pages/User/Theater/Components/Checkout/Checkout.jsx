import "./Checkout.scss";

// Icons
import { FaPlus, FaMinus } from "react-icons/fa";
import deleteImg from "../../../../../Assets/delete.png";

// Redux
import { useSelector, useDispatch } from "react-redux";

// State Slice
import {
  setCheckoutActive,
  setPrice,
} from "../../../../../Redux/Slices/User/checkoutSlice";

const Checkout = () => {
  const dispatch = useDispatch();

  const isCheckoutActive = useSelector(
    (state) => state.checkout.isCheckoutActive
  );
  const date = useSelector((state) => state.checkout.date);
  const slot = useSelector((state) => state.checkout.slot);
  const person = useSelector((state) => state.checkout.person);
  const price = useSelector((state) => state.checkout.price);

  const theater = useSelector((state) => state.checkout.theater);

  const handleCheckoutActive = () => {
    dispatch(setCheckoutActive(!isCheckoutActive));
  };

  if (parseInt(person) < 7) {
    dispatch(setPrice(parseInt(theater.price)));
  }

  if (parseInt(person) === 7) {
    dispatch(
      setPrice(parseInt(theater.price) + parseInt(theater.extraPersonCost))
    );
  }

  if (parseInt(person) === 8) {
    dispatch(
      setPrice(parseInt(theater.price) + parseInt(theater.extraPersonCost) * 2)
    );
  }
  if (parseInt(person) === 9) {
    dispatch(
      setPrice(parseInt(theater.price) + parseInt(theater.extraPersonCost) * 3)
    );
  }
  if (parseInt(person) === 10) {
    dispatch(
      setPrice(parseInt(theater.price) + parseInt(theater.extraPersonCost) * 4)
    );
  }

  return (
    <section className="checkout">
      {isCheckoutActive ? (
        <>
          <div className="top" onClick={handleCheckoutActive}>
            <h2>Booking Summary</h2>
            <FaMinus style={{ color: "white", cursor: "pointer" }} size={16} />
          </div>

          <div className="main">
            <div className="data">
              <h3>{theater.theaterName}</h3>
              <p>₹ {price}</p>
            </div>
            <div className="date">
              <p>
                Date:<span> {date}</span>
              </p>
              <p>
                Slot: <span> {slot}</span>
              </p>
              <p>
                People: <span> {person}</span>
              </p>
            </div>
            <hr />
          </div>

          <div className="rest">
            <h3>Event Decoration</h3>
            <div className="data">
              <p>Birthday</p>
              <p>
                ₹ 999{" "}
                <img
                  src={deleteImg}
                  alt=""
                  style={{ width: "12px", cursor: "pointer" }}
                />
              </p>
            </div>
            <hr />
          </div>

          <div className="rest">
            <h3>Cakes</h3>
            <div className="data">
              <p>Red Velvet</p>
              <p>
                ₹ 699{" "}
                <img
                  src={deleteImg}
                  alt=""
                  style={{ width: "12px", cursor: "pointer" }}
                />
              </p>
            </div>
            <hr />
          </div>

          <div className="rest">
            <h3>Add On’s</h3>
            <div className="data">
              <p>HDB Lights</p>
              <p>
                ₹ 699{" "}
                <img
                  src={deleteImg}
                  alt=""
                  style={{ width: "12px", cursor: "pointer" }}
                />
              </p>
            </div>
            <hr />
          </div>

          <div className="total">
            <h2>Grand Total</h2>
            <h2>₹ 3,397</h2>
          </div>

          <button>Proceed to checkout</button>
        </>
      ) : (
        <div className="top" onClick={handleCheckoutActive}>
          <h2>Booking Summary</h2>
          <FaPlus style={{ color: "white", cursor: "pointer" }} size={16} />
        </div>
      )}
    </section>
  );
};

export default Checkout;
