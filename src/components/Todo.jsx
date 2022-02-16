import React, { useState } from "react";
import "../components/todo.css";
import { addTodo, deleteTodo, removeTodo } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
    const [inputData, setInputData] = useState("");

    const list = useSelector((state) => state.todoReducers.list)
    // console.log(list);
    const dispatch = useDispatch();
    return (
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <figcaption>Add Your List Here</figcaption>
                </figure>
                <div className="addItems">
                    <input
                        type="text"
                        placeholder=" Add Items .. "
                        value={inputData}
                        onChange={(event) => setInputData(event.target.value)}
                    />
                    <i
                        className="fa fa-plus add-btn"
                        onClick={() => dispatch(addTodo(inputData), setInputData(''))}
                    ></i>
                </div>
                <br />
                <div className="ShowItems">
                    {
                        list.map((item) => {
                            return (
                                <div className="eachItem" key={item.id}>
                                    <h3>{item.data}</h3>
                                    <div className="todo-btn"></div>
                                    <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => dispatch(deleteTodo(item.id))}></i>
                                </div>
                            )
                        })
                    }


                </div>
                <br />
                <div className="ShowItems">
                    <button className="btn effect04" data-sm-link-text="Remove All " onClick={()=>dispatch(removeTodo())}><span>Check List</span></button>
                </div>

            </div>
        </div>
    );
};

export default Todo;
