import React from "react";
import ToDoItem from "./ToDoItem";

export default class ToDoList extends React.Component {

    render() {
        return (
            <>
                {this.props.toDoList.map((item) => {
                    // If To Do's are filtered by checks and items have been checked
                    if (this.props.filterByChecked && item.checkStatus) {
                            return (
                                <ToDoItem
                                    toDoList={this.props.toDoList}
                                    toDo={item} key={item.id}
                                    toDoDelete={this.props.toDoDelete}
                                    toDoEdit={this.props.toDoEdit}
                                    OnToDoEdit={this.props.OnToDoEdit}
                                    editSave={this.props.editSave}
                                    toDoCheckbox={this.props.toDoCheckbox}
                                    checkStatus={this.props.checkStatus}
                                />)

                    }
                    // If To Do's are filtered by Unchecks and items are Unchecked
                    else if (this.props.filterByUnChecked && !item.checkStatus) {
                        return (
                            <ToDoItem
                                toDoList={this.props.toDoList}
                                toDo={item} key={item.id}
                                toDoDelete={this.props.toDoDelete}
                                toDoEdit={this.props.toDoEdit}
                                OnToDoEdit={this.props.OnToDoEdit}
                                editSave={this.props.editSave}
                                toDoCheckbox={this.props.toDoCheckbox}
                                checkStatus={this.props.checkStatus}
                            />)
                    }
                    // If No Filters are applied
                    else if (!this.props.filterByChecked && !this.props.filterByUnChecked) {
                    return (
                        <ToDoItem
                            toDoList={this.props.toDoList}
                            toDo={item} key={item.id}
                            toDoDelete={this.props.toDoDelete}
                            toDoEdit={this.props.toDoEdit}
                            OnToDoEdit={this.props.OnToDoEdit}
                            editSave={this.props.editSave}
                            toDoCheckbox={this.props.toDoCheckbox}
                            checkStatus={this.props.checkStatus}
                        />
                    );}
                })}
            </>
        );
    }
}


