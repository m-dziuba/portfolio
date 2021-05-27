import { ReactComponent as BackgroundImages } from "../assets/abilities-section/background-images.svg";
import { ReactComponent as Scroll } from "../assets/abilities-section/call-to-action-scroll.svg";

const Abilities = () => {
  return (
    <section className="Abilities portfolio">
      <div className="content">
        <div className="image-container">
          <BackgroundImages className="background-images abilities-images" />
        </div>
        <header>
          <h2>Abilities</h2>
        </header>
        <div className="text-container abilities-text-container">
          <div className="skills">
            <h3>Skills</h3>
            <div className="abilities-text-section">
              <div className="abilities-text">Python</div>
              <div className="abilities-text">JavaScript</div>
              <div className="abilities-text">HTML(5)</div>
              <div className="abilities-text">CSS(3)</div>
              <div className="abilities-text">Bootstrap</div>
            </div>
          </div>
          <div className="tools">
            <h3>Tools</h3>
            <div className="abilities-text-section">
              <div className="abilities-text">WebStorm</div>
              <div className="abilities-text">AdobeXD</div>
              <div className="abilities-text">MS Office</div>
              <div className="abilities-text">Git</div>
            </div>
          </div>
          <div className="languages">
            <h3>Languages</h3>
            <div className="abilities-text-section">
              <div className="abilities-text">Polish</div>
              <div className="abilities-text">English</div>
              <div className="abilities-text">German</div>
            </div>
          </div>
        </div>
        <button className="scroll-action-button">
          <Scroll />
        </button>
      </div>
    </section>
  );
};

export default Abilities;
