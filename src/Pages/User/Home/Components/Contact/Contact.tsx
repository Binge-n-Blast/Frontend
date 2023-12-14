import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h3>Send us a message</h3>
        <div className="main">
          <div className="form">
            <div className="left">
              <div>
                <input type="text" placeholder="Full name" autoComplete="off"/>
              </div>
              <div>
                <input type="text" placeholder="Phone number" autoComplete="off"/>
              </div>
              <div>
                <input type="text" placeholder="Email address" autoComplete="off"/>
              </div>
            </div>
            <div className="right">
              <textarea placeholder="Please enter your event details..." />
            </div>
          </div>
          <div className="button">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
