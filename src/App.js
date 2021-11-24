import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeword(event.target.value);
  console.log("I run all the time");
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' change");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' change");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword & counter' change");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here...."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
