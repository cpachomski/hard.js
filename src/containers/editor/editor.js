import React from "react";
import PropTypes from "prop-types";
import { ResponsiveMonacoEditor } from "responsive-react-monaco-editor";
import { Layout, FileNameTab } from "./styled";

function camelToSnake(string) {
  return string
    .replace(/[\w]([A-Z])/g, function(m) {
      return m[0] + "_" + m[1];
    })
    .toLowerCase();
}

function Editor({ theme, snippetName, code, setCode }) {
  return (
    <Layout>
      <FileNameTab>{`${camelToSnake(snippetName)}.js`}</FileNameTab>
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
  snippetName: PropTypes.string,
  code: PropTypes.string,
  setCode: PropTypes.func
};

Editor.defaultProps = {
  theme: "vs-dark",
  snippetName: "index",
  code: [
    "/**",
    "* Let's get this party started!",
    "**/",
    "",
    "function foo() {",
    '\tconsole.log("bar");',
    "}"
  ].join("\n"),
  setCode: () => null
};

export default Editor;
