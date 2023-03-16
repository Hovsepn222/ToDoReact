import React from "react";


export default class ToDoDelete extends React.Component {


    render() {
        return (
            <>
                <button onClick={() => this.props.toDoDelete(this.props.id)}>Delete</button>
            </>
        )
    }
}

