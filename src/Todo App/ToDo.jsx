import 'bootstrap/dist/css/bootstrap.min.css';
import './ToDo'
import { useEffect, useState } from 'react';


function Show() {
   const [task, setTask] = useState('')
   const [todos, setTodos] = useState(() => {
      const saveTodo = localStorage.getItem('todos')

      if (saveTodo) {
         return saveTodo ? JSON.parse(saveTodo) : []
      }
   })


   const addTodo = () => {

      if (task.trim() === "") return

      setTodos([...todos, {

         text: task,
         completed: false

      },])
      setTask("")
   }

   const deleteTodo = (indexToDelte) => {
      setTodos(
         todos.filter((todo, index) => index !== indexToDelte)
      )
   }

   const toggelToDo = (toggelToDo) => {
      setTodos(
         todos.map((todo, index) =>
            index === toggelToDo ? { ...todo, completed: !todo.completed } : todo)
      )
   }




   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
   }, [todos])




   return (
      <div className="container mt-5">
         <div className="card shadow p-4">
            <h1 className="text-center mb-4">Todo App</h1>
            <div className="input-group mb-4">

               <input type="text" className='form-control' placeholder='enter your task'
                  value={task} onChange={(e) => setTask(e.target.value)} />


               <button className="btn btn-primary" onClick={addTodo}>Add</button>


            </div>
            <ul className="list-group mt-4">
               {todos.map((todo, index) => (
                  <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                     {<span>
                        {todo.completed && "✔ "}
                        {todo.text}
                        '
                        </span>}

                     <div>
                        <button className="btn btn-success btn-sm me-2 " onClick={() => toggelToDo(index)}>Done</button>
                     <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(index)}>Delete</button>
                     </div>

                  </li>
               ))}
            </ul>
         </div>
      </div>

   )
} export default Show