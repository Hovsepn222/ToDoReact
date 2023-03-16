import ToDoDelete from "./ToDoDelete";
import ToDoEdit from "./ToDoEdit";
import ToDoCheckbox from "./ToDoCheckbox";


const ToDoItem = (props) => {
    return (
        <div>{props.toDo.editable === true ? (<>
            <input onChange={(e) => {props.OnToDoEdit(props.toDo.id, e.target.value)}} value={props.toDo.name}/>
            <button onClick={() => props.editSave(props.toDo.id)}>Save</button></>
            ) :
            (<>
                <div>{props.toDo.name}</div>
                <ToDoCheckbox checkStatus={props.toDo.checkStatus} toDoCheckbox={props.toDoCheckbox} id={props.toDo.id} />
            <ToDoDelete toDoDelete={props.toDoDelete} toDoList={props.toDoList} id={props.toDo.id}/>
            <ToDoEdit toDoEdit={props.toDoEdit} toDoList={props.toDoList} id={props.toDo.id}/> </>)}
        </div>
    )
}

export default ToDoItem