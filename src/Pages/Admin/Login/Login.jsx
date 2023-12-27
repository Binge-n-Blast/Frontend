import { useState } from "react";
import "./Login.scss";
import { useAdminLoginMutation } from "../../../Redux/Api/Admin/authSlice";

const Login = () => {
  const [adminLogin, response] = useAdminLoginMutation();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    adminLogin(login);
    setLogin({
      email: "",
      password: "",
    });
  };


  return (
    <>
      <section className="admin-login">
        <div className="red-blob"></div>
        <div className="blue-blob"></div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            autoComplete="off"
            name="email"
            value={login.email}
            onChange={handleChange}
          />
          <input
            type="password"
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
