import React from "react";

import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "@/store";

import Footer from "./";

describe("Component Footer", () => {
  test("Deve renderizar sem erros", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Footer />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
