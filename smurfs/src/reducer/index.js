import { MOVE_SMURF } from "../actions";

const initialState = {
  smurf: [],
};

export const villageReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_SMURF: {
      return {
        ...state,
        smurf: [...state.smurf, action.payload],
      };
    }
    default:
      return state;
  }
};
