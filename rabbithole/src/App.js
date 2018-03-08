import React, { Component } from 'react'
import logo from './logo.svg'
import responseList from './Components/responseList.js'
import compose from './Components/compose.js'
import response from './Components/response.js'
//import search from './Components/search.js'
import { BrowserRouter as Router, Path, Route, Link } from 'react-router-dom'
import './App.css'
//const server = ''
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: ['', ''],
      votes: [0, 0]
    }
  }

  PlayerOneResponse = resp => {
    const response = this.state.votes.slice(0)
    response[0] = resp
    this.setState({ response: response })
  }
  PlayerTwoResponse = resp => {
    const response = this.state.votes.slice(0)
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

  // async componentDidMount() {
  //   const response = await fetch(server)
  //   const json = await response.json()
  //   this.setState({ messages: json })
  // }
  // async pStar() {}
  render() {
    return (
      <div className="App">
        <div className="container">
          <responseList
            response={this.response}
            PlayerOneResponse={this.PlayerOneResponse}
            PlayerTwoResponse={this.PlayerTwoResponse}
            />
        </div>
      </div>
    )
  }
}

export default App
