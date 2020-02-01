import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../store/actions';

export default function Child() {
  const message = useSelector(state => state.message);
  const dispatch = useDispatch();

  const updateMessage = () => {
    dispatch(actions.updateMessage('Actions are connected'));
  };
  return (
    <div>
      {message}
      <div>
        <button type="button" onClick={updateMessage}>
          Update Message
        </button>
      </div>
    </div>
  );
}
