import styled from "styled-components";

export const StyledProjects = styled.section`
  background: transparent
    linear-gradient(0deg, rgba(155, 0, 158, 1) 0%, rgba(73, 4, 75, 1) 100%) 0 0
    no-repeat padding-box;

  .projects {
    height: 50vh;
    width: 75vw;
    padding: 9em 12.5vw;
    display: flex;
    justify-content: center;
    gap: 1em;
    color: white;
  }

  .project {
    width: 25vw;
  }

  .title {
    text-align: center;
    font-size: 1.55em;
  }

  .feature {
    margin-left: 7.5%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    vertical-align: center;
    width: 85%;
    padding-top: 85%;
    background: #3b003d;
    border-radius: 50%;
    position: relative;
  }

  .feature-content {
    position: absolute;
    display: block;
    top: 7.5%;
    width: 85%;
    height: 85%;
    border-radius: 50%;
    background: white;
    color: black;
  }
  @media (max-width: 1100px) {
    .projects {
      flex-wrap: wrap;
      justify-content: space-around;
      height: 65vh;
      padding: 2em 12.5vw;
    }
    .project {
      width: 25vw;
      //padding: 0 4em;
    }

    .feature {
      margin: 0;
      width: 100%;
      padding-top: 100%;
    }
    h4 {
      margin-top: 0;
    }
    .title {
      font-size: 2.5vw;
    }
  }
  @media (max-width: 880px) {
    .project {
      width: 30vw;
    }
  }
  @media (max-width: 750px) {
    .project {
      width: 35vw;
    }
  }
  @media (max-width: 600px) {
    .title {
      font-size: 19px;
    }
  }
  @media (max-width: 320px) {
    .title {
      font-size: 16px;
    }
  }
`;
