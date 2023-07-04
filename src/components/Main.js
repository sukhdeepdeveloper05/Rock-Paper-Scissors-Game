import "./Main.css";

export const Main = (props) => {
  const selectUserItem = (e, item) => {
    let button;
    if (e.target.nodeName === "BUTTON") {
      button = e.target;
    } else {
      button = e.target.parentElement;
    }
    button.classList.add("clicked");
    setTimeout(() => {
      button.classList.remove("clicked");
      props.setUserItem(item);
      props.setIsItemPicked(true);
      selectCompItem(item);
    }, 100);
  };

  const selectCompItem = (userItem) => {
    let compItem = "";
    let randNum = Math.floor(Math.random() * 3 + 1);
    switch (randNum) {
      case 1:
        compItem = "Paper";
        break;
      case 2:
        compItem = "Scissors";
        break;
      default:
        compItem = "Rock";
        break;
    }
    while (compItem === userItem) {
      randNum = Math.floor(Math.random() * 3 + 1);
      switch (randNum) {
        case 1:
          compItem = "Paper";
          break;
        case 2:
          compItem = "Scissors";
          break;
        default:
          compItem = "Rock";
          break;
      }
    }
    props.setCompItem(compItem);
  };

  return (
    <div className="main-container">
      <button
        className="paper"
        onClick={(e) => {
          selectUserItem(e, "Paper");
        }}
        title="Paper"
      ></button>
      <button
        className="scissors"
        onClick={(e) => {
          selectUserItem(e, "Scissors");
        }}
        title="Scissors"
      ></button>
      <button
        className="rock"
        onClick={(e) => {
          selectUserItem(e, "Rock");
        }}
        title="Rock"
      ></button>
    </div>
  );
};
