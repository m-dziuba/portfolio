import { StyledNavbar } from "./Navbar.styled";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#abilities">Abilities</a>
        <a href="#about">About</a>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
