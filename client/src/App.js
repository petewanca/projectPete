import React, { Component } from 'react'
// Components
import Todos from './Components/Todos'
import Button from 'react-bootstrap/Button'

// packages
import axios from 'axios'
// eslint-disable-next-line
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  state = {
    todos: [],
    userInput: ''
  }

  // when component loads, api call to backend
  componentDidMount = () => {
    axios.get('/api/getTodos')
    .then(res => this.setState({todos: res.data}))
    .catch (err => console.log(err));
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

  // set state when user presses key
  addInputTextToState = (e) => {
    this.setState({
        userInput: e.target.value
    })
  }

  // add todo input to state todo list
  addTodoToList = () => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title: this.state.userInput,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }


  render() {
    return (
      <div className='container'>
          {/* input row for submitting new todo to state */}
          <div className='row'>
              <input 
                style={inputBar}
                type='text'
                placeholder='Enter a todo...'
                value={this.state.userInput}
                onChange={this.addInputTextToState}
              />
              <Button
                style={addButton}
                onClick={this.addTodoToList}
              >
                Add Todo
              </Button>
          </div>        
          <Todos 
            todos={this.state.todos}
            todoItemCheckBox={this.todoItemCheckBox}
            todoItemDelete={this.todoItemDelete} 
          />
      </div>
    )
  }
}

// input bar styling
const inputBar = {
  margin: '3%',
  width: '60%'
}

// add todo button styling
const addButton = {
  marginTop: 'auto',
  marginBottom: 'auto'
}

export default App
