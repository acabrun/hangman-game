import React, { Component } from "react";
import "./App.css";

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

const phrases = ["ORDINATEUR", "BUREAU", "CONFITURE", "LIVRE", "DEVELOPPEUR"];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usedLetters: "",
      guessingWord: ""
    };
  }

  // Mask
  computeDisplay(phrase, usedLetters) {
    return phrase.replace(/\w/g, letter =>
      usedLetters.includes(letter) ? letter : "_"
    );
    console.log(this.computeDisplay)
  }

  getRandomPhrase() {
    var newWord = phrases[Math.floor(Math.random() * Math.floor(phrases.length))]
    this.setState({guessingWord: newWord})
  }

  render() {
    return (
      <div className="App">
        {console.log(
          `Mot à deviner : ${this.state.guessingWord}, Lettres comparées : ${this.state.usedLetters}`
        )}
        <header className="App-header">{this.state.guessingWord}</header>
        <body>
          <div className="alphabet">
            {letters.map((letter) => (
              <button
                className="alphabet-button"
                key={letter}
                onClick={() => this.computeDisplay(this.state.guessingWord, letter)}
              >
                {letter}
              </button>
            ))}
          </div>
          <div>
            <button className="newgame-button" onClick={() => {this.getRandomPhrase()}} >New Game</button>
          </div>
        </body>
      </div>
    );
  }
}
