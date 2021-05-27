import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

  body, html {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Poppins, sans-serif;
  }

  section {
    position: relative;
    padding: 0;
    margin: 0;
    top: 0;
    height: 955px;
  }

  header {
    margin-top: 4em;
    width: 100%;
    text-align: center;
  }

  h1 {
    font-size: 5em;
    margin: 0;
  }

  h2 {
    font-size: 4em;
    font-weight: 500;
    color: white;
    margin: 0;
  }

  h3 {
    font-size: 3.1em;
    font-weight: 400;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.55em;
    margin: 0;
  }

  button {
    background: none;
    cursor: pointer;
  }

  .content {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  .scroll-action-button {
    background: none;
    border: none;
    position: absolute;
    z-index: 0;
    bottom: 1em;
    left: 50%;
    margin-left: -67.0955px;
    cursor: pointer;
  }

  .image-container {
    position: absolute;
    width: 100%;
    overflow-x: hidden;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  .background-images {
    position: relative;
    z-index: 1;
  }

  .text-container {
    position: absolute;
    box-sizing: border-box;
    top: 0;
    width: 100%;
    z-index: 2;
    padding: 0 15vw;
    color: white;
  }
`;
