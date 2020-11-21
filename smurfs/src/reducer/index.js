import { START_VILLAGE, VILLAGE_SUCCESS, VILLAGE_FAIL } from "../actions";

const initialState = {
  village: [],
  isLoading: false,
  error: "",
};

export const villageReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_VILLAGE:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case VILLAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        village: action.payload,
      };
    case VILLAGE_FAIL:
      return {
        ...state,
        error: action.payload.message,
        isLoading: false,
      };
    default:
      return state;
  }
};
