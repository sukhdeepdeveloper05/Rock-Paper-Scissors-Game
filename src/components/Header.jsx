import "./Header.css";
import { Logo, LogoBonus } from "../assets/icons";

export const Header = ({ score, gameMode }) => {
  return (
    <div className="header-container">
      {gameMode === "bonus" ? (
        <LogoBonus className="logo" />
      ) : (
        <Logo className="logo" />
      )}
      <div className="score-container">
        <h3 className="text-lg">Score</h3>
        <span>{score}</span>
      </div>
    </div>
  );
};
