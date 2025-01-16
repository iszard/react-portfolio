import PropTypes from "prop-types";

import ImageSlider from "./ImageSlider";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

const ProjectCard = ({
  project: {
    title,
    imageSrc,
    description,
    descriptionWarning,
    skills,
    demo,
    source,
  },
}) => {
  const imageURLs = imageSrc.map((image) => getImageUrl(image));

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <ImageSlider imageURLs={imageURLs} imageAltValue={`Image of ${title}`} />
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
        {demo && (
          <a className={styles.link} href={demo}>
            Demo
          </a>
        )}
        {source && (
          <a className={styles.link} href={source}>
            Source
          </a>
        )}
        {descriptionWarning && (
          <div className={styles.descriptionWarningContainer}>
            <p className={styles.descriptionWarning}>{descriptionWarning}</p>
          </div>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.exact({
    title: PropTypes.string,
    imageSrc: PropTypes.array,
    description: PropTypes.string,
    descriptionWarning: PropTypes.string,
    skills: PropTypes.array,
    demo: PropTypes.string,
    source: PropTypes.string,
  }),
};

export default ProjectCard;
