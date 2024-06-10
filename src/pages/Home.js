import "./Home.css";
import { Link } from "react-router-dom";
import bgvideo from "../media/evening-bg.mp4";
import { Services } from "../components/Services";
import { BookSection } from "../components/BookSection";
import { PackageSection } from "../components/PackageSection";
import { ContInfo } from "../components/ContInfo";

export const Home = () => {
  return (
    <>
      <div className="container">
        <section className="home" id="home">
          <div className="content">
            <h3>
              Start your <span id="diff">A</span>dventures with us
            </h3>
            <p>Adventure awaits</p>
            <Link className="btn" to="/locations">
              <button className="exp-btn">Explore</button>
            </Link>
          </div>

          <div className="video-container">
            <video src={bgvideo} id="video-slider" loop autoPlay muted></video>
          </div>

          <div className="info">
            <div className="mail">
              <i className="fas fa-envelope" id="ficons"></i>
              <p>
                <a href="mailto:mano8098prasanth@gmail.com">
                mano8098prasanth@gmail.com
                </a>
              </p>
            </div>
            <div className="socialm">
              <i className="fab fa-instagram" id="ficons"></i>
              <p>Tourism</p>
            </div>
            <div className="call">
              <i className="fas fa-phone-alt" id="ficons"></i>
              <p>
                <a href="tel:6383046706">+91-6383046706</a>
              </p>
            </div>
          </div>
        </section>
      </div>
      <BookSection />
      <hr id="line" />
      <PackageSection />
      <hr id="line" />
      <Services />
      <hr id="line" />
      <ContInfo />
      <hr id="line" />
    </>
  );
};
