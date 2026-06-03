import { useState } from "react";

function About() {
  const [show, setShow] = useState(true);

  return (
    <section id="about" data-aos="fade-up">
      <h2>About Me</h2>

      {/* <button onClick={() => setShow(!show)}>
        {show ? "Hide About" : "Show About"}
      </button> */}

        <p>
          I am currently a 3rd-year college student with a passion for software development and
          solving complex problems. My technical core lies in <strong>Java and Data Structures &
          Algorithms (DSA)</strong>, which helps me write efficient and optimized code. Alongside 
          problem-solving, I love building real-world applications using <strong>Web Development 
          technologies</strong>.
        </p>
        <br></br>
        <p>I have already built a few projects where I turned code into functional web applications (you can check them out below!). One of my biggest strengths is that I am an <strong>extremely quick learner</strong>—I enjoy picking up new frameworks, languages, and tools rapidly to adapt to any project's needs.</p>
        <br></br>
        <p>When I am not coding or solving algorithmic challenges, you will find me exploring new hobbies and learning about emerging tech trends.</p>
        <br></br>
        <p><strong>Let’s connect!</strong> Whether you want to discuss a project, a tech stack, or internship opportunities, feel free to reach out.</p>
    </section>
  );
}

export default About;