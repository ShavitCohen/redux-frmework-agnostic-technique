import * as AT from '../../actionTypes';

const { LOADERS } = AT;

const INIT_STATE = {
  search: false,
  showInfo: false,
};

const loadersReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${LOADERS} ${AT.SET_LOADER}`:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;

  }
};

export default loadersReducer;

