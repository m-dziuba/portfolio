import Navbar from "./Navbar";
import { ReactComponent as Background } from "../assets/hero-section/hero-section-images.svg";
import { ReactComponent as Scroll } from "../assets/hero-section/call-to-action-scroll.svg";

const Home = () => {
  return (
    <section className="Home portfolio">
      <div className="content">
        <Navbar />
        <div className="image-container">
          <Background className="background-images home-images" />
        </div>
        <div className="text-container home-text-container">
          <h1>Mateusz Dziuba</h1>
          <div className="home-text">
            <div className="left">
              <p>Front-End Developer in the making.</p>
            </div>
            <div className="right">
              <p>
                I'm an Aerospace Engineer who discovered a passion for
                programming.
              </p>
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

export default Home;
