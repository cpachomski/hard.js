import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Editor from "containers/editor";
import SideNav from "containers/side-nav";
import useLocalStorage from "hooks/use-local-storage";
import useCodeEvaluator from "hooks/use-code-evaluator";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;
  height: calc(100vh - 50px);
  width: 100vw;
`;

function Exercise({ name, initialCode }) {
  const codeKey = `hardjs-${name}`;
  const [code, setCode] = useLocalStorage(codeKey, initialCode);
  const [evaluation, evaluate] = useCodeEvaluator(code);

  return (
    <Layout>
      <div>
        <button onClick={() => evaluate(code)}>
          {evaluation.computing ? "Running" : "Evaluate"}
        </button>
        {evaluation.answer && <span>Answer: {evaluation.answer}</span>}
        <SideNav />
      </div>
      <Editor snippetName={name} code={code} setCode={setCode} />
    </Layout>
  );
}

Exercise.propTypes = {
  name: PropTypes.string,
  initialCode: PropTypes.string
};

export default Exercise;
