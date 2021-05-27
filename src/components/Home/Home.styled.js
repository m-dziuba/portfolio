import styled from "styled-components";

export const StyledHome = styled.section`
  background: #49044b;

  .home-images {
    top: -4em;
    left: -33em;
  }
  .home-text-container {
    padding-top: 18em;
    padding-bottom: 18em;
  }

  .home-text {
    display: flex;
    min-height: 180px;
  }

  .left {
    flex: 1 1 60%;
  }

  .right {
    position: relative;
    flex: 1 1 40%;
    box-sizing: border-box;
  }

  .right > * {
    position: absolute;
    bottom: 0;
  }
`;
