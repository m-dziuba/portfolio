import { ReactComponent as BackgroundImages } from "../../assets/about-section/background-images.svg";
import { ReactComponent as Linkedin } from "../../assets/about-section/linkedin-logo.svg";
import { ReactComponent as Github } from "../../assets/about-section/GitHub-Mark-64px.svg";
import { ReactComponent as Facebook } from "../../assets/about-section/f_logo_RGB-Black_58.svg";
import { ReactComponent as Scroll } from "../../assets/about-section/call-to-action-scroll.svg";
import { StyledAbout } from "./About.styled";

const About = (props) => {
  return (
    <StyledAbout className="section">
      <div className="content">
        <div className="image-container about-image-container">
          <BackgroundImages className="background-images about-images" />
        </div>
        <header>
          <h2>About</h2>
        </header>
        <div className="text-container about-text-container">
          <div className="about-text average-important">
            I'm an Aerospace Engineer, trying my best to break into the
            programming world.
          </div>
          <div className="about-text less-important">
            My first exposure to programming was during the first semester of my
            degree at Warsaw University of Technology and ever since I've been
            interested in becoming a programmer my self.
          </div>
          <div className="about-text">
            My main professional goal is to find a job that will give me an
            opportunity to improve my current skills as well as acquire new
            ones. My focus is to become a Front-End Developer and transition to
            Back-End or Full-Stack in the future.{" "}
          </div>
          <div className="about-text less-important">
            I'm also very interested in Machine Learning, AI, cosmos
            exploration, all kinds of engines, rockets and other Aerospace
            technologies.
          </div>
        </div>
        <div className="contact-me">
          <div className="contact-me-text">contact me</div>
          <div className="email">mateusz.dziuba97@gmail.com</div>
          <div className="logos">
            <button className="logo-button">
              <Linkedin />
            </button>
            <button className="logo-button">
              <Github />
            </button>
            <button className="logo-button">
              <Facebook />
            </button>
          </div>
          <button
            className="back-to-top"
            onClick={() => props.fullpageApi.moveTo("home")}
          >
            <Scroll />
          </button>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
