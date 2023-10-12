// import React, { useState } from 'react';

// const TodoList = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [todos, setTodos] = useState([]);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddTodo = () => {
//     if (inputValue.trim() !== '') {
//       setTodos([...todos, inputValue]);
//       setInputValue('');
//     }
//   };

//   const handleRemoveTodo = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h1>To-Do List</h1>
//       <div>
//         <input type="text" value={inputValue} onChange={handleInputChange} />
//         <button onClick={handleAddTodo}>Add Todo</button>
//       </div>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => handleRemoveTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;


import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Todo</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleRemoveTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

