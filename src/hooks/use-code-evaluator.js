import { useState } from "react";
import weevil from "weevil";

function useCodeEvaluator(code, timeout = 500) {
  const [evaluation, setState] = useState({
    answer: null,
    computing: false,
    error: null
  });

  function evaluate() {
    try {
      setState({
        answer: null,
        computing: true,
        error: false
      });

      const worker = weevil(
        `${code}\n setTimeout(() => weevil.emit("answer", answer), ${timeout});`
      );

      worker.on("answer", answer => {
        setState({ answer, computing: false, error: false });
        worker.kill();
      });
    } catch (error) {
      setState({
        anser: null,
        computing: false,
        error
      });
    }
  }

  return [evaluation, evaluate];
}

export default useCodeEvaluator;
