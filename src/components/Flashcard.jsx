import { useState } from 'react';
import '../styles/Flashcard.css';


function Flashcard({flashcards}) {
  const [index, setIndex] = useState(0);
  const [isQuestion, toggleCard] = useState(true);

  const nextCard = () => {
    setIndex((index + 1) % 10);
    toggleCard(true);
    console.log(index);
  };

  const flipCard = () => {
    toggleCard(!isQuestion);
  };

  if (!isQuestion) {
    return (
      <>
        <div className="intro">
          <h1>From The A</h1>
          <h3>How well do you know Atlanta's most popular artists? Test your song knowledge here!</h3>
          <h3>Number of Cards: {Object.keys(flashcards).length}</h3>
        </div>
        <br></br>
        <div className='flashcard' onClick={flipCard}> 
          <div className='question'> {flashcards[index].answer} </div>
        </div>
        <br></br>
        <button onClick={nextCard}> Next Question </button>
      </>
    )
  }

  return (
      <>
        <div className="intro">
          <h1>From The A</h1>
          <h3>How well do you know Atlanta's most popular artists? Test your song knowledge here!</h3>
          <h3>Number of Cards: {Object.keys(flashcards).length}</h3>
        </div>
        <br></br>
        <div className='flashcard' onClick={flipCard}> 
          <div className='question'> {flashcards[index].question} </div>
        </div>
        <br></br>
        <button onClick={nextCard}> Next Question </button>
      </>
  )
}

export default Flashcard;