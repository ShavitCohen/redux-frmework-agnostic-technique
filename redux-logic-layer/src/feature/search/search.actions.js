import * as AT from './../../actionTypes';

const { SEARCH } = AT;

export const searchTvShows = ({ query }) => ({
  type: `${SEARCH} ${AT.SEARCH_TV_SHOWS}`,
  payload: query,
});

export const userTyping = ({ query }) => ({
  type: `${SEARCH} ${AT.USER_TYPING}`,
  payload: query,
});

export const getTvShows = ({ q }) => ({
  type: `${SEARCH} ${AT.GET_TV_SHOWS.API_REQUEST}`,
  payload: { q },
  meta: {
    feature: SEARCH,
    sourceAction: AT.GET_TV_SHOWS,
    url: 'http://api.tvmaze.com/search/shows',
    method: 'GET',
  },
});

export const setTvShows = ({ tvShows }) => ({
  type: `${SEARCH} ${AT.SET_TV_SHOWS}`,
  payload: tvShows,
});

export const tvShowSelected = ({ id }) => ({
  type: `${SEARCH} ${AT.TV_SHOW_SELECTED}`,
  payload: id,

});