import {
  ADD_TEAM,
  DELETE_TEAM,
  FETCH_TEAM,
  GET_TEAM,
  EDIT_TEAM
} from "../actions/types";

export default function postReducer(state = [], action) {
  switch (action.type) {
    case ADD_TEAM:
      return [...state, action.payload];
    case DELETE_TEAM:
      return state.filter(team => team._id !== action.payload.id);
    case FETCH_TEAM:
      return action.teams;
    case GET_TEAM:
      return state.map(team =>
        team._id === action.team._id
          ? { ...team, editing: !team.editing }
          : { ...team, editing: false }
      );

    case EDIT_TEAM:
      return null;
    default:
      return state;
  }
}
