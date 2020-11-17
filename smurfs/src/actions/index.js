export const MOVE_SMURF = "MOVE_SMURF";

export const moveSmurf = (smurf) => {
  return {
    type: MOVE_SMURF,
    payload: smurf,
  };
};
