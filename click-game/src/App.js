import React, { Component } from "react";
import ClickCard from "./components/ClickCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Nav";
import cards from "./cards.json";
import "./App.css";

function shuffleCards(cardArray) {
  let i = cardArray.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = cardArray[i];
    cardArray[i] = cardArray[j];
    cardArray[j] = temp;
  }
  return cardArray;
}

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    displayOrder: shuffleCards(cards),
    score:0,
    topScore:0,
    message: "Click on a character card to begin"
  };


  clickedCard = id => {
    // shuffle the displayOrder
    const displayOrder = shuffleCards(this.state.displayOrder);
    
    // Find cards with an id equal to the id clicked
    const card = this.state.cards.find(card => (card.id === id));
    
    //create a copy of the cards array so we can update the guessed state
    let currentCards = this.state.cards;
    
    let score = this.state.score;
    let topScore = this.state.topScore;
    let message = '';
    //if the card has not been clicked set the correct Guess to true
    
    if (!card.guessed) {
      //set win message
      message = "You guessed correctly!";
      //increment the score
      score++;
      //update topScore if this is the new topScore
      if (topScore < score)
        topScore = score;
      //update the guessed flag on the friend id
      currentCards.find(card => (card.id === id)).guessed = true;
    }
    else {
      message = "You guessed incorrectly! Click on a character to start the next round.";
      //reset the guessed flag
      currentCards.forEach(card =>(card.guessed = false));
      //reset the score
      score = 0;
    }


    // Set this.state.friends equal to the new friends array
    this.setState({ currentCards, displayOrder, score, topScore, message });
  };

  // removeCard = id => {
  //   // Filter this.state.cards for cards with an id not equal to the id being removed
  //   const cards = this.state.cards.filter(cards => cards.id !== id);
  //   // Set this.state.cards equal to the new cards array
  //   this.setState({ cards });
  // };

  // Map over this.state.cards and render a clickCard component for each cards object
  render() {
    return (
      <div>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Wrapper>
        {this.state.displayOrder.map(card => (
          <ClickCard
          clickedCard={this.clickedCard}
          id={card.id}
          key={card.id}
          image={card.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;

