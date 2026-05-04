import "./Footer.css";
import { RulesImage, RulesBonusImage, CloseIcon } from "../assets/icons";

export const Footer = ({ toggleMode, gameMode }) => {
  const openRules = (rulesOverlay) => {
    rulesOverlay.classList.remove("close");
    rulesOverlay.classList.add("open");
  };

  const closeRules = (rulesOverlay) => {
    rulesOverlay.classList.remove("open");
    rulesOverlay.classList.add("close");
  };

  return (
    <footer className="footer-container">
      <div className="toggle-btn" onClick={toggleMode}>
        Switch to {gameMode === "standard" ? "Bonus" : "Standard"}
      </div>

      <div class="attribution">
        Challenge By{" "}
        <a
          href="https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29"
          target="_blank"
          rel="noopener noreferrer"
        >
          FrontEnd Mentor
        </a>
        . Coded By{" "}
        <a
          href="https://github.com/sukhdeepsohal05"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sukhdeep Singh
        </a>
      </div>

      <div
        className="rules-btn"
        onClick={(e) => {
          openRules(e.target.nextElementSibling);
        }}
      >
        Rules
      </div>

      <div
        className="rules-overlay"
        onClick={(e) => {
          closeRules(e.currentTarget);
        }}
      >
        <div className="rules-container">
          <div className="rules-header">
            <span className="rules-text">Rules</span>
            <div
              className="close-btn"
              onClick={(e) => {
                closeRules(
                  e.currentTarget.parentElement.parentElement.parentElement
                );
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="rules-image">
            {gameMode === "bonus" ? <RulesBonusImage /> : <RulesImage />}
          </div>
        </div>
      </div>
    </footer>
  );
};
