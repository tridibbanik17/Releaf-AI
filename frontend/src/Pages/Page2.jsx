import "./Page2.css";
import React, { useState } from "react";

function Page2() {
  const [selectedCard, setSelectedCard] = useState(null); // State for the selected card

  const [cards, setCards] = useState([
    { id: 1, imageSrc: "./src/assets/plant.jpg", text: "Plant 1", details: "Details about Plant 1" },
    { id: 2, imageSrc: "./src/assets/plant.jpg", text: "Plant 2", details: "Details about Plant 2" },
    { id: 3, imageSrc: "./src/assets/plant.jpg", text: "Plant 3", details: "Details about Plant 3" },
  ]);

  const addCard = () => {
    setCards([...cards, { id: 4, imageSrc: "./src/assets/plant.jpg", text: "Plant 3", details: "Details about Plant 3" }])
  }

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  }
  
  const handleToggleDetails = (card) => {
    setSelectedCard(card);
  };

  return (
    <>
      <h1 id="header">Welcome</h1>
      
      <div className="card-container">
        {cards.map((card) => (
          <PlantCard
            key={card.id}
            imageSrc={card.imageSrc}
            text={card.text}
            onClick={() => handleToggleDetails(card)}
            setCards={deleteCard}
            id={card.id}
          />
        ))}
        <AddCard setCards={addCard} />
      </div>

      {selectedCard && (
        <div className="card-details">
          <h2>Details</h2>
          <p>{selectedCard.details}</p>
        </div>
      )}
    </>
  );
}

function PlantCard({ imageSrc, text, onClick, setCards, id}) { 
  return (
    <div className="card" onClick={onClick}>
      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation(); // Prevents triggering the card click
          setCards(id);
        }}
      >
        X
      </button>
      <img src={imageSrc} alt="Plant" className="card-image" />
      <div className="card-text">{text}</div>
    </div>
  );
}

function AddCard({setCards}) {
  return (
    <div className="add-card">
      <button onClick={setCards}>+</button>
    </div>
  );
}

export default Page2;
