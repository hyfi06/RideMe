export const destinyRequest = destiny => dispatch => {
  dispatch({
    type: 'SET_DESTINY',
    payload: destiny
  });
};
