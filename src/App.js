import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

// import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  componentDidMount = () => {
    this.fetchToys()
  }

  fetchToys = () => {
    fetch("http://localhost:3000/toys")
    .then(res => res.json())
    .then(toys => {
      this.setState({
        toys: toys
      })
      console.log(this.state.toys)
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  handleLike = (id, likes) => {
    console.log(id)
    console.log(likes)
    const toyId = id
    const toyLikes = likes + 1
    fetch(`http://localhost:3000/toys/${toyId}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        likes: toyLikes
      })
    }).then(res => this.fetchToys())

  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} handleLike={this.handleLike}/>
      </>
    );
  }

}

export default App;
