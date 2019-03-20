//core - API
export const API_REQUEST = 'API_REQUEST';
const apiAction = (action) => ({
  SOURCE: `${action}`,
  API_REQUEST: `${action}.${API_REQUEST}`,
  SUCCESS: `${action}.SUCCESS`,
  ERROR: `${action}.ERROR`,
});

//core - loaders
export const LOADERS = '[LOADERS]';
export const SET_LOADER = 'SET_LOADER';

//feature - search
export const SEARCH = '[SEARCH]';
export const GET_TV_SHOWS = apiAction('GET_TV_SHOWS');
export const SET_TV_SHOWS = 'SET_TV_SHOWS';
export const TV_SHOW_SELECTED = 'TV_SHOW_SELECTED';
export const SEARCH_TV_SHOWS = 'SEARCH_TV_SHOWS';
export const USER_TYPING = "USER_TYPING";



//feature -showInfo
export const SHOW_INFO = '[SHOW_INFO]';
export const OPEN_SHOW_INFO_MODAL = 'OPEN_SHOW_INFO_MODAL';
export const SET_SHOW_INFO = 'SET_SHOW_INFO';
export const SET_MODAL_STATE = 'SET_MODAL_STATE';
export const GET_SHOW_INFO = apiAction('GET_SHOW_INFO');
