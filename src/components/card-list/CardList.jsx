import React,{Component} from 'react'
import './CardList.css'
import Card from './../card/Card'

 class CardList extends Component {
     constructor(props){
        super(props)
        this.state = {}
     }

    render(){
        console.log(this.props)
        return (
            <div className = 'card-list'>
              { //you can render javascript here
                    this.props.monsters.map((monster)=>
                    <Card key = {monster.id} monster = {monster}/>)}
          </div>
        );

    }
  }


  export default CardList

