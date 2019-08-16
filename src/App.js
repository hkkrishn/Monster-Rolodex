import React from 'react';
import logo from './logo.svg';
import {Component} from 'react'
import './App.css';
import CardList from './components/card-list/CardList'

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
    ],
    searchField:'',
    }

  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> res.json()).then((users)=>this.setState({monsters:users}))
    .catch((res)=>{
    console.log(res)
  })
  }
  render(){
    console.log(this.state)
    return (
      <div className="App">
      <input type ='text' placeholder = 'Search monsters' onChange = {
        e =>{
        this.setState({ searchField:e.target.value},()=>{
          console.log(this.state)
        })
        }

      }/>
      <CardList monsters = {this.state.monsters}/>
      </div>
    )

}
}

export default App;
