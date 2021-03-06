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
const socket = openSocket('https://aqueous-oasis-28113.herokuapp.com/')
// const subscribeToTimer = cb => {
//   socket.on('timer', timestamp => cb(null, timestamp))
//   socket.emit('subscribeToTimer', 1000)
// }
class App extends Component {
  constructor(props) {
    super(props)
    // subscribeToTimer((err, timestamp) =>
    //   this.setState({
    //     timestamp
    //   })
    // )
    socket.on('time', msg => {
      this.setState({ timestamp: msg })
    })
    socket.on('submitted', msg => {
      this.setState({ submitted: msg })
    })
    socket.on('voted', msg => {
      this.setState({ voted: msg })
    })
    socket.on('topic', msg => {
      this.setState({ topic: msg })
    })
    socket.on('response1', msg => {
      this.setState({ response1: msg })
    })
    socket.on('response2', msg => {
      this.setState({ response2: msg })
    })
    socket.on('response3', msg => {
      this.setState({ response3: msg })
    })
    socket.on('response4', msg => {
      this.setState({ response4: msg })
    })
    socket.on('response5', msg => {
      this.setState({ response5: msg })
    })
    socket.on('vote1', msg => {
      this.setState({ vote1: msg })
    })
    socket.on('vote2', msg => {
      this.setState({ vote2: msg })
    })
    socket.on('vote3', msg => {
      this.setState({ vote3: msg })
    })
    socket.on('vote4', msg => {
      this.setState({ vote4: msg })
    })
    socket.on('vote5', msg => {
      this.setState({ vote5: msg })
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
reset = () => {
  this.setState({
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
    submitted: 'false',
    voted: 'false'
  })
  socket.emit('submitted', this.state.submitted)
  socket.emit('voted', this.state.voted)
  socket.emit('topic', this.state.topic)
  socket.emit('response1', this.state.response1)
  socket.emit('vote1', this.state.vote1)
  socket.emit('response2', this.state.response2)
  socket.emit('vote2', this.state.vote2)
  socket.emit('response3', this.state.response3)
  socket.emit('vote3', this.state.vote3)
  socket.emit('response4', this.state.response4)
  socket.emit('vote4', this.state.vote4)
  socket.emit('response5', this.state.response5)
  socket.emit('vote5', this.state.vote5)
}
  getTime = () => {
    return (
      this.state.timestamp[3] +
      this.state.timestamp[4] +
      this.state.timestamp[6] +
      this.state.timestamp[7]
    )
  }
  getTopic = () => {
    return this.state.topic
  }
  displayResponse1 = () => {
    if (this.state.response1 === '') {
      return false
    }
    return this.state.response1
  }
  displayResponse2 = () => {
    if (this.state.response2 === '') {
      return false
    }
    return this.state.response2
  }
  displayResponse3 = () => {
    if (this.state.response3 === '') {
      return false
    }
    return this.state.response3
  }
  displayResponse4 = () => {
    if (this.state.response4 === '') {
      return false
    }
    return this.state.response4
  }
  displayResponse5 = () => {
    if (this.state.response5 === '') {
      return false
    }
    return this.state.response5
  }
  displayVote1 = () => {
    if (this.state.vote1 === 0) {
      return false
    }
    return this.state.vote1 + ' person dug it'
  }
  displayVote2 = () => {
    if (this.state.vote2 === 0) {
      return false
    }
    return this.state.vote2 + ' person dug it'
  }
  displayVote3 = () => {
    if (this.state.vote3 === 0) {
      return false
    }
    return this.state.vote3 + ' person dug it'
  }
  displayVote4 = () => {
    if (this.state.vote4 === 0) {
      return false
    }
    return this.state.vote4 + ' person dug it'
  }
  displayVote5 = () => {
    if (this.state.vote5 === 0) {
      return false
    }
    return this.state.vote5 + ' person dug it'
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
    if (
      this.state.timestamp[3] +
        this.state.timestamp[4] +
        this.state.timestamp[6] +
        this.state.timestamp[7] ===
        '0000' ||
      this.state.timestamp[3] +
        this.state.timestamp[4] +
        this.state.timestamp[6] +
        this.state.timestamp[7] ===
        '1000' ||
      this.state.timestamp[3] +
        this.state.timestamp[4] +
        this.state.timestamp[6] +
        this.state.timestamp[7] ===
        '2000' ||
      this.state.timestamp[3] +
        this.state.timestamp[4] +
        this.state.timestamp[6] +
        this.state.timestamp[7] ===
        '3000' ||
      this.state.timestamp[3] +
        this.state.timestamp[4] +
        this.state.timestamp[6] +
        this.state.timestamp[7] ===
        '4000' ||
      this.state.timestamp[3] +
        this.state.timestamp[4] +
        this.state.timestamp[6] +
        this.state.timestamp[7] ===
        '5000'
    ) {
      this.setState({
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
        submitted: 'false',
        voted: 'false'
      })
      socket.emit('submitted', this.state.submitted)
      socket.emit('voted', this.state.voted)
      socket.emit('topic', this.state.topic)
      socket.emit('response1', this.state.response1)
      socket.emit('vote1', this.state.vote1)
      socket.emit('response2', this.state.response2)
      socket.emit('vote2', this.state.vote2)
      socket.emit('response3', this.state.response3)
      socket.emit('vote3', this.state.vote3)
      socket.emit('response4', this.state.response4)
      socket.emit('vote4', this.state.vote4)
      socket.emit('response5', this.state.response5)
      socket.emit('vote5', this.state.vote5)
    }
    if (this.state.response1 === '' && submitted === 'false') {
      response1 = body
      if (topic === '' || this.state.topic === this.state.name) {
        this.setState({ submitted: 'true' })
        socket.emit('topic', this.state.topic)
        socket.emit('response1', body)
        return false
      } else {
      }
      this.setState({ submitted: 'true' })
      socket.emit('response1', body)
      socket.emit('topic', topic)
      return false
    }
    if (this.state.response2 === '' && submitted === 'false') {
      response2 = body
      if (topic === '' || this.state.topic === this.state.name) {
        this.setState({ submitted: 'true' })
        socket.emit('topic', this.state.topic)
        socket.emit('response1', this.state.response1)
        socket.emit('response2', body)
        return false
      } else {
      }
      this.setState({ submitted: 'true' })
      socket.emit('response1', this.state.response1)
      socket.emit('response2', body)
      socket.emit('topic', this.state.topic)
      return false
    }
    if (this.state.response3 === '' && submitted === 'false') {
      response3 = body
      if (topic === '' || this.state.topic === this.state.name) {
        this.setState({ submitted: 'true' })
        socket.emit('topic', this.state.topic)
        socket.emit('response1', this.state.response1)
        socket.emit('response2', this.state.response2)
        socket.emit('response3', body)
        return false
      } else {
      }
      this.setState({ submitted: 'true' })
      socket.emit('response1', this.state.response1)
      socket.emit('response2', this.state.response2)
      socket.emit('response3', body)
      socket.emit('topic', this.state.topic)
      return false
    }
    if (this.state.response4 === '' && submitted === 'false') {
      response4 = body
      if (topic === '' || this.state.topic === this.state.name) {
        this.setState({ submitted: 'true' })
        socket.emit('topic', this.state.topic)
        socket.emit('response1', this.state.response1)
        socket.emit('response2', this.state.response2)
        socket.emit('response3', this.state.response3)
        socket.emit('response4', body)
        return false
      } else {
      }
      this.setState({ submitted: 'true' })
      socket.emit('response1', this.state.response1)
      socket.emit('response2', this.state.response2)
      socket.emit('response3', this.state.response3)
      socket.emit('response4', body)
      socket.emit('topic', this.state.topic)
      return false
    }
    if (this.state.response5 === '' && submitted === 'false') {
      response2 = body
      if (topic === '' || this.state.topic === this.state.name) {
        this.setState({ submitted: 'true' })
        socket.emit('topic', this.state.topic)
        socket.emit('response1', this.state.response1)
        socket.emit('response2', this.state.response2)
        socket.emit('response3', this.state.response3)
        socket.emit('response4', this.state.response4)
        socket.emit('response5', body)
        return false
      } else {
      }
      this.setState({ submitted: 'true' })
      socket.emit('response1', this.state.response1)
      socket.emit('response2', this.state.response2)
      socket.emit('response3', this.state.response3)
      socket.emit('response4', this.state.response4)
      socket.emit('response5', body)
      socket.emit('topic', this.state.topic)
      return false
    }
  }
  VotePlayer1 = () => {
    let voted = this.state.voted.slice(0)
    if (voted === 'true') {
      return false
    }
    this.setState({ voted: 'true' })
    socket.emit('vote1', this.state.vote1 + 1)
  }
  VotePlayer2 = () => {
    let voted = this.state.voted.slice(0)
    if (voted === 'true') {
      return false
    }
    this.setState({ voted: 'true' })
    socket.emit('vote2', this.state.vote2 + 1)
  }
  VotePlayer3 = () => {
    let voted = this.state.voted.slice(0)
    if (voted === 'true') {
      return false
    }
    this.setState({ voted: 'true' })
    socket.emit('vote3', this.state.vote3 + 1)
  }
  VotePlayer4 = () => {
    let voted = this.state.voted.slice(0)
    if (voted === 'true') {
      return false
    }
    this.setState({ voted: 'true' })
    socket.emit('vote4', this.state.vote4 + 1)
  }
  VotePlayer5 = () => {
    let voted = this.state.voted.slice(0)
    if (voted === 'true') {
      return false
    }
    this.setState({ voted: 'true' })
    socket.emit('vote5', this.state.vote5 + 1)
  }
  bodyChange = e => {
    console.log('bodychange')
    this.setState({ body: e.target.value })
  }
  componentDidMount() {
    setInterval(() => {
      if (
        this.state.response1 !== '' &&
        this.state.response2 === '' &&
        this.state.submitted === 'true'
      ) {
        socket.emit('topic', this.state.topic)
        socket.emit('response1', this.state.response1)
        socket.emit('vote1', this.state.vote1)
      }
      if (
        this.state.response2 !== '' &&
        this.state.response3 === '' &&
        this.state.submitted === 'true'
      ) {
        socket.emit('topic', this.state.topic)
        socket.emit('response1', this.state.response1)
        socket.emit('vote1', this.state.vote1)
        socket.emit('response2', this.state.response2)
        socket.emit('vote2', this.state.vote2)
      }
      if (
        this.state.response3 !== '' &&
        this.state.response4 === '' &&
        this.state.submitted === 'true'
      ) {
        socket.emit('topic', this.state.topic)
        socket.emit('response1', this.state.response1)
        socket.emit('vote1', this.state.vote1)
        socket.emit('response2', this.state.response2)
        socket.emit('vote2', this.state.vote2)
        socket.emit('response3', this.state.response3)
        socket.emit('vote3', this.state.vote3)
      }
      if (
        this.state.response4 !== '' &&
        this.state.response5 === '' &&
        this.state.submitted === 'true'
      ) {
        socket.emit('topic', this.state.topic)
        socket.emit('response1', this.state.response1)
        socket.emit('vote1', this.state.vote1)
        socket.emit('response2', this.state.response2)
        socket.emit('vote2', this.state.vote2)
        socket.emit('response3', this.state.response3)
        socket.emit('vote3', this.state.vote3)
        socket.emit('response4', this.state.response4)
        socket.emit('vote4', this.state.vote4)
      }
      if (this.state.response5 !== '' && this.state.submitted === 'true') {
        socket.emit('topic', this.state.topic)
        socket.emit('response1', this.state.response1)
        socket.emit('vote1', this.state.vote1)
        socket.emit('response2', this.state.response2)
        socket.emit('vote2', this.state.vote2)
        socket.emit('response3', this.state.response3)
        socket.emit('vote3', this.state.vote3)
        socket.emit('response4', this.state.response4)
        socket.emit('vote4', this.state.vote4)
        socket.emit('response5', this.state.response5)
        socket.emit('vote5', this.state.vote5)
      } else {
        return false
      }
    }, 1000)
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
        <div className="container-fluid">
          <div className="whitet">
            <h1>
              <Topic
                getTopic={this.getTopic}
                getTime={this.getTime}
                reset={this.reset}
                 />
            </h1>
            <Compose
              nameChange={this.nameChange}
              bodyChange={this.bodyChange}
              PlayerOneResponse={this.PlayerOneResponse}
            />
          </div>
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
        </div>
      </div>
    )
  }
}

export default App
