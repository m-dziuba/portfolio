import { Abilities, About, Home, Projects } from "./components";
import { GlobalStyles } from "./global";

function App(props) {
  return (
    <>
      <GlobalStyles />
      <Home fullpageApi={props.fullpageApi} />
      <Projects fullpageApi={props.fullpageApi} />
      <Abilities fullpageApi={props.fullpageApi} />
      <About fullpageApi={props.fullpageApi} />
    </>
  );
}

export default App;
