import React from 'react'
import PropTypes from "prop-types";

function Button ({ text, onClick, styleClass, type = "button" })  {
    return (
      <button className={`btn ${styleClass}`} onClick={onClick} type={type}>
        {text}
      </button>
    );
  };
  
  Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    styleClass: PropTypes.string, // Pass additional class names for styling
    type: PropTypes.string, // Button type (button, submit, reset)
  };
  
  Button.defaultProps = {
    onClick: () => {},
    styleClass: "",
  };
  
  export default Button;