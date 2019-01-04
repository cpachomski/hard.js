import React from "react";
import Header from "components/header";
import Excercise from "pages/excercise";

import exercises from "exercises";

class App extends React.Component {
  render() {
    const { name, code } = exercises[0];

    return (
      <>
        <Header appName={"hard.js"} />
        <Excercise name={name} initialCode={code} />
      </>
    );
  }
}

export default App;
