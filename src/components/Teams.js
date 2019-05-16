import React from "react";
import { Link } from "react-router-dom";

const styles = {
  borderBottom: "2px solid #eee",
  background: "#fafafa",
  margin: ".75rem auto",
  padding: ".6rem 1rem",
  maxWidth: "500px",
  borderRadius: "7px"
};

export default ({ team: { name, country, _id }, onDelete, onEdit }) => {
  return (
    <div style={styles}>
      <h2>{name}</h2>
      <p>{country}</p>
      <button
        className="btn btn-danger"
        type="button"
        onClick={() => onDelete(_id)}
      >
        Remove
      </button>
      <Link to={`/${_id}`}>
        <button
          className="btn btn-success"
          type="button"
        >
          Edit
        </button>
      </Link>
    </div>
  );
};
