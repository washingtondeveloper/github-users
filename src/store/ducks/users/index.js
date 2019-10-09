import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  changeDescription: ["nameDescription"],
  addRepos: ["repos"],
  addUser: ["user"]
});

const INITIAL_STATE = { user: null, list: [], nameDescription: "" };

export const addReposReducer = (state = INITIAL_STATE, action) => ({
  ...state,
  list: action.repos
});

export const addUserReducer = (state = INITIAL_STATE, action) => ({
  ...state,
  user: action.user
});

export const changeDescriptionReducer = (state = INITIAL_STATE, action) => ({
  ...state,
  nameDescription: action.nameDescription
});

export default createReducer(INITIAL_STATE, {
  [Types.ADD_REPOS]: addReposReducer,
  [Types.ADD_USER]: addUserReducer,
  [Types.CHANGE_DESCRIPTION]: changeDescriptionReducer
});
