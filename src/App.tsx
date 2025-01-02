import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (count: number) => {
    dispatch(increment(count));
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <div>
        <h1>Counter With Redux</h1>
        <button onClick={() => handleIncrement(1)}>Increment</button>
        <button onClick={() => handleIncrement(5)}>Increment by 5</button>
        <div>{count}</div>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
