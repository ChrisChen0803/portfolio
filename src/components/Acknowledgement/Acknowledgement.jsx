import React from 'react'
import styles from "./Acknowledgement.module.css";
export const Acknowledgement = () => {
  return (
    <section id="acknowledgment" className={styles.container} >
        <h2 className={styles.ackTitle}>Acknowledgment</h2>
        <p className={styles.ackContent}>This webpage is built based on the idea and code from the React Portfolio project by CodeCompleteYT. I would like to express our gratitude to the original creators for their work. Original Idea: <a href="https://www.youtube.com/watch?v=YQCDUJ6hhNY" className={styles.ackContent}>React Portfolio Project</a></p>
    </section>
  )
}
