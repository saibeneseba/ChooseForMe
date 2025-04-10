import { Link } from "react-router-dom";
import styles from "./Categories.module.css";

const Categories = () => {
  const categories = [
    { name: "Flip Coin", path: "/flip" },
    { name: "Dice", path: "/dice" },
    { name: "Rock Paper Scissors", path: "/ppt" },
    { name: "Roulette", path: "/ruleta" },
  ];

  return (
    <nav className={styles.categoriesContainer}>
      <div className={styles.categories}>
        {categories.map((cat, index) => (
          <Link key={index} to={cat.path} className={styles.categoryItem}>
            {cat.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Categories;
