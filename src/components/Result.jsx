import "./Result.css";
import { useEffect, useState } from "react";
import {
  PaperIcon,
  ScissorsIcon,
  RockIcon,
  LizardIcon,
  SpockIcon,
} from "../assets/icons";
import { checkStandardWinner, checkBonusWinner } from "@/utils/gameLogic";

export const Result = ({ restart, userItem, setScore, gameMode }) => {
  const [compItem, setCompItem] = useState(null);
  const [result, setResult] = useState("");

  const icons = {
    Paper: PaperIcon,
    Scissors: ScissorsIcon,
    Rock: RockIcon,
    Lizard: LizardIcon,
    Spock: SpockIcon,
  };

  const UserIcon = icons[userItem];
  const CompIcon = compItem ? icons[compItem] : null;

  useEffect(() => {
    const selectCompItem = () => {
      const standardOptions = ["Rock", "Paper", "Scissors"];
      const bonusOptions = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
      const options = gameMode === "bonus" ? bonusOptions : standardOptions;

      const randNum = Math.floor(Math.random() * options.length);
      setCompItem(options[randNum]);
    };

    let timer;
    if (userItem !== null && compItem === null) {
      timer = setTimeout(selectCompItem, 500);
    }
    return () => clearTimeout(timer);
  }, [userItem, compItem, gameMode]);

  useEffect(() => {
    if (compItem) {
      const checkWinner =
        gameMode === "bonus" ? checkBonusWinner : checkStandardWinner;
      const result = checkWinner(userItem, compItem);
      setResult(result);

      if (result === "win") {
        setScore((s) => s + 1);
      } else if (result === "lose") {
        setScore((s) => (s <= 0 ? 0 : s - 1));
      }
    }
  }, [userItem, compItem, gameMode, setScore]);

  return (
    <div
      className={`pickedItems-container ${
        compItem !== null ? "after-result" : ""
      }`}
    >
      <div className="userItem-container">
        <span>You Picked</span>
        {result === "win" && (
          <div className={`winner ${compItem !== null ? "picked" : ""}`} />
        )}
        <button className={`userItemImage-container ${userItem.toLowerCase()}`}>
          <UserIcon className="icon-img" />
        </button>
      </div>

      {compItem !== null && (
        <div className="result-container">
          <span className="result">
            {result === "win"
              ? "You Win"
              : result === "lose"
              ? "You Lose"
              : "Draw"}
          </span>
          <button
            className="playAgain-btn"
            onClick={() => {
              setCompItem(null);
              restart();
            }}
          >
            Play Again
          </button>
        </div>
      )}

      <div className="compItem-container">
        <span>The House Picked</span>
        {result === "lose" && (
          <div className={`winner ${compItem !== null ? "picked" : ""}`} />
        )}
        {compItem === null ? (
          <div className="backdrop" />
        ) : (
          <button
            className={`compItemImage-container ${compItem.toLowerCase()} ${
              compItem !== null ? "picked" : ""
            }`}
          >
            <CompIcon className="icon-img" />
          </button>
        )}
      </div>
    </div>
  );
};
