import React, { Component } from 'react'


class Todoitem extends Component {

    getStyle = () => {
        return {
            display: 'flex',
            overflow: 'auto',
            borderBottom: 'solid #ede5e4 1px',
            margin: '2% 0',
            textDecoration: this.props.todos.completed ?
            'line-through' : 'none'
        }
    }

    render() {
        const {userId, id, title} = this.props.todos;
        return (

            <>
                {
                    <div className='row' style={this.getStyle()}>
                        {/* check box for complete || incomplete */}
                        <input type='checkbox' key={userId} style={checkButton} onChange={this.props.handleChange.bind(this, id)} />
                        {/* title of todo */}
                        <p key={id} style={listText}>{title}</p>
                        {/* delete button */}
                        <button style={deleteButton} onClick={this.props.handleDelete.bind(this,id)}>X</button>
                    </div>
                }
            </>
        )
    }
}

// delete button styling
const deleteButton = {
    border: 'none',
    background: '#f55742',
    color: '#fff',
    borderRadius: '50%',
    height: '25px',
    width: '25px',
    marginRight: '2%',
    marginLeft: '2%',
}
// check box styling
const checkButton = {
    marginRight: '2%',
    marginLeft: '2%',
    verticalAlign: 'center'
}

// todo list text styling
const listText = {
    flexGrow: '2'
}

export default Todoitem
