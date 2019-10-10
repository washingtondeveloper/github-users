import React from "react";
import { useSelector } from "react-redux";

import "./styles.css";

export default function User() {
  const { user } = useSelector(state => state.users);

  return (
    <div className="card">
      <img
        src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
        className="card-img-top"
        alt="background"
      />
      <img className="user-image" src={user && user.avatar_url} alt="user" />
      <div className="card-body">
        <h5 className="card-title text-center">{user && user.login}</h5>
      </div>
    </div>
  );
}
