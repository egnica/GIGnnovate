"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Home() {
  const novateWords = [
    "Innovate",
    "Elevate",
    "Create",
    "Accelerate",
    "Activate",
    "Motivate",
    "Captivate",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [dynamicWord, setDynamicWord] = useState(novateWords[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % novateWords.length;
        setDynamicWord(novateWords[nextIndex]);
        return nextIndex;
      });
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.heroContain}>
        <h1>
          <span style={{ fontSize: "35px", marginTop: "30px" }}>What is</span>
          <br></br>
          <span style={{ fontSize: "70px" }}>GIG</span>nnovate?
        </h1>
        <hr className={styles.divideLine} />
        <h3>
          GIGnnovate helps creators, startups, and small businesses launch
          modern websites, standout branding, and inspired content. All built
          with speed, clarity, and intention.
        </h3>
        <div className={styles.novateContain}>
          <h1>GIG</h1>
          <h1>+</h1>
          <h1>{dynamicWord}</h1>
          <h1>=</h1>
          <h1>
            <span style={{ fontSize: "50px" }}>GIG</span>nnovate
          </h1>
        </div>
      </div>

      <div className={styles.btnGroup}>
        <div className={styles.btn} onClick={() => setActiveSection("1")}>
          What We Do
        </div>
        <div className={styles.btn} onClick={() => setActiveSection("2")}>
          Why GIGnnovate
        </div>
        <div className={styles.btn} onClick={() => setActiveSection("3")}>
          Let’s Work Together
        </div>
      </div>
      {}
    </div>
  );
}
