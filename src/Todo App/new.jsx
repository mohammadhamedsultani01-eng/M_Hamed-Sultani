import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function King() {
  const [day, setDay] = useState('');
  
  const [todo, setTodo] = useState(() => {
    const saveTodo = localStorage.getItem('todo');
    return saveTodo ? JSON.parse(saveTodo) : [];
  });

  const addTodo = () => {
    if (day.trim() === "") return;
    setTodo([...todo, { text: day, completed: false }]);
    setDay('');
  };

  const toggelToDo = (targetIndex) => {
    setTodo(
      todo.map((item, index) =>
        index === targetIndex ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTodo = (targetIndex) => {
    setTodo(todo.filter((_, index) => index !== targetIndex));
  };

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h1 className="text-center">Hello World</h1>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your task ?"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
          <button className="btn btn-primary btn-sm" onClick={addTodo}>Add</button>
        </div>
        <ul className="list-group mt-4">
          {todo.map((item, index) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
              <span>
                {item.text} {item.completed && " ✔"}
              </span>
              <div>
                <button className="btn btn-success btn-sm me-2" onClick={() => toggelToDo(index)}>Done</button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default King;
