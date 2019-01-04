import React from "react";
import styled from "styled-components";
import Dropdown from "components/dropdown";

const Container = styled.div`
  background-color: #ddd;
  grid-column: 1;
`;

export default () => {
  return (
    <Container>
      <Dropdown.Header text="sup" />
    </Container>
  );
};
