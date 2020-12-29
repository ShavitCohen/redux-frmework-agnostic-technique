import * as AT from "../../actionTypes";
import { setLoader } from "../../core/loaders/loaders.actions";
import { getTvShows, searchTvShows, setTvShows } from "./search.actions";
import { openShowInfoModal } from "../showInfo/showInfo.actions";
import { debounce } from "lodash";
import createMapMiddleware from "../../createMapMiddleware";

const { SEARCH } = AT;
const feature = SEARCH;

const debouncedFunction = debounce(
  ({ query, dispatch }) =>
    dispatch(query ? searchTvShows({ query }) : setTvShows({ tvShows: [] })),
  1000
);

const globalMap = {};

const featureMap = {
  [AT.USER_TYPING]: ({ action: { payload }, dispatch, getState }) => {
    const query = payload;
    debouncedFunction({ query, dispatch });
  },
  [AT.SEARCH_TV_SHOWS]: ({ action: { payload }, dispatch, getState }) => {
    const q = payload;
    dispatch([setLoader({ name: "search", state: true }), getTvShows({ q })]);
  },
  [AT.GET_TV_SHOWS.SUCCESS]: ({ action: { payload }, dispatch, getState }) => {
    const { data } = payload;
    const tvShows = data.map(({ show: { id, image, name }, score }) => ({
      id,
      score,
      image: image && image.medium,
      name,
    }));

    dispatch([
      setLoader({ name: "search", state: false }),
      setTvShows({ tvShows }),
    ]);
  },
  [AT.GET_TV_SHOWS.ERROR]: ({ action, dispatch, getState }) => {
    // handle error here
  },
  [AT.TV_SHOW_SELECTED]: ({ action: { payload }, dispatch, getState }) => {
    const id = payload;
    dispatch([openShowInfoModal({ id })]);
  },
};

export default createMapMiddleware({ feature, globalMap, featureMap });
