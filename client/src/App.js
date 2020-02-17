import React, { Component } from 'react'
// Components
import Todos from './Components/Todos'
import Inputbar from './Components/Inputbar'

// packages
import axios from 'axios'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'get bread from grocery',
        completed: false
      },
      {
        id: 2,
        title: 'take trash out',
        completed: false
      },
      {
        id: 3,
        title: 'call grandma',
        completed: true
      },
      {
        id: 4,
        title: 'go over family budget',
        completed: false
      },
      {
        id: 5,
        title: 'invest in cryptocurrency in 2005',
        completed: false
      },
      {
        id: 6,
        title: 'create a viral meme in 2011',
        completed: true
      },
      {
        id: 7,
        title: 'make a social networking app that dehumanizes human interaction',
        completed: false
      },
      {
        id: 8,
        title: 'did I stutter? get bread from grocery',
        completed: true
      }
    ]
  }

  // when component loads, api call to get random list
  // componentDidMount = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //   .then(res => {
  //     this.setState({todos: res.data})
  //   })
  // }

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
