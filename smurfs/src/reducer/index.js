import {
  MOVE_SMURF,
  START_VILLAGE,
  VILLAGE_SUCCESS,
  VILLAGE_FAIL,
  POST_SMURF,
} from "../actions";

const initialState = {
  smurf: [],
  isLoading: false,
};

export const villageReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
