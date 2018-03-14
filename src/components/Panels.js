import React, { Component } from "react";
import PropTypes from "prop-types";
import Panel from "./Panel.js";
import "./Panels.css";

class Panels extends Component {
  render() {
    const { horizontal, colection } = this.props;
    const orientationClass = horizontal ? "horizontal" : "";
    
    return (
      <div className={`panels ${orientationClass}`}>
        {colection.map(item => (
          <Panel
            key={item.id}
            className={item.className}
            topText={item.topText}
            middleText={item.middleText}
            bottomText={item.bottomText}
          />
        ))}
      </div>
    );
  }
}

Panels.defaultProps = {
  horizontal: false
};

Panels.propTypes = {
  horizontal: PropTypes.bool,
  colection: PropTypes.array.isRequired
};

export default Panels;
