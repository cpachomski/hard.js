import React from "react";
import styled from "styled-components";
import Editor from "containers/editor";
import SideNav from "containers/side-nav";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  height: 100vh;
  width: 100vw;
`;

export default () => (
  <Layout>
    <SideNav text="sup" />
    <Editor />
  </Layout>
);
