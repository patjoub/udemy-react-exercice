import React, { Component } from 'react'

import Validation from './exercice-2/Validation'
import CharComponent from './exercice-2/CharComponent'

import './App.css'
import './my-styles.css'


class App extends Component {

  state = {
    inputLength: 0,
    text: ''
  }


  inputChangeHandler = (event) => {
    this.setState({
      inputLength: event.target.value.length,
      text: event.target.value
    })

  }

  charClickHandler=(letterIndex)=>{

    const oldText=[...this.state.text]
    oldText.splice(letterIndex,1)
   
    
    const newText=oldText.join("")

    this.setState({
      inputLength: newText.length,
      text: newText
    })
   
  }

  render() {
    let letters = null

    if (this.state.inputLength > 0) {
      let wordLetters = [...this.state.text]     
      
      letters = (
        <div>
          {wordLetters.map((letter,index) =>
            <CharComponent key={index} letter={letter} click={()=>this.charClickHandler(index)} />
          )
          }

        </div>
      )

    }

    return (
      <div className="App">
        <h1>Udemy- React Complete Guide - Exercice #2 </h1>
        <div>
          <input placeholder="Enter a text" onChange={ this.inputChangeHandler } value={this.state.text} />
          <p>Text length : { this.state.inputLength }</p>
          <Validation textLength={ this.state.inputLength } />
        </div>
        <div>        
          {letters}
        </div>
      </div>
    );
  }
}

export default App;
