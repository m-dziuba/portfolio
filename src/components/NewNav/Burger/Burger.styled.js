import styled from "styled-components";

export const StyledBurger = styled.button`
  position: fixed;
  top: 7.5%;
  right: 7.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 4rem;
  height: 3rem;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 4em;
    height: 0.4em;
    background: #fff;
    color: #fff;
    border-radius: 10px;
    position: relative;
    transition: all 0.3s linear;
    transform-origin: 4px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
