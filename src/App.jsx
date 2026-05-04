import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Result } from "./components/Result";
import { Main } from "./components/Main";
import "./App.css";

export default function App() {
  const [userItem, setUserItem] = useState(null);
  const [gameMode, setGameMode] = useState("standard");
  const [score, setScore] = useState(
    JSON.parse(localStorage.getItem("score"))
      ? JSON.parse(localStorage.getItem("score"))
      : 0
  );

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  const restart = () => {
    setUserItem(null);
  };

  const toggleMode = () => {
    setGameMode((prev) => (prev === "standard" ? "bonus" : "standard"));
    setUserItem(null);
  };

  return (
    <div className="flex flex-col justify-between items-center h-full">
      <Header score={score} setScore={setScore} gameMode={gameMode} />
      {userItem === null ? (
        <Main setUserItem={setUserItem} gameMode={gameMode} />
      ) : (
        <Result
          restart={restart}
          userItem={userItem}
          setScore={setScore}
          gameMode={gameMode}
        />
      )}
      <Footer toggleMode={toggleMode} gameMode={gameMode} />
    </div>
  );
}

