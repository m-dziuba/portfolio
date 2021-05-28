import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";


const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000}
    anchors={["home", "projects", "abilities", "about"]}
    menu={"#sideMenu"}
    fixedElements={".navbar"}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <App />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(<Fullpage />, document.getElementById("react-root"));
