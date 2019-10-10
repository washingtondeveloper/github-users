import React from "react";
import { useSelector } from "react-redux";
import { BallBeat } from "react-pure-loaders";

import "./styles.css";

export default function User() {
  const { user, error } = useSelector(state => state.users);

  return (
    <div className="card">
      <img
        src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
        className="card-img-top"
        alt="background"
      />
      <img
        className="user-image"
        src={user ? user.avatar_url : require("../../assets/git.png")}
        alt="user"
      />
      <div className="card-body">
        <h5 className="card-title text-center">
          {error ? (
            error.message
          ) : user ? (
            user.login
          ) : (
            <BallBeat color={"#123abc"} loading={true} />
          )}
        </h5>
      </div>
    </div>
  );
}
