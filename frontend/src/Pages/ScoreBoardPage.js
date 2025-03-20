import React from "react";
import "../Styles/Scoreboard.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Scoreboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/Scoreboard") // Backend API hívás
      .then((response) => setScores(response.data))
      .catch((error) => console.error("Error fetching scores:", error));
  }, []);

  return (
    <div className="p-6 bg-gray-900 min-h-screen flex">
      <div className="scoreboard-header">
        <h1>Top Scores</h1>
      </div>

      <table className="scoreboard-table">
        <thead>
          <tr className="border-b">
            <th className="p-2">#</th>
            <th className="p-2">Username</th>
            <th className="p-2">Points</th>
            <th className="p-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{score.username}</td>
              <td className="p-2 font-bold">{score.score}</td>
              <td className="p-2">
                {score.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;
