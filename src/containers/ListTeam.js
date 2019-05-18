import React from "react";
import { connect } from "react-redux";
import Team from "../components/Teams";
import { destroy, getTeam } from "../model/actions/team";

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
    teams: state.team.teams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(destroy(id));
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
