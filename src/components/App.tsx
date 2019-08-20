import React, { useState } from 'react';
import styles from './styles/App.module.css';
import Card from './Card';

const App: React.FC = () => {
  const deck = (require('../deck.json')).cards;
  const [playerCards, setPlayerCards]: any[] = useState([]);

  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const activeCard = deck[randomIndex];
    deck.splice(randomIndex, 1);
    console.log('Random Index:', randomIndex);
    console.log('Last Pulled Card:', activeCard);
    console.log('Remaining Cards:', deck);
    switch (activeCard.suit) {
      case 'spades':
        setPlayerCards([...playerCards, { 'value': activeCard.value, 'suit': '♠' }]);
        break;
      case 'diamonds':
        setPlayerCards([...playerCards, { 'value': activeCard.value, 'suit': '♦' }]);
        break;
      case 'clubs':
        setPlayerCards([...playerCards, { 'value': activeCard.value, 'suit': '♣' }]);
        break;
      case 'hearts':
        setPlayerCards([...playerCards, { 'value': activeCard.value, 'suit': '♥' }]);
        break;
      default:
        break;
    }
  }

  const clickHandler = () => {
    drawCard();
  }

  console.log('Player Cards Array:', playerCards);

  return (
    <>
      <button onClick={clickHandler}>Draw a Card</button>
      <div className={styles.container}>
        {playerCards.map((card: any, index: number) => {
          return (
            <Card key={index} value={card.value} suit={card.suit} />
          );
        })}
      </div>
    </>
  );
}

export default App;
