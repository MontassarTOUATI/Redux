import { BUY_PATE, RESTOCK_PATE } from "./actions";

const initialState = {
  numberOfPate: 0,
  cash: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PATE:
      return {
        ...state,
        numberOfPate: state.numberOfPate - action.payload,
      };
      break;

    case RESTOCK_PATE:
      return {
        ...state,
        numberOfPate: state.numberOfPate + action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
