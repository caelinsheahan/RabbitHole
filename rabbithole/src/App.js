import React, { Component } from 'react'
import logo from './logo.svg'
import responseList from './Components/responseList.js'
//import search from './Components/search.js'
import { BrowserRouter as Router, Path, Route, Link } from 'react-router-dom'
import './App.css'
const server = 'https://arcane-headland-98378.herokuapp.com/messages'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: ['',''],
      votes: [0,0]
    }
  }

  async componentDidMount() {
    const response = await fetch(server)
    const json = await response.json()
    this.setState({ messages: json })
  }
  // async pStar() {}
  render() {
    return (
      <div className="App">
        <div className="container">
          <responseList response={this.response} />
        </div>
      </div>
    )
  }
}

export default App
