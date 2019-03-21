import * as AT from './../../actionTypes';

const { SEARCH } = AT;

export const searchTvShows = ({ query }) => ({
  type: AT.SEARCH_TV_SHOWS,
  payload: query,
  meta: {
    feature: SEARCH,
  },
});

export const userTyping = ({ query }) => ({
  type: AT.USER_TYPING,
  payload: query,
  meta: {
    feature: SEARCH,
  },
});

export const getTvShows = ({ q }) => ({
  type: AT.GET_TV_SHOWS.API_REQUEST,
  payload: { q },
  meta: {
    feature: SEARCH,
    sourceAction: AT.GET_TV_SHOWS,
    url: 'https://api.tvmaze.com/search/shows',
    method: 'GET',
  },
});

export const setTvShows = ({ tvShows }) => ({
  type: AT.SET_TV_SHOWS,
  payload: tvShows,
  meta: {
    feature: SEARCH,
  },

});

export const tvShowSelected = ({ id }) => ({
  type: AT.TV_SHOW_SELECTED,
  payload: id,
  meta: {
    feature: SEARCH,
  },
});