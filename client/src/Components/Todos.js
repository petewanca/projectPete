import React, { Component } from 'react'

// Components
import Todoitem from './Todoitem'

class Todos extends Component {
    render() {
        return (
            <Todoitem todos={ this.props.todos }/>
        )
    }
}

export default Todos
