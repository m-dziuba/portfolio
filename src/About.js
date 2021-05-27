import { ReactComponent as BackgroundImages } from "./assets/about-section/background-images.svg";

const About = () => {
  return (
    <section className="About portfolio">
      <div className="content">
        <div className="image-container about-image-container">
          <BackgroundImages className="about-images" />
        </div>
        <header>
          <h2>About</h2>
        </header>
        <div className="about-text-container">
          <div className="about-text">
            I'm an Aerospace Engineer, trying my best to break into the
            programming world.
          </div>
          <div className="about-text">
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
          <div className="about-text">
            I'm also very interested in Machine Learning, AI, cosmos
            exploration, all kinds of engines, rockets and other Aerospace
            technologies.
          </div>
          <button className="cv about-text">Curriculum Vitae (PDF)</button>
        </div>
      </div>
    </section>
  );
};

export default About;
