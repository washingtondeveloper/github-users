import reducer from "./";

describe("Users Reducer", () => {
  test("Deve retornar o state default", () => {
    expect(reducer(undefined, undefined)).toEqual({
      user: null,
      list: [],
      nameDescription: "",
      loading: false,
      error: null
    });
  });

  test("Deve adicionar uma nova lista de repositórios", () => {
    expect(
      reducer(undefined, { type: "ADD_REPOS", repos: ["repo_1", "repo_2"] })
    ).toEqual({
      user: null,
      list: ["repo_1", "repo_2"],
      nameDescription: "",
      loading: false,
      error: null
    });
  });

  test("Deve adicionar uma novo Usuário", () => {
    expect(
      reducer(undefined, { type: "LOADING_USER_SUCCESS", user: "new_user" })
    ).toEqual({
      user: "new_user",
      list: [],
      nameDescription: "",
      loading: false,
      error: null
    });
  });

  test("Deve mudar o valor da descrição", () => {
    expect(
      reducer(undefined, {
        type: "CHANGE_DESCRIPTION",
        nameDescription: "descrição"
      })
    ).toEqual({
      user: null,
      list: [],
      nameDescription: "descrição",
      loading: false,
      error: null
    });
  });

  test("Deve mudar o status do loading para true", () => {
    expect(
      reducer(undefined, {
        type: "LOADING"
      })
    ).toEqual({
      user: null,
      list: [],
      nameDescription: "",
      loading: true,
      error: null
    });
  });

  test("Deve adicionar um erro", () => {
    expect(
      reducer(undefined, {
        type: "LOADING_USER_FAILURE",
        error: "User not found"
      })
    ).toEqual({
      user: null,
      list: [],
      nameDescription: "",
      loading: false,
      error: "User not found"
    });
  });
});
