import { useState, useEffect } from "react";

function Hello() {
  // function destroyFn() {
  //   console.log("destroyed");
  // }
  // function useEffectFn() {
  //   console.log("created");
  //   return destroyFn; //component가 언제 파괴되는지 알고싶으면 useEffectFn 실행 후에 destroyFn을 호출하면 된다.
  // }

  // useEffect(() => {
  //   console.log("hi");
  //   return () => console.log("bye");
  // }, []);

  useEffect(() => {
    console.log("hi");
    return function () {
      console.log("bye");
    };
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
