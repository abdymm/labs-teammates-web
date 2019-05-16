// NewPost.js
import React from "react";

class NewTeam extends React.Component {
  constructor(props) {
    super(props);
    console.log("constru", this.props.team);

    this.state = {
      name: this.props.team ? this.props.team.name : "",
      country: this.props.team ? this.props.team.country : ""
    };
  }

  componentDidMount() {
    console.log("hai", this.props.team);
  }

  componentWillReceiveProps(nextProps) {
    console.log("NEXT", nextProps);
    console.log("NewProps", nextProps.team)
    console.log("OldProps", this.props.team)
    this.setState({ name: nextProps.team.name });
    this.setState({ country: nextProps.team.country });
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() && this.state.country.trim()) {
      this.props.onAddTeam(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      name: "",
      country: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Team Name"
              className="form-control"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="Country"
              className="form-control"
              name="country"
              onChange={this.handleInputChange}
              value={this.state.country}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={this.handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewTeam;
