"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import GigScroll from "../components/GigScroll.jsx";

export default function Home() {
  const btnTrioText = [
    {
      header: "THIS TEXT1",
      body: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
    },
    {
      header: "THIS TEXT2",
      body: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.",
    },
    {
      header: "THIS TEXT3",
      body: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. Cursus mi pretium tellus duis convallis tempus leo. Tempus leo eu aenean sed diam urna tempor. Urna tempor pulvinar vivamus fringilla lacus nec metus.",
    },

    ,
  ];

  const [activeSection, setActiveSection] = useState(null);
  const [isHidden, setIsHidden] = useState(false);

  const triClickHandler = (num) => {
    if (num == activeSection) {
      setIsHidden(false);
      setActiveSection(null);
    } else {
      setIsHidden(true);
      setActiveSection(num);
    }
  };

  console.log(isHidden);
  const colorGrad = () => {
    return { color: "blue" };
  };

  const singleBoxVariant = {
    start: { opacity: 0 },
    hover: {
      scale: 1.1,
      rotate: "2deg",
      backgroundColor: "rgb(109, 109, 252)",
    },
    click: {
      scale: 0.9,
      rotate: 0,
    },
    animate: {
      rotateX: 180,
    },
  };

  return (
    <div className={styles.page}>
      <div className={styles.headerContain}>
        <div className={styles.heroOneContain}>
          <h1>
            <span style={{ fontSize: "35px", marginTop: "30px" }}>What is</span>
            <br></br>
            <span style={{ fontSize: "70px" }}>GIG</span>nnovate?
          </h1>
          <hr className={styles.divideLine} />
          <div className={styles.heroDecrip}>
            <h3>
              <span style={colorGrad()}>GIGnnovate</span> helps creators,
              startups, and small businesses launch modern websites, standout
              branding, and inspired content. All built with speed, clarity, and
              intention.
            </h3>
          </div>
        </div>

        <div className={styles.heroTwoContain}>
          <div className={styles.btnGroup}>
            <div
              className={styles.btnHero2}
              onClick={() => triClickHandler("0")}
            >
              What We Do
            </div>
            <div
              className={styles.btnHero2}
              onClick={() => triClickHandler("1")}
            >
              Why GIGnnovate
            </div>
            <div
              className={styles.btnHero2}
              onClick={() => triClickHandler("2")}
            >
              Let’s Work Together
            </div>
          </div>
          <AnimatePresence mode="wait">
            {isHidden && (
              <motion.div
                key={`key to reveal ${isHidden}`}
                initial={{ height: 0, backgroundColor: "#ffff" }}
                animate={{ height: "100%", backgroundColor: "#e1e6e6" }}
                exit={{ height: 0, backgroundColor: "#ffff" }}
                style={{ overflow: "hidden" }}
                className={styles.threeButtonReveal}
              >
                <AnimatePresence mode="wait">
                  {activeSection ? (
                    <motion.div
                      key={`eachButton: ${activeSection}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={styles.revealText}
                    >
                      <motion.h1 initial={{ x: -100 }} animate={{ x: 0 }}>
                        {btnTrioText[activeSection].header}
                      </motion.h1>
                      <p>{btnTrioText[activeSection].body}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* <div style={{ paddingTop: "90px" }}></div> */}
      <GigScroll />
    </div>
  );
}
