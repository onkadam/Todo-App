import React, { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");
  const [currentPriority, setCurrentPriority] = useState("low");

  const handleInputChange = (event) => {
    setCurrentTodo(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setCurrentPriority(event.target.value);
  };

  const handleAddTodo = () => {
    if (currentTodo.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: currentTodo,
        priority: currentPriority,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setCurrentTodo("");
    }
  };
  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={currentTodo}
        onChange={handleInputChange}
        placeholder="Enter a todo"
      />
      <select value={currentPriority} onChange={handlePriorityChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={handleDeleteTodo}>Delete</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} - Priority: {todo.priority}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
