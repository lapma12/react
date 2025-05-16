import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../Styles/RegisterPage.css";
import { useNavigate } from "react-router-dom"; // for navigation

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

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
    event.preventDefault();
    navigate("/login");
  };

  return (
    <div className="register-page">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="register-container"
      >
        {/* Info section - page introduction */}
        <div className="register-info">
          <h2>WELCOME!!!</h2>
          <p>
            Step through the door to a new world, where every decision matters! Our <strong>community</strong> is not just a game — it's an experience shaped by you.
          </p>
          <p>
            Create your character, join others, and embark on your own journey through a fantastic world filled with quests, competitions, and challenges!
          </p>
          <p>
            🌟 <strong>Register now</strong>, and be part of something big. A world awaits you — you're just one click away!
          </p>
        </div>

        {/* Registration form */}
        <div className="register-form">
          <h2>Create new account</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username</label>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit">Register</button>
          </form>

          <p className="login-link">
            Already have an account?{""}
            <a href="#" onClick={goToLoginPage} className="link-style">
                Log in!
            </a>
          </p>
        </div>
      </motion.div>

    </div>
  );
}

export default Register;
