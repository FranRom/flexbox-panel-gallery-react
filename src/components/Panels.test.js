import React from "react";
import { shallow } from "enzyme";

import Panels from "./Panels";

let panels2 = [
    {
      id: "6",
      className: "panel1",
      topText: "Hey",
      middleText: "Let's",
      bottomText: "Dance"
    },
    {
      id: "7",
      className: "panel2",
      topText: "Give",
      middleText: "Take",
      bottomText: "Receive"
    },
    {
      id: "8",
      className: "panel3",
      topText: "Experience",
      middleText: "It",
      bottomText: "Today"
    }
  ];

describe("Panels component", () => {
    it("should render", () => {
        const wrapper = shallow(<Panels colection={panels2} horizontal={true} />)
        expect(wrapper.find("Panel").length).toBe(panels2.length);
        expect(wrapper.hasClass("horizontal")).toBe(true);
    });
});