import { StyledMenu } from "./Menu.styled";
import { bool } from "prop-types";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <div className="links">
        <a href="/">Home</a>
        <a href="/">Projects</a>
        <a href="/">Abilities</a>
        <a href="/">About</a>
      </div>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
