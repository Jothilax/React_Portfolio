import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jothi Lakshmanan</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience using Java Spring-boot, React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="https://drive.google.com/file/d/1e65QTVU2u44cMLhv3-dn1V3c1RdgPtyg/view" target="_blank" className={styles.contactBtn}>
          Hier me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
