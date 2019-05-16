import React from "react";
import { connect } from "react-redux";
import Team from "../components/Teams";
import { deleteTeam, getTeam } from "../actions";
import { EDIT_TEAM } from "../actions/types";

function ListTeam({ teams, onDelete, onEdit }) {
  if (!teams.length) {
    return <div>No Team</div>;
  }
  return (
    <div>
      {teams.map(team => {
        return (
          <Team
            team={team}
            onDelete={onDelete}
            onEdit={onEdit}
            key={team._id}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  console.log("ParamPropsLisTTeam", state);
  return {
    teams: state.teams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteTeam(id));
    },
    onEdit: id => {
      dispatch(getTeam(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTeam);
