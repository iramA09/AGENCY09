import React from 'react';
import { Link } from 'react-router-dom';

class RippleButton extends React.Component {
  state = {
    rippleStyle: {
      display: 'none',
      left: 0,
      top: 0,
    },
    rippleActive: false,
  };

  handleMouseEnter = (event) => {
    const button = event.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    const rippleSize = Math.max(buttonRect.width, buttonRect.height);
    const rippleX = event.clientX - buttonRect.left - rippleSize / 2;
    const rippleY = event.clientY - buttonRect.top - rippleSize / 2;

    this.setState({
      rippleStyle: {
        display: 'block',
        left: rippleX + 'px',
        top: rippleY + 'px',
        width: rippleSize + 'px',
        height: rippleSize + 'px',
      },
      rippleActive: true,
    });
  };

  handleMouseLeave = () => {
    this.setState({
      rippleActive: false,
    });
  };

  render() {
    const { to, className } = this.props;
    const { rippleActive, rippleStyle } = this.state;

    if (to) {
      return (
        <Link
          className={`ripple-button ${className}`}
          to={to}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {this.props.children}
          <div
            className={`ripple ${rippleActive ? 'ripple__active' : ''}`}
            style={rippleStyle}
          />
        </Link>
      );
    }

    return (
      <button
        className={`ripple-button ${className}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.props.children}
        <div
          className={`ripple ${rippleActive ? 'ripple__active' : ''}`}
          style={rippleStyle}
        />
      </button>
    );
  }
}

export default RippleButton;
