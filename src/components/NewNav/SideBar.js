import Burger from "./Burger";
import Menu from "./Menu";
import { StyledSideBar } from "./SideBar.styled";

const SideBar = ({ open, setOpen }) => {
  return (
    <StyledSideBar>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </StyledSideBar>
  );
};

export default SideBar;
