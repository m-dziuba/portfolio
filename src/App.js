import { Abilities, About, Home, Projects } from "./components";
import { Burger, Menu } from "./components";
import { GlobalStyles } from "./global";
import { useRef, useState } from "react";
import { useOnClickOutside } from "./hooks";

function App() {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const [open, setOpen] = useState(false);
  return (
    <>
      <GlobalStyles />
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <Home />
      <Projects />
      <Abilities />
      <About />
    </>
  );
}

export default App;
