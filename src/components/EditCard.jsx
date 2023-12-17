import arrow from "../assets/arrowback.svg";

function EditCard({ card, handleCardClick }) {
  return (
    <div className="card">
      <div className="title">{card.title}</div>
      <div className="description">{card.description}</div>
      <div className="difficultyStatusSelector">
        <div className="difficultySelector">
          <div className={card.difficulty === "easy" ? "selected" : "box"}>
            Easy
          </div>
          <div className={card.difficulty === "medium" ? "selected" : "box"}>
            Medium
          </div>
          <div className={card.difficulty === "hard" ? "selected" : "box"}>
            Hard
          </div>
        </div>
        <div className="statusSelector">
          <div className={card.status === "open" ? "selected" : "box"}>
            Open
          </div>
          <div className={card.status === "progress" ? "selected" : "box"}>
            In Progress
          </div>
          <div className={card.status === "closed" ? "selected" : "box"}>
            Closed
          </div>
        </div>
      </div>
      <div className="close" onClick={() => handleCardClick(card)}>
        <img src={arrow} className="icon" alt="Home icon" />
      </div>
    </div>
  );
}

// CardGrid.propTypes = {
//   card: PropTypes.object.isRequired,
// };

export default EditCard;
