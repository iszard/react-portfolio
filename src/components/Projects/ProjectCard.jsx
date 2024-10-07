import PropTypes from "prop-types";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.iamge}
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li className={styles.skill} key={id}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={demo}>
          Demo
        </a>
        <a className={styles.link} href={source}>
          Source
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.exact({
    title: PropTypes.string,
    imageSrc: PropTypes.string,
    description: PropTypes.string,
    skills: PropTypes.array,
    demo: PropTypes.string,
    source: PropTypes.string,
  }),
};

export default ProjectCard;
