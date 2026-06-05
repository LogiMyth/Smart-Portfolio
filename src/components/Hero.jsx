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

          <a href="/Himanshu Upadhyay.pdf" download>
            <button>Download Resume</button>
          </a>
        </div>

        <div className="social-icons">
  <a
    href="https://github.com/LogiMyth"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/LogiMyth"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://instagram.com/him_anshu.740"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a>
</div>
      </div>
    </section>
  );
}

export default Hero;