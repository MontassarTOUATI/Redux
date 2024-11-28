import "./App.css";
import { useSelector } from "react-redux";
import RestockPate from "./components/RestockPate";
import BuyPate from "./components/BuyPate";
import RestockLemonade from "./components/RestockLemonade";

function App() {
  const pate = useSelector((state) => state.pate.numberOfPate);
  const cashPate = useSelector((state) => state.pate.cash);

  const lemonade = useSelector((state) => state.lemonade.numberOfLemonade);
  const cashlemonade = useSelector((state) => state.lemonade.cash);

  return (
    <>
      <h1>Number of pate : {pate}</h1>
      <h1>cash pate : {cashPate} DT</h1>
      <RestockPate />
      <BuyPate />

      <h1>Number of lemonade : {lemonade}</h1>
      <RestockLemonade />
    </>
  );
}

export default App;
