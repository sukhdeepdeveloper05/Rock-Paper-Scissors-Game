import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Result } from "./components/Result";

function App() {
  const [isItemPicked, setIsItemPicked] = useState(false);
  const [userItem, setUserItem] = useState();
  const [compItem, setCompItem] = useState();
  const [score, setScore] = useState(
    JSON.parse(localStorage.getItem("score"))
      ? JSON.parse(localStorage.getItem("score"))
      : 0
  );

  return (
    <>
      <Header score={score} setScore={setScore} />
      {isItemPicked ? (
        <>
          {localStorage.setItem("score", JSON.stringify(score))}
          <Result
            setIsItemPicked={setIsItemPicked}
            userItem={userItem}
            compItem={compItem}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <Main
          setIsItemPicked={setIsItemPicked}
          setUserItem={setUserItem}
          setCompItem={setCompItem}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
