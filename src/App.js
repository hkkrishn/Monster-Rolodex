import React from 'react';
import logo from './logo.svg';
import {Component} from 'react'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters:[
        {
        name:'Meeka',
        id:'asc1'
      },
      {
        name:'Boo',
        id:'asc2'
      },
      {
        name:'Zombie',
        id:'asc3'
      },
    ]
    }

  }
  render(){
    return (
      <div className="App">
        {
          //you can render javascript here
          this.state.monsters.map((monster)=>
            <h1 key = {monster.id} >{monster.name}</h1>)

        }
      </div>
    );
  }
}

export default App;
