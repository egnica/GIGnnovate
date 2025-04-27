import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import styles from "../app/page.module.css";

function GigScroll() {
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
  const [dynamicWord, setDynamicWord] = useState(novateWords[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % novateWords.length;
        setDynamicWord(novateWords[nextIndex]);
        return nextIndex;
      });
    }, 4000); // Change word every X seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.novateContain}>
      <h1>GIG</h1>
      <h1>+</h1>
      <AnimatePresence mode="wait">
        <motion.h1
          style={{ width: "350px" }}
          key={dynamicWord}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          {dynamicWord}
        </motion.h1>
      </AnimatePresence>
      <h1>=</h1>
      <h1>
        <span style={{ fontSize: "70px" }}>GIG</span>nnovate
      </h1>
    </div>
  );
}

export default GigScroll;
