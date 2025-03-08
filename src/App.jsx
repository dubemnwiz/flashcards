import Flashcard from './components/Flashcard.jsx'
import './App.css'
import cards from './cards.jsx';

function App() {

  return (
    <>
      <Flashcard flashcards={cards}/>
    </>
  )
}

export default App
