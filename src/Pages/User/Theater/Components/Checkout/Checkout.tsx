import "./Checkout.scss";
import { useState } from "react";

// Icons
import { FaPlus, FaMinus } from "react-icons/fa";

const Checkout = () => {
  const [active, setActive] = useState(false);
  const handleCheckoutActive = () => {
    setActive(!active);
    alert;
  };
  return (
    <section className="checkout">
      {active ? (
        <>
          <div className="top" onClick={handleCheckoutActive}>
            <h2>Booking Summary</h2>
            <FaMinus style={{ color: "white", cursor: "pointer" }} size={16} />
          </div>

          <div className="main">
            <div className="data">
              <h3>Blockbuster Bliss</h3>
              <p>₹ 1,999</p>
            </div>
            <div className="date">
              <p>20/12/2023</p>
            </div>
            <hr />
          </div>

          <div className="rest">
            <h3>Event Decoration</h3>
            <div className="data">
              <p>Birthday</p>
              <p>₹ 999</p>
            </div>
            <hr />
          </div>

          <div className="rest">
            <h3>Cakes</h3>
            <div className="data">
              <p>Red Velvet</p>
              <p>₹ 699</p>
            </div>
            <hr />
          </div>

          <div className="rest">
            <h3>Add On’s</h3>
            <div className="data">
              <p>HDB Lights</p>
              <p>₹ 699</p>
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
