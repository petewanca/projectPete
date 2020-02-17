import React, { Component } from 'react'

// Components
import Todoitem from './Todoitem'


class Todos extends Component {
    render() {
        return (
            <>
                {
                    // for every item in todos, generate a todoitem component
                    this.props.todos.map(item => (
                        <Todoitem key={item.id * .035} todos={item} todoItemCheckBox={this.props.todoItemCheckBox} todoItemDelete={this.props.todoItemDelete}/>
                    ))
                } 
            </>
        )
    }
}

export default Todos
