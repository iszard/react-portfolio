import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <div className={styles.anchorContainer} id="experience">
      <section className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div className={styles.skill} key={id}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
          <ul className={styles.history}>
            {history.map((histItem, id) => {
              return (
                <li className={styles.historyItem} key={id}>
                  <div className={styles.historyItemHeader}>
                    <img
                      src={getImageUrl(histItem.imageSrc)}
                      alt={`${histItem.organization} logo`}
                    />
                    <div className={styles.historyItemDetails}>
                      <h3>{`${histItem.role}`}</h3>
                      <h2>{`${histItem.organization}`}</h2>
                      <p>{`${histItem.startDate} - ${histItem.endDate}`}</p>
                    </div>
                  </div>
                  <ul className={styles.historyDetails}>
                    {histItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};
