import github from "../assets/github.svg";
import "../styles/Footer.css";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
function Footer() {
  return (
    <footer>
      <div className="footerContainer flex-row">
        <a
          href="https://github.com/klaramari"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} className="icon" alt="Home icon" />
        </a>
        <div className="flex-row">
          <p>Built with</p>
          <a href="https://vitejs.dev">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev">
            <img src={reactLogo} className="logo" alt="React logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
