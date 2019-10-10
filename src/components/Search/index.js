import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Creators } from "@/store/ducks/users";

import "./styles.css";

export default function Search() {
  const { nameDescription } = useSelector(state => state.users);
  const dispatch = useDispatch();

  function handleSubmit() {
    if (nameDescription.trim().length === 0) return;
    dispatch(Creators.fetchUser(nameDescription));
    dispatch(Creators.resetProperties());
  }

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
        <button
          className="btn btn-primary"
          disabled={!(nameDescription.length > 3)}
          onClick={handleSubmit}
        >
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
