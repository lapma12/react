import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../Styles/RegisterPage.css";
import { useNavigate } from "react-router-dom"; // for navigation
import Register from "./RegisterPage";

function LoginPage() {
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // for navigation

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:3000/login", { userInput, password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  const goToRegisterPage = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    navigate("/register"); // Navigate to the registration page
  };

  const goToForgotPasswordPage = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    navigate("/forgot-password"); // Navigate to the forgot password page
  };

  return (
    <div className="register-page">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="register-container"
      >
        <div className="register-info">
          <h2>WELCOME BACK!</h2>
          <p>
            Step back into the adventure! Your journey is far from over, and we're thrilled to have you with us. Every decision still matters, and new quests, competitions, and challenges await!
          </p>
          <p>
            Simply log in to continue your adventure, reconnect with your friends, and explore the endless possibilities this world has to offer.
          </p>
          <p>
            🔑 <strong>Log in now</strong> and continue where you left off. Your next great adventure is just a click away!
          </p>
        </div>

        <div class="register-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username or Email</label>
              <input
                type="text"
                placeholder="Enter username or email"
                onChange={(e) => setUserInput(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="links">
            <p>

              <a
                href={Register}
                target="#" onClick={goToRegisterPage} className="link-style">
                Don't have an account?{" "}
              </a>
            </p>
            <p className="login-link">
              <a
                href={Register}
                target="#" onClick={goToForgotPasswordPage} className="link-style">
                Forgot Password
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default LoginPage;
