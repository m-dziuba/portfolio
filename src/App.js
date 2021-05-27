import { Abilities, About, Home, Projects } from "./components";
import { GlobalStyles } from "./global";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Home />
        <Projects />
        <Abilities />
        <About />
      </div>
    </>
  );
}

export default App;
