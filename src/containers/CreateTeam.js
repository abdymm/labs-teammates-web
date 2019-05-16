import { connect } from "react-redux";
import { create } from "../actions";
import NewTeam from "../components/NewTeam";

const mapStateToProps = (state, props) => {
  if (props.match) {
    return {
      team: state.teams.find(item => item._id === props.match.params._id)
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
