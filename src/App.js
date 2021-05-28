import { Abilities, About, Home, Projects, SideBar } from "./components";
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
        <SideBar open={open} setOpen={setOpen} />
      </div>
      <Home />
      <Projects id="projects" />
      <Abilities id="abilities" />
      <About />
    </>
  );
}

export default App;
