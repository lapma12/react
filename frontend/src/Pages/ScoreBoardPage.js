import React from "react";
import "../Styles/Scoreboard.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Scoreboard = () => {
  const [scores, setScores] = useState([]);
  const [filteredScores, setFilteredScores] = useState([]);
  const [,setFilter] = useState("all");

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get("http://localhost:3001/Scoreboard")
        .then((response) => {
          setScores(response.data);
          setFilteredScores(response.data);
        })
        .catch((error) => console.error("Error fetching scores:", error));
    }, 5000); 

    return () => clearInterval(intervalId);
  }, []);

  const applyFilter = (filterType) => {
    setFilter(filterType);
    if (filterType === "kill") {
      setFilteredScores([...scores].sort((a, b) => b.score - a.score));
    } else if (filterType === "wins") {
      setFilteredScores([...scores].sort((a, b) => b.win - a.win));
    } else if (filterType === "username") {
      setFilteredScores([...scores].sort((a, b) => a.username.localeCompare(b.username)));
    } else {
      setFilteredScores(scores);
    }
  };

  return (
    <div className="p-6 min-h-screen flex flex-col items-center">
      <div className="scoreboard-header mb-4">
        <h1>Top Scores</h1>
      </div>
      <div className="filter-buttons mb-4">
        <button className="filter-btn" onClick={() => applyFilter("wins")}>Sort by Wins</button>
        <button className="filter-btn" onClick={() => applyFilter("username")}>Sort by Username</button>
        <button className="filter-btn" onClick={() => applyFilter("all")}>Show All</button>
      </div>

      <table className="scoreboard-table w-full max-w-4xl">
        <thead>
          <tr className="border-b">
            <th className="p-2">#</th>
            <th className="p-2">Username</th>
            <th className="p-2">Scores</th>
            <th className="p-2">WINS</th>
          </tr>
        </thead>
        <tbody>
          {filteredScores.map((score, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{score.username}</td>
              <td className="p-2 font-bold">{score.kill}</td>
              <td className="p-2">{score.win}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;

