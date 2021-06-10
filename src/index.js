import App from "./App";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000}
    anchors={["home", "projects", "abilities", "about"]}
    fixedElements={"#sideBar"}
    // menu={"#sideBar"}
    navigation={true}
    navigationTooltips={["Home", "Projects", "Abilities", "About"]}
    render={({ state, fullpageApi }) => {
      console.log(state);
      return (
        <ReactFullpage.Wrapper>
          <App fullpageApi={fullpageApi} />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(<Fullpage />, document.getElementById("react-root"));
