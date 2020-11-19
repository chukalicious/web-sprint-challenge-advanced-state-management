import axios from "axios";

export const START_VILLAGE = "GET_VILLAGE";
export const VILLAGE_SUCCESS = "VILLAGE_SUCCESS";
export const VILLAGE_FAIL = "VILLAGE_FAIL";

export const getVillage = () => (dispatch) => {
  dispatch({ type: START_VILLAGE });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => dispatch({ type: VILLAGE_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: VILLAGE_FAIL, payload: err }));
};

export const populateVillage = () => {};
