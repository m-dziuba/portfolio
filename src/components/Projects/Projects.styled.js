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
    justify-content: center;
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
`;
