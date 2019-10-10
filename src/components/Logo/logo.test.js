import React from "react";
import { shallow } from "enzyme";

import Logo from "./";

describe("Logo Component", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Logo />);
  });

  test("Deve renderizar sem erros", () => {
    expect(wrapper).toBeTruthy();
  });

  test("Deve ter uma imagem com o nome git.png", () => {
    expect(wrapper.find("img").length).toBe(1);
    expect(wrapper.find("img").prop("src")).toEqual("git.png");
  });

  test("Deve ter um H1 com titulo GitUsers", () => {
    expect(wrapper.find("h1").length).toBe(1);
    expect(wrapper.find("h1").text("GitUsers")).toEqual("GitUsers");
  });
});
