import { StyledMenu } from "./Menu.styled";
import { bool } from "prop-types";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <div className="links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          {" "}
          <a href="/">Abilities</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </div>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
