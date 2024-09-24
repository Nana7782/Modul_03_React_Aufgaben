import { useState } from "react";

interface Item {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Item[]>([
    { id: 1, text: "Todo 1", completed: false },
    { id: 2, text: "Todo 2", completed: false },
  ]);

  const [input, setInput] = useState<string>("");

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleClick = () => {
    const newTodo: Item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
  };
  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo">
            <span
              onClick={() => handleToggle(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDelete(todo.id)} className="doneBtn">
              -
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add Todo"
        onChange={(element) => setInput(element.currentTarget.value)}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default TodoList;
