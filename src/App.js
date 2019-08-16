import React from 'react';
import logo from './logo.svg';
import {Component} from 'react'
import './App.css';
import CardList from './components/card-list/CardList'
import {SearchBox} from './components/searchbox/SearchBox'

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

  handleChange = (e)=>{
    console.log(this)
    this.setState({ searchField:e.target.value})
  }




  render(){
    const {monsters,searchField} = this.state ;
    const filteredMonsters = monsters.filter((monster)=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    console.log(this.state)
    return (
      <div className="App">
      <SearchBox handleChange = {this.handleChange}
      //when setState is called it rerenders the component and calls the render method again
      placeholder = {'search for monsters'}
      />

      <CardList monsters = {filteredMonsters}/>
      </div>
    )

}
}

export default App;
