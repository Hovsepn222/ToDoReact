import ToDoDelete from "./ToDoDelete";
import ToDoEdit from "./ToDoEdit";
import ToDoCheckbox from "./ToDoCheckbox";
import React from "react";


export default class ToDoItem extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            tempEditValue : this.props.toDo.name
    }

    }

    onEditValue = (e) => {
        this.setState({tempEditValue : e})
    }


    render() {
        return (
            <div>{this.props.toDo.editable === true ? (<>
                        <input onChange={(e) => {
                            this.onEditValue(e.target.value)
                        }} value={this.state.tempEditValue}/>
                        <button onClick={() => {
                            this.props.OnToDoEdit(this.props.toDo.id, this.state.tempEditValue);
                        }}>Save</button>
                        <button onClick={() => {this.props.cancelEdit(this.props.toDo.id)
                        }}>Cancel</button>
                    </>
                ) :
                (<>
                    <div>{this.props.toDo.name}</div>
                    <ToDoCheckbox checkStatus={this.props.toDo.checkStatus} toDoCheckbox={this.props.toDoCheckbox}
                                  id={this.props.toDo.id}/>
                    <ToDoDelete toDoDelete={this.props.toDoDelete} toDoList={this.props.toDoList} id={this.props.toDo.id}/>
                    <ToDoEdit toDoEdit={this.props.toDoEdit} toDoList={this.props.toDoList}
                              id={this.props.toDo.id}/> </>)}
            </div>
        )
    }
}