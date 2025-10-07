import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import About from "./Pages/AboutPage";
import Scoreboard from "./Pages/ScoreBoardPage";
import NotFound from "./Pages/NotFound";
import Game from "./Pages/GamePage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import { useEffect, useState } from "react";
import Account from "./Pages/Account";

function App() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/Scoreboard")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setScores(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/scoreboard" element={<Scoreboard scores={scores} />} />
            <Route path="/game" element={<Game />} />
            <Route path="/account" element={<Account/>}/>
            <Route path="forgot-password" element={<ForgotPasswordPage/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
