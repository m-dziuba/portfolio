import { ReactComponent as BackgroundImages } from "../../assets/projects-section/stars.svg";
import { ReactComponent as Scroll } from "../../assets/projects-section/call-to-action-scroll.svg";
import { StyledProjects } from "./Projects.styled";

const Projects = () => {
  return (
    <StyledProjects>
      <div className="content">
        <div className="image-container">
          <BackgroundImages className="background-images" />
        </div>
        <header>
          <h2>Projects</h2>
        </header>
        <div className="projects">
          <div className="project">
            <h4 className="title">Sorting algorithm</h4>
            <div className="feature">
              <div className="feature-content">A</div>
            </div>
          </div>
          <div className="project">
            <h4 className="title">Cooking helper</h4>
            <div className="feature">
              <div className="feature-content">A</div>
            </div>
          </div>
          <div className="project">
            <h4 className="title">Web scraper</h4>

            <div className="feature">
              <div className="feature-content">A</div>
            </div>
          </div>
        </div>
        <button className="scroll-action-button">
          <Scroll />
        </button>
      </div>
    </StyledProjects>
  );
};
export default Projects;
