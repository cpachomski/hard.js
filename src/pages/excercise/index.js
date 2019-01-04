import React from "react";
import styled from "styled-components";
import Editor from "containers/editor";
import SideNav from "containers/side-nav";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;
  height: calc(100vh - 50px);
  width: 100vw;
`;

export default () => (
  <Layout>
    <SideNav text="sup" />
    <Editor />
  </Layout>
);
