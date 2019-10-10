import { Types, Creators } from "./";

describe("Users Actions", () => {
  describe("Actions Types", () => {
    test("Deve retornar LOADING type", () => {
      expect(Types.LOADING).toEqual("LOADING");
    });

    test("Deve retornar LOADING_USER_FAILURE type", () => {
      expect(Types.LOADING_USER_FAILURE).toEqual("LOADING_USER_FAILURE");
    });

    test("Deve retornar LOADING_USER_SUCCESS type", () => {
      expect(Types.LOADING_USER_SUCCESS).toEqual("LOADING_USER_SUCCESS");
    });

    test("Deve retornar ADD_REPOS type", () => {
      expect(Types.ADD_REPOS).toEqual("ADD_REPOS");
    });

    test("Deve retornar CHANGE_DESCRIPTION type", () => {
      expect(Types.CHANGE_DESCRIPTION).toEqual("CHANGE_DESCRIPTION");
    });
  });
  describe("Actions Creators", () => {
    test("Deve retornar a action loading", () => {
      expect(Creators.loading()).toEqual({ type: "LOADING" });
    });

    test("Deve retornar a action changeDescription", () => {
      expect(Creators.changeDescription("gitUser")).toEqual({
        type: "CHANGE_DESCRIPTION",
        nameDescription: "gitUser"
      });
    });

    test("Deve retornar a action addRepos", () => {
      expect(Creators.addRepos(["repo1", "repo2"])).toEqual({
        type: "ADD_REPOS",
        repos: ["repo1", "repo2"]
      });
    });

    test("Deve retornar a action loadingUserSuccess", () => {
      expect(Creators.loadingUserSuccess("userGit")).toEqual({
        type: "LOADING_USER_SUCCESS",
        user: "userGit"
      });
    });

    test("Deve retornar a action loadingUserFailure", () => {
      expect(Creators.loadingUserFailure("erro")).toEqual({
        type: "LOADING_USER_FAILURE",
        error: "erro"
      });
    });
  });
});
