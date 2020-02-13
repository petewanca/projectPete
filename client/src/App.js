import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
// Components
import Todos from './Components/Todos'

// packages
import axios from 'axios'


class App extends Component {
  state = {
    todos: []
  }

  componentDidMount = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => {
      this.setState({todos: res.data})
    })
  }

  render() {
    return (
      <Todos todos={ this.state.todos }/>
    )
  }
}

export default App
