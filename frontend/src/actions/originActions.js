export const originRequest = origin => dispatch => {
  dispatch({
    type: 'SET_ORIGIN',
    payload: origin
  });
};
