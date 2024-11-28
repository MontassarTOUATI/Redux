const BUY_PATE = "BUY_PATE";
const buyPate = (num) => {
  return {
    type: BUY_PATE,
    payload: num,
  };
};

const RESTOCK_PATE = "RESTOCK_PATE";
const restockPate = (num) => {
  return {
    type: RESTOCK_PATE,
    payload: num,
  };
};

export { BUY_PATE, buyPate, RESTOCK_PATE, restockPate };
