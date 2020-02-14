import React, { Component } from 'react'

// add-ons
import Button from 'react-bootstrap/Button'

class Inputbar extends Component {
    state = {
        
    }

    render() {
        return (
            <div className='row'>
                {/* input "form" for submitting new todo to state */}
                <input style={inputBar} type='text' placeholder='Enter a todo...' />
                <Button style={addButton}>Add Todo</Button>
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

export default Inputbar
