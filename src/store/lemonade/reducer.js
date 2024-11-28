import { BUY_LEMONADE, RESTOCK_LEMONADE } from "./actions";

const initialState = {
  numberOfLEMONADE: 0,
  cash: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_LEMONADE:
      return {
        ...state,
        numberOfLemonade: state.numberOfLemonade - action.payload,
      };
      break;

    case RESTOCK_LEMONADE:
      return {
        ...state,
        numberOfLemonade: state.numberOfLemonade + action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
