import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Arrow = styled.span`
  transform: ${props => (props.active ? "rotate(90deg)" : "rotate(0deg)")};
`;

function Header({ text, active }) {
  return (
    <div>
      <span>{text}</span>
      <Arrow>{">"}</Arrow>
    </div>
  );
}

Header.propTypes = {
  text: PropTypes.string,
  active: PropTypes.bool
};

Header.defaultProps = {
  text: "",
  active: false
};

export default Header;
