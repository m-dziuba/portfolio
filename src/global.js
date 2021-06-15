import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


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
    position: relative;
    background: none;
    cursor: pointer;
    z-index: 5;
  }

  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  nav {
    width: 100%;
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
        margin-left: -61.3665px;
    cursor: pointer;
  }

  .image-container {
    position: absolute;
    width: 100%;
    overflow-x: hidden;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 0;
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
  .call-to-action-scroll {
    width: 70%;
  }

  body.fp-viewing-home {
    #fp-nav {
      transform: translateX(10vw);
    }
  }

  #fp-nav {
    transition: transform 1s ease-in-out;

    ul {
      li {
        a {
          span {
            background: white;
          }
        }

        .fp-tooltip {
          font-family: Poppins, sans-serif;
          top: -11px;
          font-size: 20px;
          font-weight: 400;
        }
      }
    }
  }

  #fp-nav.fp-right {
    right: 5vw;
  }

  @media screen and (max-width: 1400px) {
    h1 {
      margin-bottom: 1em;
    }
  }

  @media (max-width: 1100px) {
    header {
      margin-top: 2em;
    }
  }

  @media screen and (max-width: 920px) {
    h1 {
      font-size: 8vw;
    }
  }

  @media screen and (max-width: 800px) {
    h1 {
      margin-bottom: 1em;
    }
    h3{
      margin-top: 0.5em;
      margin-bottom: 0.25em;
    }

    p {
      font-size: 25px;
    }
  }

  @media screen and (max-width: 700px) {
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 35px;
    }

    h3 {
      margin-top: 0.5em;
      font-size: 30px;
    }
    h4{
      font-size: 25px;
    }

    p {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 380px) {
    p {
      font-size: 18px;
    }
  }
  
  @media screen and (max-width: 320px) {
    h4{
      margin-bottom: 0;
    }
    p {
      font-size: 16px;
    }
    .call-to-action-scroll{
      width: 50%;
    }
    button{
      height: 70px;
    }
    
  }


`;
