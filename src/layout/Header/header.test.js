import React from "react";

import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../store";

import Header from "./";

describe("Component Header", () => {
  test("Deve renderizar sem erros", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Header />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
