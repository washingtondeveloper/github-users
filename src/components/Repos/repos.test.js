import React from "react";
import { shallow } from "enzyme";
import store from "@/store";
import { Provider } from "react-redux";

import Repos from "./";

describe("Repos Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Repos />
      </Provider>
    );
  });

  test("Deve renderizar sem erros", () => {
    expect(wrapper).toBeTruthy();
  });
});
