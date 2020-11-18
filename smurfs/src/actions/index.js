import axios from "axios";

export const MOVE_SMURF = "MOVE_SMURF";
export const START_VILLAGE = "GET_VILLAGE";
export const VILLAGE_SUCCESS = "VILLAGE_SUCCESS";
export const VILLAGE_FAIL = "VILLAGE_FAIL";
export const POST_SMURF = "POST_SMURF";

export const postSmurf = (smurf) => {
  return {
    type: POST_SMURF,
    payload: smurf,
  };
};

//async:
//get initial smurf
//if success add to state
//if error, error to state

/* export const getSmurf = (smurf) => (dispatch) => {
  dispatch({ type: START_VILLAGE });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => dispatch({ type: VILLAGE_SUCCESS, payload: smurf }))
    .catch((err) => dispatch({ type: VILLAGE_FAIL, payload: err.message }));
}; */

export const buildVillage = () => {};
