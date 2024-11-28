import { useState } from "react";
import { useDispatch } from "react-redux";
import { buyPate } from "../store/pate/actions";

const BuyPate = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const restockFn = (e) => {
    e.preventDefault();
    dispatch(buyPate(parseInt(input) || 0));
    setInput("");
  };
  return (
    <div>
      <h2>BuyPate</h2>
      <form onSubmit={restockFn}>
        <input
          type="number"
          placeholder="1"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default BuyPate;
