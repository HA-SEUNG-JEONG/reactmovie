import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo(""); //todo 값이 비어있지 않다면 Form 제출 후 input 값 비워버림
    setTodos((currentArray) => [todo, ...currentArray]); //기존 todo에 currentArray 배열의 원소들을 집어넣어서 새로운 array를 만들고자 할 때 ...를 앞에다 붙이면 된다.
  };
  return (
    <div>
      <h1>My To Dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To do</button>
      </form>
    </div>
  );
}

export default App;
