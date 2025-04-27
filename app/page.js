"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import GigScroll from "../components/GigScroll.jsx";

export default function Home() {
  const [formContent, setFormContent] = useState({
    name: null,
    address: null,
    message: null,
  });

  const summitHandler = (e) => {
    e.preventDefault();
  };

  const btnTrioText = [
    {
      header: "Make Your Mark!",
      body: (
        <>
          <hr />
          <p>
            Whether you have a grand vision, or don't!
            <br />
            GIGnnovate is here to help you make your mark online. <br />
            <br />
            Big or small, every project deserves a strong presence. Whether
            you’re launching a brand, building a business, or just need a
            professional home online, we’ll help you get there. <br />
            <br />
            Bring your ideas, your goals, or just your ambition. GIGnnovate will
            take it from there.
          </p>
          <hr />
        </>
      ),
    },
    {
      header: "Why GIGnnovate?",
      body: (
        <>
          <hr />
          <p>
            GIGnnovate is built to be nimble, flexible, and focused, giving you
            a real partnership from start to finish. <br /> <br />
            No templates. No shortcuts. <br />
            Every project is custom-built to fit your goals, your brand, and
            your audience, not squeezed into a cookie-cutter mold. We
            collaborate with you to create a digital experience that feels
            authentic, functions seamlessly, and grows with you.
            <br /> <br />
            <strong> Creative solutions. Real results.</strong>
          </p>
          <hr />
        </>
      ),
    },
    {
      header: "Let's Connect",
      body: (
        <form onSubmit={summitHandler}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit
            amet consectetur adipiscing elit quisque faucibus.
          </p>
          <label>Name: </label>
          <input
            type="text"
            onChange={(e) =>
              setFormContent((item) => ({
                ...item,
                name: e.target.value,
              }))
            }
          />
          <div className={styles.formCont}>
            <label>Email: </label>
            <input
              type="text"
              onChange={(e) =>
                setFormContent((item) => ({
                  ...item,
                  address: e.target.value,
                }))
              }
            />
          </div>
        </form>
      ),
    },
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
          <h1 style={{ margin: "20px 0 0 0" }}>
            <span style={{ fontSize: "35px", marginTop: "30px" }}>What is</span>
            <br></br>
            <span style={{ fontSize: "70px" }}>GIG</span>nnovate?
          </h1>
          <div className={styles.divideLine} />
          <div className={styles.heroDecrip}>
            <h3>
              <span style={colorGrad()}>GIGnnovate</span> helps creators,
              startups, and small businesses launch modern websites, standout
              branding, inspired content, and smart digital solutions. Built
              fast. Built clear. Built with purpose.
            </h3>
          </div>
        </div>

        <div className={styles.heroTwoContain}>
          <div className={styles.btnGroup}>
            <div
              className={styles.btnHero2}
              onClick={() => triClickHandler("0")}
            >
              Make Your Mark
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
              Launch Your Experience
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
                      <div>{btnTrioText[activeSection].body}</div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className={styles.gigScrollContain} style={{}}>
        <GigScroll />
      </div>
    </div>
  );
}
