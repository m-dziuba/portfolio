import styled from "styled-components";
export const StyledMenu = styled.ul`
  width: 100%;
  height: 50vh;
  margin: 0;
  padding: 0;
  z-index: 5;
  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(150%)")};
  border-radius: 35px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 4px, inset rgba(0, 0, 0, 0.5) 0px -1px 2px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  a {
    text-decoration: none;
    color: white;
    font-size: 1.55em;
    font-weight: 400;
    text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.9);
    //, rgb(0, 0, 0) 1px 0 0,
    //  rgb(0, 0, 0) 0.540302px 0.841471px 0,
    //  rgb(0, 0, 0) -0.416147px 0.909297px 0px,
    //  rgb(0, 0, 0) -0.989993px 0.14112px 0px,
    //  rgb(0, 0, 0) -0.653644px -0.756803px 0px,
    //  rgb(0, 0, 0) 0.283662px -0.958924px 0px,
    //  rgb(0, 0, 0) 0.96017px -0.279416px 0px;

    padding: 1.45em 0.9em;
  }

  .links {
  }
`;
