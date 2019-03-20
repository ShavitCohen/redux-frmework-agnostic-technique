import * as AT from './../../actionTypes';
import { setLoader } from '../loaders/loaders.actions';
import { getTvShows, searchTvShows, setTvShows } from './search.actions';
import { openShowInfoModal } from '../showInfo/showInfo.actions';
import { debounce } from 'lodash';

const { SEARCH } = AT;

const debouncedFunction = debounce(({ query, dispatch }) => dispatch(query ? searchTvShows({ query }) : setTvShows({ tvShows: [] })), 1000);
export const searchMiddleware = ({ getState, dispatch }) => next => async action => {
  next(action);
  switch (true) {

    case action.type === `${SEARCH} ${AT.USER_TYPING}`: {
      const query = action.payload;
      debouncedFunction({ query, dispatch });
    }
      break;

    case action.type.includes(`${SEARCH} ${AT.SEARCH_TV_SHOWS}`): {
      const q = action.payload;
      dispatch([
        setLoader({ name: 'search', state: true }),
        getTvShows({ q }),
      ]);
    }
      break;

    case action.type.includes(`${SEARCH} ${AT.GET_TV_SHOWS.SUCCESS}`): {
      const { data } = action.payload;
      const tvShows = data.map(({ show: { id, image, name }, score }) => ({
        id,
        score,
        image: image && image.medium,
        name,
      }));

      dispatch([
        setLoader({ name: 'search', state: false }),
        setTvShows({ tvShows }),
      ]);
    }
      break;

    case action.type.includes(`${SEARCH} ${AT.GET_TV_SHOWS.ERROR}`): {
      // handle error here
    }
      break;

    case action.type.includes(`${SEARCH} ${AT.TV_SHOW_SELECTED}`): {
      const id = action.payload;
      dispatch([
        openShowInfoModal({ id }),
      ]);
    }
      break;

    default:
    // do nothing
  }
};