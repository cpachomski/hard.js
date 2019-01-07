import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useCodeEvaluator from "hooks/use-code-evaluator";

const Layout = styled.div`
  background: #eee;
`;

function ResultBox({ submission }) {
  const [evaluation, evaluate] = useCodeEvaluator(submission);

  return (
    <Layout>
      <button onClick={() => evaluate(submission)}>
        {evaluation.done ? "Evaluate" : "Running"}
      </button>
      {evaluation.result && <span>Result: {evaluation.result}</span>}
    </Layout>
  );
}

ResultBox.propTypes = {
  submission: PropTypes.string
};

export default ResultBox;
