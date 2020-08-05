import React, { Component } from 'react'



import UserInput from './UserInput'
import UserOutput from './UserOutput'

import './App.css'
import './my-styles.css'


class App extends Component {

 
  state = {
    username: 'Patrick'
    
  }

  changeUsernameHandler=(event)=>{

    this.setState({
      username: event.target.value
    })
  }

 
  render() {

   

    return (
      <div className="App">
        <h1>Udemy- React Complete Guide - Exercice #1 </h1>

        <UserInput
          changed={this.changeUsernameHandler.bind(this)}
          username={this.state.username}
        
         />

        <UserOutput
          username={this.state.username}
         />
        <UserOutput 
          username="Bill"

        />
        <UserOutput 
          username="Steven"
        />
        
        
      
      </div>
    );
  }
}

export default App;
