import React from "react";


export default class ToDoCheckbox extends React.Component {

    render() {
        return (
            <>
                <input type="checkbox" onChange={() => this.props.toDoCheckbox(this.props.id)} defaultChecked={this.props.checkStatus}/>
            </>
        )
    }
}