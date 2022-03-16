import React from "react";
import Header from "./component/header";
import Headline from "./component/headline";
import "./app.css";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts!"
        ></Headline>
      </section>
    </div>
  );
}

export default App;
