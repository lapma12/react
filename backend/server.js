const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

// Adatbázis kapcsolat
const db = mysql.createConnection({
  host: "server.fh2.hu",
  user: "v2labgwj_kando1",
  password: "W5SzE2z94Jxkwx4836M6",
  database: "v2labgwj_kando1",
});

app.get("/", (req, res) => {
  return res.json("From backend side");
});

// Scoreboard API endpoint (lekérdezi a top 10 játékost)
app.get("/Scoreboard", (req, res) => {
  const query = "SELECT username, score, win FROM Scoreboard ORDER BY score DESC LIMIT 10";
  
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Backend indítása
app.listen(3001, () => {
  console.log("Backend listening on port 3001");
});
