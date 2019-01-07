import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Editor from "containers/editor";
import ResultBox from "containers/result-box";
import useLocalStorage from "hooks/use-local-storage";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;
  height: calc(100vh - 50px);
  width: 100vw;

  > *:first-child {
    grid-column: 1;
  }

  > *: nth-child(2) {
    grid-column: 2;
    grid-row: 1/3;
  }

  >*: nth-child(3) {
    grid-column: 2;
    grid-row: 3;
  }
`;

function Exercise({ name, initialCode }) {
  const codeKey = `hardjs-${name}`;
  const [code, setCode] = useLocalStorage(codeKey, initialCode);

  return (
    <Layout>
      <div />
      <Editor snippetName={name} code={code} setCode={setCode} />
      <ResultBox submission={code} />
    </Layout>
  );
}

Exercise.propTypes = {
  name: PropTypes.string,
  initialCode: PropTypes.string
};

export default Exercise;
