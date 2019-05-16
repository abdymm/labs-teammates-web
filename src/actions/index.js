// index.js
import {
  ADD_TEAM,
  DELETE_TEAM,
  FETCH_TEAM,
  EDIT_TEAM,
  GET_TEAM
} from "./types";
import axios from "axios";

const apiUrl = "http://localhost:4000/teams";

export const create = ({ name, country }) => {
  return dispatch => {
    console.log("TeamName", name);
    console.log("TeamCountry", country);
    return axios
      .post(`${apiUrl}/add`, { name, country })
      .then(response => {
        console.log("ResponseAdd", response);
        dispatch(createSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const createSuccess = data => {
  console.log("ResponseAddData", data);
  return {
    type: ADD_TEAM,
    payload: {
      _id: data._id,
      name: data.name,
      country: data.country
    }
  };
};

export const deleteSuccess = id => {
  return {
    type: DELETE_TEAM,
    payload: {
      id
    }
  };
};

export const deleteTeam = id => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/delete/${id}`)
      .then(response => {
        dispatch(deleteSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetch = teams => {
  return {
    type: FETCH_TEAM,
    teams
  };
};

export const fetchAll = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(response => {
        dispatch(fetch(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const getTeamSuccess = team => {
  return {
    type: GET_TEAM,
    team
  };
};

export const getTeam = id => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/get/${id}`)
      .then(response => {
        dispatch(getTeamSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
