import styled from "styled-components";

export const StyledAbout = styled.section`
  height: 1050px;
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
    margin-top: 15vh;
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

  .cv {
    border-radius: 135px;
    border: white 2px solid;
    width: 400px;
    position: static;
    text-align: center;
    align-self: center;
    color: white;
    font-size: 1.8em;
    padding: 0.3em;
    margin: 2em 0 0;
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
`;
