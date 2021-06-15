import styled from "styled-components";

export const StyledAbilities = styled.section`
  background: #9c029f;

  .abilities-images {
    margin-left: -330px;
    margin-top: -200px;
  }

  .abilities-text {
    font-size: 2vw;
    font-weight: 300;
  }

  .abilities-text-section {
    display: flex;
    gap: 5vw;
  }

  .abilities-text-container {
    padding-top: 10em;
  }
  @media screen and (max-width: 1300px) {
    .abilities-text-section {
      flex-wrap: wrap;
    }
    .abilities-text {
      font-size: 1.5em;
    }
  }
  @media screen and (max-height: 920px) {
    .abilities-text-container {
      padding-top: 7em;
    }
  }
  @media screen and (max-width: 700px) {
    .abilities-text-container {
      padding-top: 5em;
    }
    .abilities-text {
      font-size: 20px;
    }
    .abilities-text-section {
      gap: 2vw;
    }
  }
  @media screen and (max-height: 320px) {
    .abilities-text-container {
      padding-top: 2em;
    }
  }
`;
