import { useState } from "react";
import { useDispatch } from "react-redux";
import { restockLemonade } from "../store/lemonade/actions";

const RestockLemonade = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const restockFn = (e) => {
    e.preventDefault();
    dispatch(restockLemonade(parseInt(input) || 0));
    setInput("");
  };
  return (
    <div>
      <h2>RestockLemonade</h2>
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

export default RestockLemonade;
