const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_DESTINY':
      return {
        ...state,
        destiny: action.payload
      };
    default:
      return state;
  }
};
