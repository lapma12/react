import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import '../Styles/RegisterPage.css';

function RegisterPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (isLogin) {
      axios
        .post("http://localhost:3000/login", { username, email, password })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      axios
        .post("http://localhost:3000/register", { username, email, password })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="register-page">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="register-form"
      >
        <h2>{isLogin ? "Login" : "Registration"}</h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
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
            </>
          )}

          <div>
            <label>{isLogin ? "Username or Email" : "Password"}</label>
            <input
              type="password"
              placeholder={isLogin ? "Enter username or email" : "Enter password"}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          <button type="submit">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            className="toggle-btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up" : "Log in"}
          </span>
        </p>
      </motion.div>
    </div>
  );
}

export default RegisterPage;
