import React, { Component } from 'react'
// Components
import Todos from './Components/Todos'
import Inputbar from './Components/Inputbar'

// packages
import axios from 'axios'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  state = {
    todos: []
  }

  // when component loads, api call to get random list
  componentDidMount = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => {
      this.setState({todos: res.data})
    })
  }

  // handle change at todoitem component level
  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
    })
  }

  // handle delete at todoitem component level
  handleDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter(item => {
        return item.id !== id
      })
    })
  }

  render() {
    return (
      <div className='container'>
        <Inputbar />
        <Todos todos={ this.state.todos } handleChange={this.handleChange} handleDelete={this.handleDelete} />
      </div>
    )
  }
}

export default App
