import React from "react";
import { shallow } from "enzyme";
import store from "@/store";
import { Provider } from "react-redux";

import Search from "./";

describe("Search Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Search />
      </Provider>
    );
  });

  test("Deve renderizar sem erros", () => {
    expect(wrapper).toBeTruthy();
  });
});
