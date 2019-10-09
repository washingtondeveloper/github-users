import React from "react";

import "./styles.css";

export default function User() {
  return (
    <div className="card">
      <img
        src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
        className="card-img-top"
        alt=""
      />
      <img
        className="user-image"
        src="https://avatars0.githubusercontent.com/u/1?v=4"
        alt="user"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
      </div>
    </div>
  );
}
