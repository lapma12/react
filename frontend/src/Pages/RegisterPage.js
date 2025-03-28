import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../Styles/RegisterPage.css";
import { useNavigate } from "react-router-dom"; // for navigation
import LoginPage from "./LoginPage";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(); // for navigation

  function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    axios
      .post("http://localhost:3000/register", { username, email, password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  const goToLoginPage = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    navigate("/login"); // Navigate to the login page
  };

  return (
    <div className="register-page">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="register-form"
      >
        <h2>Registration</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
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

          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Register</button>
        </form>

        <div className="links">
        <p>
            
            <a
              href={LoginPage}
              target="#" onClick={goToLoginPage} className="link-style">
                Already have an account?
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;
