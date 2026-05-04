import "./Main.css";
import {
  PaperIcon,
  ScissorsIcon,
  RockIcon,
  LizardIcon,
  SpockIcon,
  TriangleBackground,
  PentagonBackground,
} from "../assets/icons";

export const Main = ({ setUserItem, gameMode }) => {
  const selectUserItem = (item) => {
    setUserItem(item);
  };

  const standardData = [
    {
      item: "Paper",
      class: "paper",
      title: "Paper",
      borderColor: "hsl(230, 89%, 65%)",
      Icon: PaperIcon,
    },
    {
      item: "Scissors",
      class: "scissors",
      title: "Scissors",
      borderColor: "hsl(40, 84%, 53%)",
      Icon: ScissorsIcon,
    },
    {
      item: "Rock",
      class: "rock",
      title: "Rock",
      borderColor: "hsl(349, 70%, 56%)",
      Icon: RockIcon,
    },
  ];

  const bonusData = [
    ...standardData,
    {
      item: "Lizard",
      class: "lizard",
      title: "Lizard",
      borderColor: "hsl(261, 73%, 60%)",
      Icon: LizardIcon,
    },
    {
      item: "Spock",
      class: "spock",
      title: "Spock",
      borderColor: "hsl(189, 59%, 53%)",
      Icon: SpockIcon,
    },
  ];

  const data = gameMode === "bonus" ? bonusData : standardData;

  return (
    <div className={`main-container ${gameMode}`}>
      {gameMode === "bonus" ? (
        <PentagonBackground className="bg-pentagon" />
      ) : (
        <TriangleBackground className="bg-triangle" />
      )}
      {data.map((item) => (
        <button
          key={item.class}
          className={`${item.class} option`}
          style={{ borderColor: item.borderColor }}
          onClick={() => {
            selectUserItem(item.item);
          }}
          title={item.title}
        >
          <item.Icon className="icon-img" />
        </button>
      ))}
    </div>
  );
};
