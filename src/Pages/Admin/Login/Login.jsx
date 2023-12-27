import { useState } from "react";
import "./Login.scss";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="admin-login">
        <div className="red-blob"></div>
        <div className="blue-blob"></div>
        <h1>Login</h1>
        <form>
          <input
            type="text"
            placeholder="Email"
            autoComplete="off"
            name="email"
            value={login.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            autoComplete="off"
            name="password"
            value={login.password}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      </section>
    </>
  );
};

export default Login;
