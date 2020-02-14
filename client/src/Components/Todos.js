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
                        <Todoitem todos={item} handleChange={this.props.handleChange} />
                    ))
                } 
            </>
        )
    }
}

export default Todos
