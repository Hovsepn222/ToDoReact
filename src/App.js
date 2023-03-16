import React from "react";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import {v4} from 'uuid';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoName: "",
            filterByChecked : false,
            filterByUnChecked : false,
            toDoList: [
                {
                    name: "Wash the Car",
                    id: v4(),
                    editable: false,
                    checkStatus: true
                },
                {
                    name: "Pay Bills",
                    id: v4(),
                    editable: false,
                    checkStatus: false
                },
            ],
        };
    }

    onToDoChange = (e) => {
        this.setState({
            toDoName: e.target.value,
        });
    };
    btnClicked = () => {
        this.setState({
            toDoList: [...this.state.toDoList, {name: this.state.toDoName, id: v4(), editable: false, checkStatus: false}],
            toDoName: ""
        });
    };
    toDoDelete = (id) => {
        this.setState({
            toDoList: this.state.toDoList.filter((itm) => itm.id !== id)
        })
    };
    toDoEdit = (id) => {
        this.setState(() =>
            this.state.toDoList.find((itm) => itm.id === id).editable = true
        )
    };
    OnToDoEdit = (id, value) => {
        this.setState(
            {
                toDoList: this.state.toDoList.map((itm) => {
                    if (itm.id === id) {
                        return {
                            ...itm,
                            name: value
                        }
                    }
                    return itm
                }),
            })
    }
    editSave = (id) => {
        this.setState(() =>
            this.state.toDoList.find((itm) => itm.id === id).editable = false
        )
    }
    toDoCheckbox = (id) => {
        this.setState(
            {
                toDoList: this.state.toDoList.map((itm) => {
                    if (itm.id === id) {
                        return {
                            ...itm,
                            checkStatus : !this.state.toDoList.find((itm) => itm.id === id).checkStatus
                        }
                    }
                    return itm
                }),
            })
    }
    handleFilterByChecked = () => {
        this.setState({filterByChecked : !this.state.filterByChecked})
    }
    handleFilterByUnChecked = () => {
        this.setState({filterByUnChecked : !this.state.filterByUnChecked})
    }

    render() {
        return (
            <div>
                <Header
                    toDoName={this.state.toDoName}
                    onToDoChange={this.onToDoChange}
                    addBtn={this.btnClicked}
                    title='To Do List'/>
                <ToDoList toDoList={this.state.toDoList} toDoDelete={this.toDoDelete} toDoEdit={this.toDoEdit}
                          OnToDoEdit={this.OnToDoEdit} editSave={this.editSave} toDoCheckbox={this.toDoCheckbox}
                          filterByChecked={this.state.filterByChecked} filterByUnChecked={this.state.filterByUnChecked}/>
                <button onClick={this.handleFilterByChecked}>Filter By Checked</button> <button onClick={this.handleFilterByUnChecked}>Filter By Unchecked</button>
            </div>
        );
    }
}
