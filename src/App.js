import React, { Component } from "react";
import Panels from "./components/Panels.js";
import "./App.css";

const PANELS_1 = [
  {
    id: "1",
    className: "panel1",
    topText: "Hey",
    middleText: "Let's",
    bottomText: "Dance"
  },
  {
    id: "2",
    className: "panel2",
    topText: "Give",
    middleText: "Take",
    bottomText: "Receive"
  },
  {
    id: "3",
    className: "panel3",
    topText: "Experience",
    middleText: "It",
    bottomText: "Today"
  },
  {
    id: "4",
    className: "panel4",
    topText: "Give",
    middleText: "All",
    bottomText: "You Can"
  },
  {
    id: "5",
    className: "panel5",
    topText: "Life",
    middleText: "In",
    bottomText: "Motion"
  }
];

const PANELS_2 = [
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

class App extends Component {
  render() {
    return (
      <div className="container">
        <Panels colection={PANELS_1} />
        <Panels colection={PANELS_2} horizontal={true}/>
        <Panels colection={PANELS_1} horizontal={true} />
        <Panels colection={PANELS_2} />
      </div>
    );
  }
}

export default App;
