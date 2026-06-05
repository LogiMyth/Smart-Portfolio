import { useState } from "react";

function ProjectCard({
  title,
  description,
  link,
  tech,
  image,
}) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="tech-tags">
        {tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      {/* <p>❤️ Likes: {likes}</p>

      <button
        onClick={() => setLikes(likes + 1)}
      >
        Like Project
      </button> */}

      <br /><br />

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <button>View Project</button>
      </a>
    </div>
  );
}

export default ProjectCard;