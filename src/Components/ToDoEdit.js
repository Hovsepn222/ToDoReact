import React from "react";


export default class ToDoEdit extends React.Component {

    render() {
        return (
            <>
            <button onClick={() => this.props.toDoEdit(this.props.id)}>Edit</button>
            </>
        )
    }
}