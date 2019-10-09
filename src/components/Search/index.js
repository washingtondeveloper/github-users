import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Creators } from "../../store/ducks/users";

import "./styles.css";

export default function Search() {
  const { nameDescription } = useSelector(state => state.users);
  const dispatch = useDispatch();

  return (
    <div className="input-group mb-2">
      <input
        type="text"
        className="form-control"
        id="inlineFormInputGroup"
        placeholder="GitUser"
        value={nameDescription}
        onChange={e => dispatch(Creators.changeDescription(e.target.value))}
      />
      <div className="input-group-prepend">
        <button className="btn btn-primary">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
