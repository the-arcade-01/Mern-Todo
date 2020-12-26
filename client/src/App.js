import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const url = "http://localhost:5000/";

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios({
      method:'post',
      url:url,
      data:{
        todo:todo,
      }
    });
    setTodo('');
  };

  useEffect(()=>{
    axios.get(url)
    .then((data)=>{
      setTodos(data.data.data);
      console.log(data.data.data);
    })
    .catch((error)=>console.log(error));
  },[]);

  return (
    <div className="App">
      <h1>MERN Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Enter todo here ..." onChange={(e)=>{setTodo(e.target.value)}} />
      </form>
      <ul>
        {todos.map((todo)=>(
          <li key={todo._id}>{todo.todo} | {moment().fromNow(todo.createdAt)}
          <button onClick={()=>{}}>Update</button><button onClick={()=>{}}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
};

export default App;
