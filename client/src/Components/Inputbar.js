import React, { Component } from 'react'
// add-ons
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class Inputbar extends Component {
    state = {
        userInput: ''
    }

    // set state when user presses key
    addInputTextToCompState = (e) => {
        console.log(e.target.value);
        this.setState({
            userInput: e.target.value
        })
    }

    
    // NOT USED CURRENTLY
    render() {
        return (
            // <div className='row'>
            //     {/* input "form" for submitting new todo to state */}
            //     <input style={inputBar} type='text' placeholder='Enter a todo...' value={this.state.userInput} onChange={this.addInputTextToCompState}/>
            //     {/* submit button for sending item to parent state todo array  */}
            //     <Button style={addButton} onClick={this.props.addTodoItem.bind(this.state)}>Add Todo</Button>
            // </div>

                <Form onSubmit={this.props.addTodoItem.bind(this)}>
                    <Form.Group controlId="formText">
                        <Form.Label>Enter a Todo</Form.Label>
                        <Form.Control type="text" placeholder="your text goes here..." />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
        )
    }
}

// input bar styling
// const inputBar = {
//     margin: '3%',
//     width: '60%'
// }

// // add todo button styling
// const addButton = {
//     marginTop: 'auto',
//     marginBottom: 'auto'
// }

export default Inputbar
