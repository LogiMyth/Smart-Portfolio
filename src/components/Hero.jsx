import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Hero() {
  const [message, setMessage] = useState(
    "Java Developer | Full-Stack Web Builder"
  );

  return (
    <section id="home" className="hero">
      <div className="hero-glow"></div>

      <div className="hero-content">
        <h1>
          Hi, I'm <span>Himanshu</span>
        </h1>

        <p>{message}</p>

        <div className="hero-buttons">
          {/* <button
            onClick={() =>
              setMessage("Building projects for Resume & GitHub 🚀")
            }
          >
            Change Text
          </button> */}

          <a href="#projects">
            <button>View Projects</button>
          </a>

          <a href="/Resume.pdf" download>
            <button>Download Resume</button>
          </a>
        </div>

        <div className="social-icons">
          <FaGithub />
          <FaLinkedin />
          <FaInstagram />
        </div>
      </div>
    </section>
  );
}

export default Hero;