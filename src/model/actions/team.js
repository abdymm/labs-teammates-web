// index.js
import {
  fetchAll as httpFetchAll,
  create as httpCreate,
  destroy as httpDestroy
} from "./api";
import { FETCH_TEAM, ADD_TEAM, DELETE_TEAM } from "./types";

export const fetchAll = () => async dispatch => {
  dispatch({ type: FETCH_TEAM.ATTEMPT });

  try {
    const { data } = await httpFetchAll();
    // const { success, data: responseData, message, errorCode } = data;
    // if (success) {
    dispatch(fetchSuccess(data));
    // } else {
    //   dispatch({
    //     type: FETCH_TEAM.FAILED,
    //     message: errorCode + ":" + message
    //   });
    // }
  } catch (errorMessage) {
    dispatch({
      type: FETCH_TEAM.FAILED,
      message: errorMessage
    });
  }
};
export const fetchSuccess = teams => {
  return {
    type: FETCH_TEAM.SUCCESS,
    payload: teams
  };
};

export const create = team => async dispatch => {
  dispatch({ type: ADD_TEAM.ATTEMPT });

  try {
    const { data } = await httpCreate(team.name, team.country);
    dispatch(createSuccess(data));
  } catch (errorMessage) {
    dispatch({
      type: ADD_TEAM.FAILED,
      message: errorMessage
    });
  }
};
export const createSuccess = team => {
  return {
    type: ADD_TEAM.SUCCESS,
    payload: team
  };
};

export const destroy = teamId => async dispatch => {
  dispatch({ type: DELETE_TEAM.ATTEMPT });

  try {
    const { data } = await httpDestroy(teamId);
    dispatch(destroySuccess(data));
  } catch (errorMessage) {
    dispatch({
      type: DELETE_TEAM.FAILED,
      message: errorMessage
    });
  }
};
export const destroySuccess = id => {
  return {
    type: DELETE_TEAM.SUCCESS,
    payload: {
      id
    }
  };
};
