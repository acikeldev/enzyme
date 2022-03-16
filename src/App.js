import React from "react";
import Header from "./component/header";
import Headline from "./component/headline";
import "./app.css";

const tempArr = [
  {
    firstName: "Joe",
    lastName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true,
  },
];

function App() {
  return (
    <div className="App">
      <Header></Header>
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts!"
          tempArr={tempArr}
        ></Headline>
      </section>
    </div>
  );
}

export default App;
