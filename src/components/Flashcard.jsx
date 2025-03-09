import { useState } from 'react';
import '../styles/Flashcard.css';

function Flashcard({ flashcards }) {
  const [index, setIndex] = useState(0);
  const [isFlipped, setFlipped] = useState(false);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");

  const nextCard = () => {
    if (index == 9) {
      setIndex(9)
    } else {
      setIndex(index + 1); //% Object.keys(flashcards).length);
    }
    setFlipped(false);
    setGuess("");
    setFeedback("");
  };

  const prevCard = () => {
    if (index == 0) {
      setIndex(0)
    } else {
      setIndex(index - 1); //% Object.keys(flashcards).length);
    }
    setFlipped(false);
    setGuess("");
    setFeedback("");
  };

  const flipCard = () => {
    setFlipped(!isFlipped);
  };

  const handleGuessSubmit = () => {
    if (guess.toLowerCase() === flashcards[index].answer.toLowerCase()) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback(`❌ Incorrect! The correct answer is: ${flashcards[index].answer}`);
    }
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

      {!isFlipped && (
        <div className='guess'>
          <input
            type="text"
            placeholder="Guess the artist"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
          <button onClick={handleGuessSubmit}>Submit</button>
          <p>{feedback}</p>
        </div>
      )}

      <button onClick={prevCard}> Prev. </button>
      <button onClick={nextCard}> Next </button>
    </>
  );
}

export default Flashcard;
