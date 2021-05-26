import Navbar from "./Navbar";
import "./css/home.css";
import { ReactComponent as Background } from "./assets/hero-section/hero-section-images.svg";
import { ReactComponent as Scroll } from "./assets/hero-section/call-to-action-scroll.svg";

const Home = () => {
  return (
    <section className="Home">
      <div className="content">
        <Navbar />
        <div className="image-container">
          <Background className="background-images" />
        </div>
        <div className="text-container">
          <div className="text-box">
            <div className="left">
              <h1>Mateusz Dziuba</h1>
              <p>Front-End Developer in the making.</p>
            </div>
            <div className="right">
              <p>
                I'm an Aerospace Engineer who discovered a passion for
                programming
              </p>
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

export default Home;
