import React from "react";

import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "@/store";

import Content from "./";

describe("Component Content", () => {
  test("Deve renderizar sem erros", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Content />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
