import "./Login.scss";


const Login = () => {
  return (
    <>
     
      <section className="admin-login">
      <div className="red-blob"></div>
      <div className="blue-blob"></div>
        <h1>Login</h1>
        <form>
            <input type="text" placeholder="Email" autoComplete="off" />
            <input type="text" placeholder="Password" autoComplete="off" />
            <button>Submit</button>
        </form>
      </section>
    </>
  );
};

export default Login;
