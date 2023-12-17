import house from "../assets/house-outline.svg";
import "../styles/Header.css";
import PropTypes from "prop-types";
function Header({ goToCardGrid, goToAbout }) {
  return (
    <header>
      <div className="headerContainer">
        <div className="icons">
          <a
            className="link"
            onClick={() => {
              goToCardGrid();
            }}
          >
            <img src={house} className="icon" alt="Home icon" />
          </a>
        </div>
        <a
          onClick={() => {
            goToCardGrid();
          }}
        >
          <h4 className="highKerning">useful projects</h4>
        </a>
        <div className="icons">
          <a
            className="link"
            onClick={() => {
              goToAbout();
            }}
          >
            About
          </a>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  goToCardGrid: PropTypes.func.isRequired,
  goToAbout: PropTypes.func.isRequired,
};

export default Header;
