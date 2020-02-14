import React, { Component } from 'react'

class Todoitem extends Component {

    getStyle = () => {
        return {
            display: 'flex',
            overflow: 'auto',
            borderBottom: 'solid #ede5e4 1px',
            margin: '2% 0'
        }
    }

    render() {
        const {userId, id, title} = this.props.todos;
        return (

            <>
                {
                    <div className='row' style={this.getStyle()}>
                        {/* check box for complete || incomplete */}
                        <input type='checkbox' key={userId} style={checkButton}/>
                        {/* title of todo */}
                        <p key={id} style={{flexGrow: '2'}}>{title}</p>
                        {/* delete button */}
                        <button style={deleteButton}>X</button>
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
    marginLeft: '2%'
}
// check box styling
const checkButton = {
    marginRight: '2%',
    marginLeft: '2%',
    verticalAlign: 'center'
}

export default Todoitem
