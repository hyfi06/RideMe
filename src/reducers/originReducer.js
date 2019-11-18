const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ORIGIN':
      return {
        ...state,
        origin: action.payload
      };
    default:
      return state;
  }
};
