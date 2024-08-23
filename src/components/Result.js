import "./Result.css";
import { useEffect, useState } from "react";

export const Result = (props) => {
  const [isCompPicked, setIsCompPicked] = useState("");
  const [winner, setWinner] = useState("");

  useEffect(() => {
    const checkResult = () => {
      if (
        (props.userItem === "Paper") & (props.compItem === "Scissors") ||
        (props.userItem === "Scissors") & (props.compItem === "Rock") ||
        (props.userItem === "Rock") & (props.compItem === "Paper")
      ) {
        setWinner("comp");
        props.setScore(props.score - 1);
      } else if (
        (props.userItem === "Paper") & (props.compItem === "Rock") ||
        (props.userItem === "Scissors") & (props.compItem === "Paper") ||
        (props.userItem === "Rock") & (props.compItem === "Scissors")
      ) {
        setWinner("you");
        props.setScore(props.score + 1);
      }
    };
    
    setTimeout(() => {
      setIsCompPicked("picked");
      checkResult();
    }, 1000);
  }, [props.userItem]);

  return (
    <div
      className={`pickedItems-container ${
        isCompPicked === "picked" ? "after-result" : ""
      }`}
    >
      <div className="userItem-container">
        <span>You Picked</span>
        {winner === "you" ? (
          <div className={`winner ${isCompPicked}`}></div>
        ) : null}
        <button
          className={`userItemImage-container ${props.userItem.toLowerCase()}`}
        ></button>
      </div>
      {isCompPicked === "picked" ? (
        <div className="result-container">
          <span className="result">
            {winner === "you" ? "You Win" : "You Lose"}
          </span>
          <button
            className="playAgain-btn"
            onClick={() => {
              props.setIsItemPicked(false);
            }}
          >
            Play Again
          </button>
        </div>
      ) : null}
      <div className="compItem-container">
        <span>The House Picked</span>
        {winner === "comp" ? (
          <div className={`winner ${isCompPicked}`}></div>
        ) : null}
        {isCompPicked !== "picked" ? (
          <div className="backdrop"></div>
        ) : (
          <button
            className={`compItemImage-container ${props.compItem.toLowerCase()} ${isCompPicked}`}
          ></button>
        )}
      </div>
    </div>
  );
};
