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

  // when component loads, api call to backend
  componentDidMount = () => {
    axios.get('/api/todos')
    .then(res => {
      this.setState({todos: res.data})
    }).catch (err => console.log(err));
  }

  // handle check box change at todoitem component level
  todoItemCheckBox = (id) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
    })
  }

  // handle deletion of todoitem at todoitem component level
  todoItemDelete = (id) => {
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
        <Todos todos={ this.state.todos } todoItemCheckBox={this.todoItemCheckBox} todoItemDelete={this.todoItemDelete} />
      </div>
    )
  }
}

export default App
