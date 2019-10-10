import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Creators } from "../../store/ducks/users";

import "./styles.css";

export default function Repos() {
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.users);

  const initFetch = useCallback(() => {
    dispatch(Creators.fetchUser());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <ul className="list-group">
      {list.map(repo => (
        <li
          key={repo.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <a href={repo.html_url} target={repo.name}>
            {repo.name}
          </a>
          <span className="badge badge-primary badge-pill">
            {repo.stargazers_count}
          </span>
        </li>
      ))}
    </ul>
  );
}
