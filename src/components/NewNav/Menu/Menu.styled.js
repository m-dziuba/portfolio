import styled from "styled-components";
export const StyledMenu = styled.nav`
  position: fixed;
  width: 10%;
  box-sizing: border-box;
  left: 0;
  z-index: 5;
  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};

  a {
    text-decoration: none;
    color: white;
    font-size: 1.55em;
    font-weight: 400;
    padding: 1.45em 0.9em;
  }

  .links {
    width: 100%;
    background: none;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }
`;
