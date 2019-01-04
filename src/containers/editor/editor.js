import React from "react";
import { ResponsiveMonacoEditor } from "responsive-react-monaco-editor";

class Editor extends React.Component {
  handleOnChange = txt => {
    console.log("changed");
    try {
      console.log(eval(txt));
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <ResponsiveMonacoEditor
          language="javascript"
          theme="vs-dark"
          value={["function foo() {", '\tconsole.log("bar");', "}"].join("\n")}
          options={{
            fontSize: 20,
            minimap: { enabled: false }
          }}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}

export default Editor;
