import React, { Component } from 'react'
import logo from './logo.svg'
import ResponseList from './Components/responseList.js'
import Compose from './Components/compose.js'
import Topic from './Components/topic.js'
//import search from './Components/search.js'
//import { BrowserRouter as Router, Path, Route, Link } from 'react-router-dom'
//import { subscribeToTimer, sendvote1, sendvote2, readvote2 } from './api'
import './App.css'
import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:8001')
const subscribeToTimer = cb => {
  socket.on('timer', timestamp => cb(null, timestamp))
  socket.emit('subscribeToTimer', 1000)
}
class App extends Component {
  constructor(props) {
    super(props)
    subscribeToTimer((err, timestamp) =>
      this.setState({
        timestamp
      })
    )
    socket.on('topic', (msg) => {
      this.setState({topic: msg})
    })
    socket.on('response1', (msg) => {
      this.setState({response1: msg})
    })
    socket.on('response2', (msg) => {
      this.setState({response2: msg})
    })
      socket.on('vote1', (msg) => {
        this.setState({vote1: msg})
      })

      socket.on('vote2', (msg) => {
          this.setState({vote2: msg})
      })

    this.state = {
      name: '',
      body: '',
      response1: '',
      response2: '',
      vote1: 0,
      vote2: 0,
      timestamp: '',
      topic: ''
    }
  }

  getTopic = () => {
    return this.state.topic
  }
  displayResponseOne = () => {
    return (
      'Player One: ' + this.state.response1 + '  Votes: ' + this.state.vote1
    )
  }
  displayResponseTwo = () => {
    return (
      'Player Two: ' + this.state.response2 + '  Votes: ' + this.state.vote2
    )
  }
  nameChange = e => {
    this.setState({ name: e.target.value })
  }

  PlayerOneResponse = () => {
    let response1 = this.state.response1.slice(0)
    const body = this.state.body.slice(0)
    const topic = this.state.name.slice(0)
    response1 = body
    if (topic === '' || this.state.topic === this.state.name) {
      socket.emit('response1', body)
      return false
    }
    socket.emit('response1', body)
    socket.emit('topic', topic)
  }
  PlayerTwoResponse = resp => {
    let response2 = this.state.response2.slice(0)
    const body = this.state.body.slice(0)
    const topic = this.state.name.slice(0)
    response2 = body
    if (topic === '' || this.state.topic === this.state.name) {
      socket.emit('response2', body)
      return false
    }
    socket.emit('response2', body)
    socket.emit('topic', topic)
  }
  PlayerOneVoteCount = () => {
    let votes1 = this.state.votes.slice(0)
    // socket.on('vote1', function(msg) {
    // votes[0] += msg
    // })
    return votes1
  }
  PlayerTwoVoteCount = () => {
    let votes2 = this.state.votes.slice(0)
    // socket.on('vote2', function(msg) {
    // votes[1] += msg
    // })
    return votes2
  }
  VotePlayerOne = () => {
  socket.emit('vote1', this.state.vote1 + 1)
  }
  VotePlayerTwo = () => {
    socket.emit('vote2', this.state.vote2 + 1)
  }
  bodyChange = e => {
    console.log('bodychange')
    this.setState({ body: e.target.value })
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
          <div className="whitet">
            <h1>
              {' '}
              <Topic getTopic={this.getTopic} />
            </h1>
            <Compose
              nameChange={this.nameChange}
              bodyChange={this.bodyChange}
              PlayerOneResponse={this.PlayerOneResponse}
              PlayerTwoResponse={this.PlayerTwoResponse}
            />
          </div>
          <div className="whitel" />
          <div className="whiter" />
          <div className="p1">
            <ResponseList
              displayResponseOne={this.displayResponseOne}
              displayResponseTwo={this.displayResponseTwo}
              VotePlayerOne={this.VotePlayerOne}
              VotePlayerTwo={this.VotePlayerTwo}
            />
          </div>
          <div className="whiteb">
            <h2>{this.state.timestamp}</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default App
