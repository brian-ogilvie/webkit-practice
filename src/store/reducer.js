import types from './actionTypes';

const initialState = {
  message: 'Welcome to Redux!',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
}
