import * as AT from './../../actionTypes';
import { setLoader } from '../loaders/loaders.actions';
import { getShowInfo, setModalState, setShowInfo } from './showInfo.actions';

const { SHOW_INFO } = AT;

export const showInfoMiddleware = ({ getState, dispatch }) => next => async action => {
  next(action);
  switch (true) {
    case action.type.includes(`${SHOW_INFO} ${AT.OPEN_SHOW_INFO_MODAL}`): {
      const id = action.payload;

      dispatch([
        setModalState({ state: true }),
        setLoader({ name: 'showInfo', state: true }),
        getShowInfo({ id }),
      ]);
    }
      break;

    case action.type.includes(`${SHOW_INFO} ${AT.GET_SHOW_INFO.SUCCESS}`): {
      const show = action.payload.data;
      dispatch([
        setLoader({ name: 'showInfo', state: false }),
        setShowInfo({ show }),
      ]);
    }
      break;

    default:
    // do nothing
  }
};