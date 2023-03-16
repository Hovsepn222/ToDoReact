import React from "react";
import ToDoItem from "./ToDoItem";

export default class ToDoList extends React.Component {

    render() {
        return (
            <>
                {this.props.toDoList.map((item) => {
                    return (
                        <ToDoItem toDoList={this.props.toDoList} toDo={item} key={item.id} toDoDelete={this.props.toDoDelete} toDoEdit={this.props.toDoEdit} OnToDoEdit={this.props.OnToDoEdit}/>
                    );
                })}
            </>
        );
    }
}


