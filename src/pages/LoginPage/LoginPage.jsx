import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    // Add mock authentication
    if (email && password) {
      console.log("Logged in:", { email, password });
      navigate("/home"); // Redirect to MainPage
    } else {
      alert("Please enter an email and a password.");
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">Login</h1>
        <form className="login__form" onSubmit={handleLogin}>
          <div className="login__form-container">
            <label className="login__form-label" htmlFor="email">
              Email:
            </label>
            <input
              className="login__form-input"
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="login__form-container">
            <label className="login__form-label" htmlFor="password">
              Password:
            </label>
            <input
              className="login__form-input"
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button className="login__button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
