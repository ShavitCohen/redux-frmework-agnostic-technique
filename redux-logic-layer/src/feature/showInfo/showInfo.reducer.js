import * as AT from './../../actionTypes';

const INIT_STATE = {
  isOpen: false,
  info: null,
};

const { SHOW_INFO } = AT;

const showInfoReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case `${SHOW_INFO} ${AT.SET_MODAL_STATE}`:
      return { ...state, isOpen: payload };

    case `${SHOW_INFO} ${AT.SET_SHOW_INFO}`:
      return { ...state, info: payload };

    default:
      return state;
  }
};

export default showInfoReducer;

