import { useState, useRef } from "react";
import styles from "./FlipCoin.module.css";
import headsImg from "../../assets/heads.svg";
import tailsImg from "../../assets/tails.svg";

const FlipCoin = () => {
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const coinRef = useRef(null);

  const flipCoin = () => {
    if (isFlipping) return;

    const result = Math.random() < 0.5 ? "heads" : "tails";

    // Reset animation
    setAnimationClass("");
    void coinRef.current.offsetWidth; // fuerza el reinicio de animación

    setIsFlipping(true);

    setTimeout(() => {
      setAnimationClass(result === "heads" ? styles.spinHeads : styles.spinTails);

      setTimeout(() => {
        if (result === "heads") setHeadsCount((prev) => prev + 1);
        else setTailsCount((prev) => prev + 1);
        setIsFlipping(false);
      }, 3000);
    }, 100);
  };

  const reset = () => {
    setAnimationClass("");
    setHeadsCount(0);
    setTailsCount(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        <p>Heads: {headsCount}</p>
        <p>Tails: {tailsCount}</p>
      </div>

      <div className={`${styles.coin} ${animationClass}`} ref={coinRef}>
        <div className={styles.heads}>
          <img src={headsImg} alt="Heads" />
        </div>
        <div className={styles.tails}>
          <img src={tailsImg} alt="Tails" />
        </div>
      </div>

      <div className={styles.buttons}>
        <button
          className={styles.flipButton}
          onClick={flipCoin}
          disabled={isFlipping}
        >
          {isFlipping ? "Flipping..." : "Flip Coin"}
        </button>
        <button className={styles.resetButton} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default FlipCoin;
