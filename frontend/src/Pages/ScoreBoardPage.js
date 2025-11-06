import React, { useState, useEffect } from "react";
import "../Styles/Scoreboard.css";

const Scoreboard = () => {
  const [scores, setScores] = useState([]);
  const [users, setUsers] = useState([]);
  const [filteredScores, setFilteredScores] = useState([]);
  const [, setFilter] = useState("all");

  useEffect(() => {
    // Scoreboard adatok lekérése
    fetch("https://localhost:7282/api/Scoreboard")
      .then((response) => response.json())
      .then((data) => {
        setScores(data);
        setFilteredScores(data);
      })
      .catch((err) => console.error(err));

    // Users adatok lekérése
    fetch("https://localhost:7282/api/Users")
      .then((res) => res.json())
      .then((userData) => setUsers(userData))
      .catch((err) => console.error(err));
  }, []);

  // Visszaadja a username-t userId alapján
  const getUsernameById = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : "Unknown";
  };

  const applyFilter = (filterType) => {
    setFilter(filterType);
    if (filterType === "kill") {
      setFilteredScores([...scores].sort((a, b) => b.totalScore - a.totalScore));
    } else if (filterType === "score") {
      setFilteredScores([...scores].sort((a, b) => b.wins - a.wins));
    } else if (filterType === "name") {
      setFilteredScores([...scores].sort((a, b) => {
        const nameA = getUsernameById(a.userId);
        const nameB = getUsernameById(b.userId);
        return nameA.localeCompare(nameB);
      }));
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
          {filteredScores.slice(0,10).map((score, index) => (
            <tr key={score.userId}>
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{getUsernameById(score.name)}</td>
              <td className="p-2 font-bold">{score.totalScore}</td>
              <td className="p-2">{score.wins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;
