import React from "react";
import { shallow } from "enzyme";
import store from "../../store";
import { Provider } from "react-redux";

import User from "./";

describe("User Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <User />
      </Provider>
    );
  });

  test("Deve renderizar sem erros", () => {
    expect(wrapper).toBeTruthy();
  });
});
