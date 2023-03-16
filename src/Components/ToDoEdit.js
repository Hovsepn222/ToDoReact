import React from "react";


export default class c extends React.Component {

    render() {
        return (
            <>
            <button onClick={() => this.props.toDoEdit(this.props.id)}>Edit</button>
            </>
        )
    }
}