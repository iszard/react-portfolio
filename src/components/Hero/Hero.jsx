import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Gavyn Elrick</h1>
        <p className={styles.description}>
          Experienced Full Stack and Frontend Developer with over a decade of
          expertise in creating scalable, responsive, and innovative web
          applications.
        </p>
        <p className={styles.description}>
          Proficient in React, TypeScript, JavaScript, and AWS, with a track
          record of success in roles such as Senior Full Stack Software Engineer
          and Tooling Architect/Lead Engineer.
        </p>
        <p className={styles.description}>
          Skilled in designing intuitive user experiences, streamlining
          development processes, and leading collaborative teams.
        </p>
        <p className={styles.description}>
          Combining a foundation in Computer Science and Digital Production & 3D
          Animation, I bring a unique blend of technical precision and creative
          problem-solving to projects across gaming, social platforms, and
          enterprise solutions, delivering impactful and exceptional results.
        </p>
        <a className={styles.contactBtn} href="mailto:gavynelrick@gmail.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
