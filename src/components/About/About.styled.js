import styled from "styled-components";

export const StyledAbout = styled.section`
  background: transparent linear-gradient(180deg, #9b009e 0%, #49044b 100%) 0 0
    no-repeat padding-box;
  overflow: hidden;

  .about-image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }

  .about-images {
    margin-top: 5vh;
  }

  .about-text-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    padding-top: 15em;
    padding-bottom: 15em;
  }

  .about-text {
    margin-bottom: 1.25em;
    text-align: justify;
    font-size: 1.25em;
  }

  .contact-me {
    position: absolute;
    width: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    bottom: -0.5em;
    color: black;
  }

  .contact-me-text {
    font-size: 1.7em;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .email {
    margin-top: 1.3em;
    font-size: 1.3em;
    font-weight: 400;
  }

  .logos {
    width: 400px;
    height: 64px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1em;
  }

  .logo-button {
    border: none;
  }

  .back-to-top {
    border: none;
    padding-top: 2em;
  }

  @media (max-width: 1100px) {
    .about-text-container {
      padding-top: 10em;
    }

    .about-images {
      margin-top: 10vh;
    }

    .email {
      margin-top: 0.65em;
    }
  }
  @media screen and (max-width: 600px) {
    .average-important {
      display: none;
    }
    .less-important {
      display: none;
    }

    .about-images {
      margin-top: -80px;
      z-index: 0;
    }
  }
  @media screen and (max-width: 420px) {
    .about-images {
      margin-top: -150px;
    }
    .about-text {
      font-size: 16px;
    }
    .logos {
      margin-top: 0.4em;
      width: 260px;
    }

    .back-to-top {
      padding-top: 0;
    }

    .logo {
      width: 50px;
    }
  }

  @media (max-width: 375px) {
    .about-text-container {
      padding-top: 7em;
    }

    .less-important {
      display: none;
    }

    .about-images {
      height: 1000px;
      margin-top: 250px;
      z-index: 0;
    }

    .contact-me {
      bottom: 0;
    }

    .email {
      margin-top: 0;
    }
  }
  @media (max-width: 320px) {
    .contact-me-text {
      font-size: 18px;
    }
    .email {
      font-size: 17px;
    }
    .logos {
      width: 200px;
      margin-top: 0;
    }
    .logo {
      width: 35px;
    }
    .about-images {
      margin-top: 220px;
    }
  }
  @media screen and (min-height: 700px) {
    .about-images {
      margin-top: 50px;
      height: 3000px;
    }
    .average-important {
      display: block;
    }
  }

  @media screen and (min-height: 800px) {
    .about-images {
      margin-top: 120px;
      height: 3000px;
    }
  }
  @media screen and (min-height: 1000px) {
    .about-images {
      margin-top: 300px;
    }
  }
  @media screen and (min-height: 1200px) {
    .about-images {
      margin-top: 50%;
    }
  }
`;
