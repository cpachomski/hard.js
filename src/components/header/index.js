import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  align-items: center;
  z-index: 50;
  padding: 0 25px;
  height: 50px;
  background-color: #242424;
`;

const AppName = styled.h1`
  margin: 0px;
  color: #fff;
  font-size: 28px;
`;

const Header = ({ appName }) => (
  <Container>
    <AppName>{appName}</AppName>
  </Container>
);

Header.propTypes = {
  appName: PropTypes.string
};

export default Header;
