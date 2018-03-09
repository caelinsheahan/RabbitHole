import React, { Component } from 'react'
import logo from './logo.svg'
import ResponseList from './Components/responseList.js'
import Compose from './Components/compose.js'
import Response from './Components/response.js'
//import search from './Components/search.js'
import { BrowserRouter as Router, Path, Route, Link } from 'react-router-dom'
import './App.css'
//const server = ''
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      body: '',
      response: ['-Nothing Here-', '-Nothing Here-'],
      votes: [0, 0]
    }
  }
  displayResponseOne = () => {
    return "Player One: " + this.state.response[0]  + "  Votes: " + this.state.votes[0]
  }
  displayResponseTwo = () => {
    return "Player Two: " + this.state.response[1] + "  Votes: " + this.state.votes[1]
  }
  nameChange = (e) => {
     this.setState({name: e.target.value});
  }

  PlayerOneResponse = () => {
    const response = this.state.response.slice(0)
    const body = this.state.body.slice(0)
    response[0] = body
    this.setState({ response: response })
  }
  PlayerTwoResponse = resp => {
    const response = this.state.response.slice(0)
    response[1] = resp
    this.setState({ response: response })
  }
  PlayerOneVoteCount = () => {
    const votes = this.state.votes.slice(0)
    return votes[0]
  }
  PlayerTwoVoteCount = () => {
    const votes = this.state.votes.slice(0)
    return votes[1]
  }
  VotePlayerOne = () => {
    const votes = this.state.votes.slice(0)
    votes[0] += 1
    this.setState({ votes: votes })
  }
  VotePlayerTwo = () => {
    const votes = this.state.votes.slice(0)
    votes[1] += 1
    this.setState({ votes: votes })
  }
  bodyChange = (e) => {
    console.log('bodychange')
     this.setState({body: e.target.value});
  }
  // async componentDidMount() {
  //   const response = await fetch(server)
  //   const json = await response.json()
  //   this.setState({ messages: json })
  // }
  // async pStar() {}

  render() {
    return (
      <div className="App">
        <Compose
          nameChange={this.nameChange}
          bodyChange={this.bodyChange}
          PlayerOneResponse={this.PlayerOneResponse}
          PlayerTwoResponse={this.PlayerTwoResponse}
          />
        <div className="container">
          <ResponseList
            displayResponseOne={this.displayResponseOne}
            displayResponseTwo={this.displayResponseTwo}
            />
        </div>
      </div>
    )
  }
}

export default App
