import '../css/App.css';
import React, { useState, useEffect } from "react";
import argentinaflag from '../images/argentinaflag_pic5.png';
import cat from '../images/cat_pic7.png.jpg';
import coco from '../images/coco_pic6.jpg';
import ferrari from '../images/ferrari_pic2.png';
import formula1 from '../images/formula1_pic1.png';
import greys from '../images/greys_pic12.png';
import invincible from '../images/invincible_pic11.png';
import ittakes2 from '../images/ittakestwo_pic4.png.jpg';
import leclerc from '../images/leclerc_pic3.png';
import mate from '../images/mate_pic9.jpg';
import messi from '../images/messi_pic10.png';
import rubiu from '../images/rubiu_pic14.png';
import simba from '../images/simba_pic8.png.jpg';
import spiderman from '../images/spiderman_pic15.png';


function FindAPair() {
  // List of images (without folder paths)
  const imageNames = [
    argentinaflag,
    cat,
    coco,
    ferrari,
    formula1,
    greys,
    invincible,
    ittakes2,
    leclerc,
    mate,
    messi,
    rubiu,
    simba,
    spiderman
  ];

  // Duplicate and shuffle images
  const shuffleCards = () => {
    return [...imageNames, ...imageNames]
      .sort(() => Math.random() - 0.5)
      .map((img, index) => ({
        id: index,
        img,
        flipped: false,
        matched: false,
      }));
  };

  // State variables
  const [cards, setCards] = useState(shuffleCards());
  const [selected, setSelected] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);

  // Check for matches
  useEffect(() => {
    if (selected.length === 2) {
      const [first, second] = selected;
      if (cards[first].img === cards[second].img) {
        setCards(prev =>
          prev.map((card, idx) =>
            idx === first || idx === second ? { ...card, matched: true } : card
          )
        );
        setMatchedPairs(prev => prev + 1);
      }

      setTimeout(() => {
        setCards(prev =>
          prev.map((card, idx) =>
            idx === first || idx === second
              ? { ...card, flipped: card.matched }
              : card
          )
        );
        setSelected([]);
      }, 1000);
    }
  }, [selected, matchedPairs]); // ✅ Removed `cards` from dependency array

  // Flip a card
  const flipCard = (index) => {
    if (!cards[index].flipped && selected.length < 2) {
      setCards(prev =>
        prev.map((card, idx) =>
          idx === index ? { ...card, flipped: true } : card
        )
      );
      setSelected(prev => [...prev, index]); // ✅ Fix: Ensure proper state update
    }
  };

  return (
    <div className="game-board">
      <h1>Find a Pair for My Love ❤️</h1>
      <div className="cards">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${card.flipped ? "flipped" : ""} ${card.matched ? "matched" : ""}`}
            onClick={() => flipCard(index)}
          >
            {card.flipped || card.matched ? (
              <img src={`../images/${card.img}`} alt="Memory card" />
            ) : (
              <img src="/images/card-back.png" alt="Card back" />
            )}
          </div>
        ))}
      </div>
      {matchedPairs === imageNames.length && <h2>You matched all pairs! 🎉</h2>}
    </div>
  );
}

export default FindAPair;
