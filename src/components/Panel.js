import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Panel.css";

class Panel extends Component {
  state = {
    isOpen: false,
    isOpenActive: false
  };

  handleClick = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  handleTransition = event => {
    const isOpening = this.state.isOpen && !this.state.isOpenActive;
    const isClosing = !this.state.isOpen && this.state.isOpenActive;
    const isFlexTransition = event.propertyName.includes("flex-grow");
    if (isFlexTransition && isOpening) {
      this.setState({
        isOpenActive: true
      });
    }
    if (isFlexTransition && isClosing) {
      this.setState({
        isOpenActive: false
      });
    }
  };

  render() {
    const { bottomText, className, middleText, topText } = this.props;

    const c = classNames("panel", this.props.className, {
      open: this.state.isOpen,
      "open-active": this.state.isOpenActive
    });

    return (
      <div
        className={c}
        onClick={this.handleClick}
        onTransitionEnd={this.handleTransition}
      >
        <p>{topText}</p>
        <p>{middleText}</p>
        <p>{bottomText}</p>
      </div>
    );
  }
}

Panel.propTypes = {
  className: PropTypes.string.isRequired,
  topText: PropTypes.string.isRequired,
  middleText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired
};

export default Panel;
