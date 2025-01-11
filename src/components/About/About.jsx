import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <div className={styles.anchorContainer} id="about">
      <section className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img
            className={styles.aboutImage}
            src={getImageUrl("about/aboutImage.png")}
            alt="Me sitting with a laptop"
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img
                src={getImageUrl("about/cursorIcon.png")}
                alt="Cursor icon"
              />
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                  As a Front-End Engineer, I specialize in crafting intuitive,
                  responsive user interfaces that deliver exceptional
                  experiences. Leveraging modern tools like React, TypeScript,
                  and CSS/SCSS, I build scalable, dynamic applications with a
                  keen eye for design and performance.
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img
                src={getImageUrl("about/serverIcon.png")}
                alt="Server icon"
              />
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                  As a Back-End Engineer, I focus on building scalable, secure,
                  and efficient systems that power seamless user experiences.
                  With expertise in Node.js, MongoDB, and cloud technologies
                  like AWS, I design robust architectures and microservices that
                  optimize performance and reliability.
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
              <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>
                  As a UI Designer, I blend creativity with functionality to
                  craft visually stunning and user-friendly interfaces. Using
                  tools like Figma and modern design principles, I ensure every
                  element not only looks great but enhances usability.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
