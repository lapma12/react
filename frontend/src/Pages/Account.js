import { useState } from "react";
import "../Styles/Account.css";

const Account = () => {
    const [activeTab, setActiveTab] = useState("results");

    return (
        <div className="account-page">
            <h1 className="account-title">My Account</h1>

            <div className="account-menu">
                <button
                    className={activeTab === "results" ? "active" : ""}
                    onClick={() => setActiveTab("results")}
                >
                    My Results
                </button>
                <button
                    className={activeTab === "settings" ? "active" : ""}
                    onClick={() => setActiveTab("settings")}
                >
                    Settings
                </button>
            </div>

            <div className="account-content">
                {activeTab === "results" && <Results />}
                {activeTab === "settings" && <Settings />}
            </div>
        </div>
    );
};

// 🔽 Beágyazott komponensek (nem külön fájlban)

const Results = () => {
    return (
        <div>
            <h2>My Results</h2>
            <ul>
                <li>Quiz 1: 85%</li>
                <li>Quiz 2: 92%</li>
                {/* stb. */}
            </ul>
        </div>
    );
};

const Settings = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Itt lehet majd API-hívást csinálni a frissítéshez
        console.log("Update account:", { username, password });
    };

    return (
        <div>
            <h2>Account Settings</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>New Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>New Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default Account;
