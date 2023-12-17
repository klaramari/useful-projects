import "../styles/CardGrid.css";
import PropTypes from "prop-types";

function Card({ card, handleCardClick }) {
  return (
    <>
      <div
        className={`card ${card.status}`}
        onClick={() => handleCardClick(card)}
      >
        <div>{card.title}</div>
      </div>
    </>
  );
}
Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleCardClick: PropTypes.func.isRequired,
};
export default Card;
