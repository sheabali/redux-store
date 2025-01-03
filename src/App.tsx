import "./App.css";
import { Button } from "./components/ui/button";
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
        <Button onClick={() => handleIncrement(1)}>Increment</Button>
        <Button onClick={() => handleIncrement(5)}>Increment by 5</Button>
        <div>{count}</div>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>
    </>
  );
}

export default App;
