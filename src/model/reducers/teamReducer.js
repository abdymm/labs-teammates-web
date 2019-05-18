import {
  ADD_TEAM,
  DELETE_TEAM,
  FETCH_TEAM,
  GET_TEAM,
  EDIT_TEAM
} from "../actions/types";

const defaultState = {
  fetchTeamAttemp: false,
  fetchTeamError: "",
  addTeamAttemp: false,
  addTeamError: "",
  deleteTeamAttemp: false,
  deleteTeamError: "",
  teams: []
};

export default function postReducer(state = defaultState, action) {
  console.log("State", state);
  console.log("ACTION", action);
  switch (action.type) {
    case FETCH_TEAM.ATTEMPT:
      return {
        ...state,
        fetchTeamAttemp: true
      };
    case FETCH_TEAM.SUCCESS:
      return {
        ...state,
        fetchTeamAttemp: false,
        teams: action.payload
      };
    case FETCH_TEAM.FAILED:
      return {
        ...state,
        fetchTeamAttemp: false,
        fetchTeamError: action.message
      };

    case ADD_TEAM.ATTEMPT:
      return {
        ...state,
        addTeamAttemp: true
      };
    case ADD_TEAM.SUCCESS:
      return {
        ...state,
        addTeamAttemp: false,
        teams: [...state.teams, action.payload]
      };
    case ADD_TEAM.FAILED:
      return {
        ...state,
        addTeamAttemp: false,
        addTeamError: action.message
      };

    case DELETE_TEAM.ATTEMPT:
      return {
        ...state,
        deleteTeamAttemp: true
      };
    case DELETE_TEAM.SUCCESS:
      return {
        ...state,
        deleteTeamAttemp: false,
        teams: state.teams.filter(team => team._id !== action.payload.id)
      };
    case DELETE_TEAM.FAILED:
      return {
        ...state,
        deleteTeamAttemp: false,
        deleteTeamError: action.message
      };

    default:
      return state;
  }
}
