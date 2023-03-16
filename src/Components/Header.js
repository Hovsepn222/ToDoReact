import React from "react";

export default class Header extends React.Component {


    render() {
        return (
            <>
                <p>{this.props.title}</p>
                <input value={this.props.toDoName} onChange={this.props.onToDoChange}/>
                <button onClick={this.props.addBtn}>add</button>
            </>
        );
    }
}
