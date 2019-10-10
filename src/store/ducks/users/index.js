import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  changeDescription: ["nameDescription"],
  addRepos: ["repos"],
  loading: null,
  loadingUserSuccess: ["user"],
  loadingUserFailure: ["error"],
  resetProperties: null,
  fetchUser: nameDescription => {
    return dispatch => {
      dispatch(Creators.loading());
      fetch(
        `https://api.github.com/users/${
          nameDescription ? nameDescription : "reactjs"
        }/repos`
      )
        .then(res => res.json())
        .then(repos => {
          if (repos.message === "Not Found") {
            dispatch(
              Creators.loadingUserFailure({ message: "Usuario não encontrado" })
            );
          } else {
            dispatch(Creators.addRepos(repos));
            dispatch(Creators.loadingUserSuccess(repos[0].owner));
          }
        })
        .catch(error =>
          dispatch(Creators.loadingUserFailure({ message: error.message }))
        );
    };
  }
});

const INITIAL_STATE = {
  user: null,
  list: [],
  nameDescription: "",
  loading: false,
  error: null
};

const addReposReducer = (state = INITIAL_STATE, action) => ({
  ...state,
  list: action.repos
});

const loadingUserFailureReducer = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  error: action.error
});

const loadingReducer = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: true
});

const loadingUserSuccessReducer = (state = INITIAL_STATE, action) => ({
  ...state,
  user: action.user,
  loading: false
});

const resetPropertiesReducer = (state = INITIAL_STATE, action) => INITIAL_STATE;

export const changeDescriptionReducer = (state = INITIAL_STATE, action) => ({
  ...state,
  nameDescription: action.nameDescription,
  loading: false
});

export default createReducer(INITIAL_STATE, {
  [Types.LOADING]: loadingReducer,
  [Types.LOADING_USER_FAILURE]: loadingUserFailureReducer,
  [Types.LOADING_USER_SUCCESS]: loadingUserSuccessReducer,
  [Types.ADD_REPOS]: addReposReducer,
  [Types.CHANGE_DESCRIPTION]: changeDescriptionReducer,
  [Types.RESET_PROPERTIES]: resetPropertiesReducer
});
