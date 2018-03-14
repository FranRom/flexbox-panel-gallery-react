import React from "react";
import { shallow } from "enzyme";

import Panel from "./Panel";

describe("Panel Component", () => {
  it("should render", () => {
    const wrapper = shallow(
      <Panel className="panel1" topText="tt" middleText="mt" bottomText="bt" />
    );
    expect(wrapper.find("p").length).toBe(3);
    expect(
      wrapper
        .find("p")
        .at(0)
        .text()
    ).toBe("tt");
    expect(
      wrapper
        .find("p")
        .at(1)
        .text()
    ).toBe("mt");
    expect(
      wrapper
        .find("p")
        .at(2)
        .text()
    ).toBe("bt");
    expect(wrapper.hasClass("panel")).toBe(true);
    expect(wrapper.hasClass("panel1")).toBe(true);
  });

  it("should handle click events", () => {
    const wrapper = shallow(
      <Panel className="panel1" topText="tt" middleText="mt" bottomText="bt" />
    );

    expect(wrapper.hasClass("open")).toBe(false);
    wrapper.simulate("click");
    expect(wrapper.hasClass("open")).toBe(true);

    expect(wrapper.hasClass("open-active")).toBe(false);
    wrapper.simulate("transitionend", { propertyName: "flex-grow" });
    expect(wrapper.hasClass("open-active")).toBe(true);

    wrapper.simulate("click");
    expect(wrapper.hasClass("open")).toBe(false);
    wrapper.simulate("transitionend", { propertyName: "flex-grow" });
    expect(wrapper.hasClass("open-active")).toBe(false);
  });
});