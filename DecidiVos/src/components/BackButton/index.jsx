import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.css";

const BackButton = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/"); // va directamente al Home
  };

  return (
    <button onClick={goHome} className={styles.backButton}>
      ⬅ Volver al inicio
    </button>
  );
};

export default BackButton;
