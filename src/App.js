import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card/card';

const obj = [
  { 'src': 'img/helmet-1.png' ,'matched':false},
  { 'src': 'img/potion-1.png' ,'matched':false},
  { 'src': 'img/ring-1.png'   ,'matched':false},
  { 'src': 'img/scroll-1.png' ,'matched':false},
  { 'src': 'img/shield-1.png' ,'matched':false},
  { 'src': 'img/sword-1.png'  ,'matched':false},
]

function App() {
  let [cards, setCards] = useState(null);
  let [turns, setTurns] = useState(0);
  let [choiceOne, setchoiceOne] = useState(null);
  let [choiceTwo, setchoiceTwo] = useState(null);

  const shufflecardes = () =>{
    const shuffledcardes = [...obj, ...obj]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random }));
    
    setCards(shuffledcardes);
    setTurns(0);
  }

  const handleShuffle = () => {
    shufflecardes();
  }

  const handleChoice = (card) => {
    choiceOne ? setchoiceTwo(card) : setchoiceOne(card);
  }

  const reset = () => {
    setchoiceOne(null);
    setchoiceTwo(null);
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log('true');
        setCards(prevCards => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              card.matched = true;
              return card;
            } else {
              return card;
            }
          });
        })
        setTurns(turns + 1);
        reset();
      }
      else {
        setTurns(turns + 1);
        reset();
      }
    }
  }, [choiceOne, choiceTwo,turns]);

  return (
    <div className="App">
      <h2>Magic Match</h2>
      <button onClick={handleShuffle}>New Game</button>
      {cards && <div className="cards">
        {cards.map((card) => ( 
          <Card card={card} handleChoice={handleChoice} />
        ))}
      </div>}
      {cards && <h3>Turns : {turns}</h3>}
    </div>
);

}

export default App