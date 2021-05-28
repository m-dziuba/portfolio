import { StyledMenu } from "./Menu.styled";
import { bool } from "prop-types";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open} class="links">
      <li data-menuanchor="home" class="active">
        <a href="#home">Home</a>
      </li>
      <li data-menuanchor="projects">
        <a href="#projects">Projects</a>
      </li>
      <li data-menuanchor="abilities">
        {" "}
        <a href="#abilities">Abilities</a>
      </li>
      <li data-menuanchor="about">
        <a href="#about">About</a>
      </li>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
