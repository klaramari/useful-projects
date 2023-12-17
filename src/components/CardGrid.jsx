import "../styles/CardGrid.css";
import PropTypes from "prop-types";
import Card from "./card";

function CardGrid({
  cards,
  difficulty,
  handleCardClick,
  newCard,
  handleDifficultyClick,
  closed,
  toggleClosedClick,
}) {
  const filteredCards = closed
    ? cards.filter((card) => card.status === "closed")
    : cards.filter((card) => card.status !== "closed");
  let closedButton = !closed ? "Open Projects" : "Closed projects";
  return (
    <>
      <div className="main">
        <div className="settings">
          <div className="closed" onClick={() => toggleClosedClick()}>
            {closedButton}
          </div>
          <div className="difficulty">
            <div
              className={`easy ${difficulty === "easy" ? "selected" : ""}`}
              onClick={() => handleDifficultyClick("easy")}
            >
              Easy
            </div>
            <div
              className={`medium ${difficulty === "medium" ? "selected" : ""}`}
              onClick={() => handleDifficultyClick("medium")}
            >
              Medium
            </div>
            <div
              className={`hard ${difficulty === "hard" ? "selected" : ""}`}
              onClick={() => handleDifficultyClick("hard")}
            >
              Hard
            </div>
          </div>
        </div>
        <div className="cardGrid">
          {filteredCards.map((card) => (
            <Card key={card.id} card={card} handleCardClick={handleCardClick} />
          ))}
          <div className="card" onClick={() => newCard()}>
            <div>+</div>
          </div>
        </div>
      </div>
    </>
  );
}

CardGrid.propTypes = {
  cards: PropTypes.array.isRequired,
  handleCardClick: PropTypes.func.isRequired,
  newCard: PropTypes.func.isRequired,
  difficulty: PropTypes.string.isRequired,
  handleDifficultyClick: PropTypes.func.isRequired,
  closed: PropTypes.bool.isRequired,
  toggleClosedClick: PropTypes.func.isRequired,
};

export default CardGrid;
