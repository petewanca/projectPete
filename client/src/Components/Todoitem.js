import React, { Component } from 'react'


class Todoitem extends Component {

    getStyle = () => {

    }

    render() {
        return (
            <div>
                {
                    this.props.todos.map(item => (
                        <p key={ item.id }>{ item.title }</p>
                    ))
                }
            </div>
        )
    }
}

export default Todoitem
