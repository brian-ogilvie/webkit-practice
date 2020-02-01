import types from './actionTypes';

const updateMessage = message => ({
  type: types.UPDATE_MESSAGE,
  message,
});

export default {
  updateMessage,
};
