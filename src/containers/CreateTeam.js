import { connect } from "react-redux";
import { create } from "../model/actions/team";
import NewTeam from "../components/NewTeam";

const mapStateToProps = (state, props) => {
  console.log("Create", state.team);
  console.log("props.match", props.match);
  if (props.match.path!="/") {
    return {
      team: state.team.teams.find(team => team._id === props.match.params._id)
    };
  }
  return { team: null };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTeam: team => {
      dispatch(create(team));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTeam);
