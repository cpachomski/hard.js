import { useState } from "react";
import weevil from "weevil";

function useCodeEvaluator(code, timeout = 500) {
  const [evaluation, setState] = useState({
    result: null,
    computing: false,
    error: null
  });

  function evaluate() {
    try {
      setState({
        result: null,
        computing: true,
        error: false
      });

      const worker = weevil(
        `${code}\n setTimeout(() => weevil.emit("result", result), ${timeout});`
      );

      worker.on("result", result => {
        setState({ result, computing: false, error: false });
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
