import { useState } from "react";

import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/footer";
import About from "./components/About";
import EditCard from "./components/EditCard";
import NewCard from "./components/NewCard";
import CardGrid from "./components/cardgrid";
import cards from "./cards";

function App() {
  const [page, setPage] = useState("cardGrid");
  const [card, setCard] = useState(0);
  const [difficulty, setDifficulty] = useState("easy");
  const [closed, setClosed] = useState(false);

  const goToCardGrid = () => {
    setPage("cardGrid");
  };

  const goToAbout = () => {
    setPage("About");
  };

  const editCard = () => {
    setPage("editCard");
  };

  const newCard = () => {
    setPage("newCard");
  };

  const handleCardClick = (card) => {
    setCard(card.id);
    if (page == "cardGrid") {
      editCard();
    } else {
      setPage("cardGrid");
    }
  };

  const handleDifficultyClick = (difficulty) => {
    setDifficulty(difficulty);
  };

  const toggleClosedClick = () => {
    setClosed(!closed);
  };

  const renderSwitch = (p) => {
    switch (p) {
      case "cardGrid":
        return (
          <CardGrid
            cards={cards.filter((card) => card.difficulty === difficulty)}
            difficulty={difficulty}
            handleCardClick={handleCardClick}
            newCard={newCard}
            handleDifficultyClick={handleDifficultyClick}
            toggleClosedClick={toggleClosedClick}
            closed={closed}
          />
        );
      case "About":
        return <About />;
      case "editCard":
        return (
          <EditCard
            handleCardClick={handleCardClick}
            card={cards.find((corrcard) => corrcard.id === card)}
          />
        );
      case "newCard":
        return <NewCard />;
      default:
        return <CardGrid />;
    }
  };

  return (
    <>
      <Header goToCardGrid={goToCardGrid} goToAbout={goToAbout} />
      {renderSwitch(page)}
      <Footer></Footer>
    </>
  );
}

export default App;
