import "./Footer.css";
import RulesImage from "../images/image-rules.svg";
import CloseIcon from "../images/icon-close.svg";

export const Footer = () => {
  const openRules = (rulesOverlay) => {
    rulesOverlay.classList.remove("close");
    rulesOverlay.classList.add("open");
  };

  const closeRules = (rulesOverlay) => {
    rulesOverlay.classList.remove("open");
    rulesOverlay.classList.add("close");
  };

  return (
    <footer>
      <div
        className="rules-btn"
        onClick={(e) => {
          openRules(e.target.nextElementSibling);
        }}
      >
        Rules
      </div>
      <div className="rules-overlay">
        <div className="rules-container">
          <div className="rules-header">
            <span className="rules-text">Rules</span>
            <div
              className="close-btn"
              onClick={(e) => {
                closeRules(
                  e.target.parentElement.parentElement.parentElement
                    .parentElement
                );
              }}
            >
              <img src={CloseIcon} alt="" />
            </div>
          </div>
          <div className="rules-image">
            <img src={RulesImage} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};
