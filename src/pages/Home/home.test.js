import React from "react";

import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../store";

import Home from "./";

describe("Component Home", () => {
  test("Deve renderizar sem erros", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
