import { StyledNavbar } from "./Navbar.styled";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="links">
        <a href="/">Home</a>
        <a href="/">Projects</a>
        <a href="/">Abilities</a>
        <a href="/">About</a>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
