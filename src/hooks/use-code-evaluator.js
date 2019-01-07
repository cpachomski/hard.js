import { useState } from "react";
import weevil from "weevil";

function useCodeEvaluator(code, timeout = 500) {
  const [evaluation, setState] = useState({
    result: null,
    done: true,
    error: null
  });

  function evaluate() {
    try {
      setState({
        result: null,
        done: false,
        error: false
      });

      const worker = weevil(
        `${code}\n setTimeout(() => weevil.emit("result", result), ${timeout});`
      );

      worker.on("result", result => {
        setState({ result, done: true, error: false });
      });
    } catch (error) {
      setState({
        anser: null,
        done: true,
        error
      });
    }
  }

  return [evaluation, evaluate];
}

export default useCodeEvaluator;
