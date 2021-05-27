import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: relative;
  width: 100%;
  background: #5c005e;
  z-index: 5;

  a {
    text-decoration: none;
    color: white;
    font-size: 1.55em;
    font-weight: 400;
    padding: 1.45em 0.9em;
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 2em;
  }
`;
