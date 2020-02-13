import React, { Component } from 'react'
class Todoitem extends Component {

    getStyle = () => {

    }

    render() {
        return (
            <div>
                {
                    this.props.todos.map(item => (
                        <div style={{display: 'flex'}}>
                            <input type='checkbox' key={ item.userId }/>
                            <p key={ item.id }>{ item.title }</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Todoitem
