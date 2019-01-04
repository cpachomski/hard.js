import React from "react";
import PropTypes from "prop-types";
import { ResponsiveMonacoEditor } from "responsive-react-monaco-editor";
import { Layout, FileNameTab } from "./styled";
import useLocalStorage from "hooks/use-local-storage";

function camelToSnake(string) {
  return string
    .replace(/[\w]([A-Z])/g, function(m) {
      return m[0] + "_" + m[1];
    })
    .toLowerCase();
}

function Editor({ theme, exerciseName, initialCode }) {
  const codeKey = `hardjs-${exerciseName}`;
  const [code, setCode] = useLocalStorage(codeKey, initialCode);

  return (
    <Layout>
      <FileNameTab>{`${camelToSnake(exerciseName)}.js`}</FileNameTab>
      <ResponsiveMonacoEditor
        language="javascript"
        theme={theme}
        value={code}
        options={{
          fontSize: 18,
          lineHeight: 32,
          minimap: { enabled: false }
        }}
        onChange={setCode}
      />
    </Layout>
  );
}

Editor.propTypes = {
  theme: PropTypes.string,
  exerciseName: PropTypes.string,
  initialCode: PropTypes.string
};

Editor.defaultProps = {
  theme: "vs-dark",
  exerciseName: "N-Queens",
  initialCode: [
    "/**",
    "* Let's get this party started!",
    "*/",
    "",
    "function foo() {",
    '\tconsole.log("bar");',
    "}"
  ].join("\n")
};

export default Editor;
