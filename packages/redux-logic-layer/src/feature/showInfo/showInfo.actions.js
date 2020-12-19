import * as AT from '../../actionTypes';

const { SHOW_INFO } = AT;

export const openShowInfoModal = ({ id }) => ({
  type: AT.OPEN_SHOW_INFO_MODAL,
  payload: id,
  meta: {
    feature: SHOW_INFO,
  },
});

export const setModalState = ({ state }) => ({
  type: AT.SET_MODAL_STATE,
  payload: state,
  meta: {
    feature: SHOW_INFO,
  },
});

export const getShowInfo = ({ id }) => ({
  type: AT.GET_SHOW_INFO.API_REQUEST,
  meta: {
    feature: SHOW_INFO,
    sourceAction: AT.GET_SHOW_INFO,
    url: `https://api.tvmaze.com/shows/${id}?embed=cast`,
    method: 'GET',
  },
});

export const setShowInfo = ({ show }) => ({
  type: AT.SET_SHOW_INFO,
  payload: show,
  meta: {
    feature: SHOW_INFO,
  },
});
