import { useState } from 'react';
import '../styles/Flashcard.css';

function Flashcard({ flashcards }) {
  const [index, setIndex] = useState(0);
  const [isFlipped, setFlipped] = useState(false);

  const nextCard = () => {
    setIndex((index + 1) % Object.keys(flashcards).length);
    setFlipped(false);
  };

  const flipCard = () => {
    setFlipped(!isFlipped);
  };

  return (
    <>
      <div className="intro">
        <h1>From The A</h1>
        <h3>How well do you know Atlanta's most popular artists? Test your song knowledge here!</h3>
        <h3>Number of Cards: {flashcards.length}</h3>
      </div>
      <br />
      <div className="flashcard-container" onClick={flipCard}>
        <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
          <div className="front">{flashcards[index].question}</div>
          <div className="back">{flashcards[index].answer}</div>
        </div>
      </div>
      <br />
      <button onClick={nextCard}> Next Question </button>
    </>
  );
}

export default Flashcard;
