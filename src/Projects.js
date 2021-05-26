import "./css/projects.css";
import { ReactComponent as BackgroundImages } from "./assets/projects-section/stars.svg";
import { ReactComponent as Scroll } from "./assets/projects-section/call-to-action-scroll.svg";

const Projects = () => {
  return (
    <section className="Projects">
      <div className="content">
        <div className="image-container background">
          <BackgroundImages />
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
        <button>
          <Scroll />
        </button>
      </div>
    </section>
  );
};
export default Projects;
