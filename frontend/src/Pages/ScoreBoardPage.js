import React from "react";
import "../Styles/Scoreboard.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Scoreboard = () => {
  const [scores, setScores] = useState([]);
  const [filteredScores, setFilteredScores] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    axios
      .get("http://localhost:3001/Scoreboard") // Backend API hívás
      .then((response) => {
        setScores(response.data);
        setFilteredScores(response.data); // Initially, no filter applied
      })
      .catch((error) => console.error("Error fetching scores:", error));
  }, []);

  const applyFilter = (filterType) => {
    setFilter(filterType);
    if (filterType === "score") {
      setFilteredScores([...scores].sort((a, b) => b.score - a.score));
    } else if (filterType === "wins") {
      // Sort wins in descending order
      setFilteredScores([...scores].sort((a, b) => b.win - a.win));
    } else if (filterType === "username") {
      // Sort alphabetically by username
      setFilteredScores([...scores].sort((a, b) => a.username.localeCompare(b.username)));
    } else {
      // Reset to original unfiltered scores
      setFilteredScores(scores);
    }
  };

  return (
    <div className="p-6 min-h-screen flex flex-col items-center">
      <div className="scoreboard-header mb-4">
        <h1>Top Scores</h1>
      </div>

      {/* Filter Buttons */}
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
            <th className="p-2">Points</th>
            <th className="p-2">WINS</th>
          </tr>
        </thead>
        <tbody>
          {filteredScores.map((score, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{score.username}</td>
              <td className="p-2 font-bold">{score.score}</td>
              <td className="p-2">{score.win}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;
