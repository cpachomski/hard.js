import React from "react";
import Header from "components/header";
import Excercise from "pages/excercise";

class App extends React.Component {
  render() {
    return (
      <>
        <Header appName={"hard.js"} />
        <Excercise />
      </>
    );
  }
}

export default App;
