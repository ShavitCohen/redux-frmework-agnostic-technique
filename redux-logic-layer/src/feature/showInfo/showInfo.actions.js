import * as AT from './../../actionTypes';

const { SHOW_INFO } = AT;

export const openShowInfoModal = ({ id }) => ({
  type: `${SHOW_INFO} ${AT.OPEN_SHOW_INFO_MODAL}`,
  payload: id,
});

export const setModalState = ({ state }) => ({
  type: `${SHOW_INFO} ${AT.SET_MODAL_STATE}`,
  payload: state,
});

export const getShowInfo = ({ id }) => ({
  type: `${SHOW_INFO} ${AT.GET_SHOW_INFO.API_REQUEST}`,
  meta: {
    feature: SHOW_INFO,
    sourceAction: AT.GET_SHOW_INFO,
    url: `https://api.tvmaze.com/shows/${id}?embed=cast`,
    method: 'GET',
  },
});

export const setShowInfo = ({ show }) => ({
  type: `${SHOW_INFO} ${AT.SET_SHOW_INFO}`,
  payload: show,
});
