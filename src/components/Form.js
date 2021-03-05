import React,{useState, useEffect} from 'react'
import './Form.css';
import Forminput from './Forminput';
import Todo from './Todo';
function Form() {
    const addTodo = (data) => {
        fetch('https://rest-api-server-app.herokuapp.com/student',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data) 
        }).then(() => setTodos([...Todos,{id:Math.random()*10, do: data.data}]));
    }
  
    const [Todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://rest-api-server-app.herokuapp.com/student')
        .then(res => res.json())
        .then(data => setTodos(data.data));
    },[]);
    const removeTodo = (id) => {
        fetch(`https://rest-api-server-app.herokuapp.com/student/${id}`, {
            method:'DELETE'
        }) .then(() => {
            let newtodo = Todos.filter(el => el.id !== id);
            setTodos(newtodo);
        });
    };
    return (
        <div className = "main_form">
            <h1> <center>Todo List</center> </h1>
            <Forminput onClick = {addTodo}/>
            {Todos.map(el => (
                <Todo content={el.do} id={el.id} onClick={removeTodo}/>
            ))}
            
        </div>
    )
}

export default Form
