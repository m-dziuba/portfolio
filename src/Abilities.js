import "./css/abilities.css";
import { ReactComponent as BackgroundImages } from "./assets/abilities-section/background-images.svg";

const Abilities = () => {
  return (
    <section className="Abilities">
      <div className="content">
        <div className="image-container">
          <BackgroundImages className="abilities-image-container" />
        </div>
        <header>
          <h2>Abilities</h2>
        </header>
        <div className="text-container">
          <div className="skills">
            <h3>Skills</h3>
            <div className="skills-text">aaa</div>
          </div>
          <div className="tools">
            <h3>Tools</h3>
            <div className="skills-text">aaa</div>
          </div>
          <div className="languages">
            <h3>Languages</h3>
            <div className="skills-text">aaa</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abilities;
