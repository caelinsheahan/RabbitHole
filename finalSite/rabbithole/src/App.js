import React, { Component } from 'react'
import logo from './logo.svg'
import ResponseList from './Components/responseList.js'
import Compose from './Components/compose.js'
import Topic from './Components/topic.js'
//import search from './Components/search.js'
import { BrowserRouter as Router, Path, Route, Link } from 'react-router-dom'
//import { subscribeToTimer, sendvote1, sendvote2, readvote2 } from './api'
import './App.css'
import openSocket from 'socket.io-client'
const socket = openSocket('https://peaceful-crag-39375.herokuapp.com/')
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
    socket.on('response3', (msg) => {
      this.setState({response3: msg})
    })
    socket.on('response4', (msg) => {
      this.setState({response4: msg})
    })
    socket.on('response5', (msg) => {
      this.setState({response5: msg})
    })
      socket.on('vote1', (msg) => {
        this.setState({vote1: msg})
      })
      socket.on('vote2', (msg) => {
          this.setState({vote2: msg})
      })
      socket.on('vote3', (msg) => {
          this.setState({vote3: msg})
      })
      socket.on('vote4', (msg) => {
          this.setState({vote4: msg})
      })
      socket.on('vote5', (msg) => {
          this.setState({vote5: msg})
      })
    this.state = {
      name: '',
      body: '',
      response1: '',
      response2: '',
      response3: '',
      response4: '',
      response5: '',
      vote1: 0,
      vote2: 0,
      vote3: 0,
      vote4: 0,
      vote5: 0,
      timestamp: '',
      topic: '',
      submitted: 'false',
      voted: 'false'
    }
  }

  getTopic = () => {
    return this.state.topic
  }
  displayResponse1 = () => {
    if(this.state.response1 === '') {
      return false
    }
    return (
      this.state.response1
    )
  }
  displayResponse2 = () => {
    if(this.state.response2 === '') {
      return false
    }
    return (
      this.state.response2
    )
  }
  displayResponse3 = () => {
    if(this.state.response3 === '') {
      return false
    }
    return (
      this.state.response3
    )
  }
  displayResponse4 = () => {
    if(this.state.response4 === '') {
      return false
    }
    return (
      this.state.response4
    )
  }
  displayResponse5 = () => {
    if(this.state.response5 === '') {
      return false
    }
    return (
      this.state.response5
    )
  }
  displayVote1 = () => {
    if(this.state.vote1 === 0) {
      return false
    }
    return (
      'Dug ' + this.state.vote1 + ' feet deeper!'
    )
  }
  displayVote2 = () => {
    if(this.state.vote2 === 0) {
      return false
    }
    return (
    'Dug ' + this.state.vote2 + ' feet deeper!'
    )
  }
  displayVote3 = () => {
    if(this.state.vote3 === 0) {
      return false
    }
    return (
      'Dug ' + this.state.vote3 + ' feet deeper!'
    )
  }
  displayVote4 = () => {
    if(this.state.vote4 === 0) {
      return false
    }
    return (
      'Dug ' + this.state.vote4 + ' feet deeper!'
    )
  }
  displayVote5 = () => {
    if(this.state.vote5 === 0) {
      return false
    }
    return (
      'Dug ' + this.state.vote5 + ' feet deeper!'
    )
  }
  nameChange = e => {
    this.setState({ name: e.target.value })
  }

  PlayerOneResponse = () => {
    let response1 = this.state.response1.slice(0)
    let response2 = this.state.response2.slice(0)
    let response3 = this.state.response3.slice(0)
    let response4 = this.state.response4.slice(0)
    let response5 = this.state.response5.slice(0)
    let submitted = this.state.submitted.slice(0)
    const body = this.state.body.slice(0)
    const topic = this.state.name.slice(0)
    if(this.state.response1 === '' && submitted === 'false' ) {
      response1 = body
      if (topic === '' || this.state.topic === this.state.name) {
        this.setState({submitted: 'true'})
        socket.emit('response1', body)
        return false
    }
    else {}
    this.setState({submitted: 'true'})
    socket.emit('response1', body)
    socket.emit('topic', topic)
    return false
    }
    if(this.state.response2 === '' && submitted === 'false' ) {
      response2 = body
      if (topic === '' || this.state.topic === this.state.name) {
        this.setState({submitted: 'true'})
        socket.emit('response2', body)
        return false
    }
    else {}
    this.setState({submitted: 'true'})
    socket.emit('response2', body)
    socket.emit('topic', topic)
    return false
    }
    if(this.state.response3 === '' && submitted === 'false' ) {
      response3 = body
      if (topic === '' || this.state.topic === this.state.name) {
        this.setState({submitted: 'true'})
        socket.emit('response3', body)
        return false
    }
    else {}
    this.setState({submitted: 'true'})
    socket.emit('response3', body)
    socket.emit('topic', topic)
    return false
    }
    if(this.state.response4 === '' && submitted === 'false' ) {
      response4 = body
      if (topic === '' || this.state.topic === this.state.name) {
        this.setState({submitted: 'true'})
        socket.emit('response4', body)
        return false
    }
    else {}
    this.setState({submitted: 'true'})
    socket.emit('response4', body)
    socket.emit('topic', topic)
    return false
    }
    if(this.state.response5 === '' && submitted === 'false' ) {
      response2 = body
      if (topic === '' || this.state.topic === this.state.name) {
        this.setState({submitted: 'true'})
        socket.emit('response5', body)
        return false
    }
    else {}
    this.setState({submitted: 'true'})
    socket.emit('response5', body)
    socket.emit('topic', topic)
    return false
    }
  }
  VotePlayer1 = () => {
  let voted = this.state.voted.slice(0)
  if(voted === 'true') {
    return false
  }
  this.setState({voted: 'true'})
  socket.emit('vote1', this.state.vote1 + 1)
  }
  VotePlayer2 = () => {
    let voted = this.state.voted.slice(0)
    if(voted === 'true') {
      return false
    }
    this.setState({voted: 'true'})
    socket.emit('vote2', this.state.vote2 + 1)
  }
  VotePlayer3 = () => {
    let voted = this.state.voted.slice(0)
    if(voted === 'true') {
      return false
    }
    this.setState({voted: 'true'})
    socket.emit('vote3', this.state.vote3 + 1)
  }
  VotePlayer4 = () => {
    let voted = this.state.voted.slice(0)
    if(voted === 'true') {
      return false
    }
    this.setState({voted: 'true'})
    socket.emit('vote4', this.state.vote4 + 1)
  }
  VotePlayer5 = () => {
    let voted = this.state.voted.slice(0)
    if(voted === 'true') {
      return false
    }
    this.setState({voted: 'true'})
    socket.emit('vote5', this.state.vote5 + 1)
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
              <Topic getTopic={this.getTopic} />
            </h1>
            <Compose
              nameChange={this.nameChange}
              bodyChange={this.bodyChange}
              PlayerOneResponse={this.PlayerOneResponse}
            />
          </div>
          <div className="whitel" />
          <div className="whiter" />
          <div className="p1">
            <ResponseList
              displayResponse1={this.displayResponse1}
              displayResponse2={this.displayResponse2}
              displayResponse3={this.displayResponse3}
              displayResponse4={this.displayResponse4}
              displayResponse5={this.displayResponse5}
              displayVote1={this.displayVote1}
              displayVote2={this.displayVote2}
              displayVote3={this.displayVote3}
              displayVote4={this.displayVote4}
              displayVote5={this.displayVote5}
              VotePlayer1={this.VotePlayer1}
              VotePlayer2={this.VotePlayer2}
              VotePlayer3={this.VotePlayer3}
              VotePlayer4={this.VotePlayer4}
              VotePlayer5={this.VotePlayer5}
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
