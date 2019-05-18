const generateType = type => ({
  ATTEMPT: `${type}_ATTEMPT`,
  SUCCESS: `${type}_SUCCESS`,
  FAILED: `${type}_FAILED`
});

export const ADD_TEAM = generateType("ADD_TEAM");
export const DELETE_TEAM = generateType("DELETE_TEAM");
export const GET_TEAM = generateType("GET_TEAM");
export const EDIT_TEAM = generateType("EDIT_TEAM");
export const FETCH_TEAM = generateType("FETCH_TEAM");
