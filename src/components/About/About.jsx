import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImg.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/educationIcon.png")} alt="Edu icon" className={styles.educationIcon}/>
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>University of California - San Diego</p>
              <p> B.S. in Computer Science &ensp; 2020 - 2024</p>
              <p> M.S. in Computer Science &ensp; 2024 - 2026</p> 	           		         
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Future Career</h3>
              <p>
              I aspire to pursue a career as a software engineer, leveraging my proficiency in both front-end and back-end development. I aim to contribute to the creation of innovative solutions that address the evolving needs of users and enhance their overall experience.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Personalities icon" />
            <div className={styles.aboutItemText}>
              <h3>Personalities</h3>
              <p>
              I would describe myself as a positive, enthusiastic, and highly motivated individual. I am always willing to learn and love to take on new challenges.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Resume icon" />
            <div className={styles.aboutItemText}>
              <h3>Resume</h3>
              <p>You can find more in my Resume: <a style={{ color: 'blue', textDecoration: 'none' }}  href="https://drive.google.com/file/d/1TZYZVClSde7tYtOASxUMNmbk_HL5q_1L/view?usp=sharing">Get My Resume</a></p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
