
import styles from "./Home.module.css";
import Categories from "../../components/Categories";

const Home = () => {
  return (
    <main className={styles.home}>
      <Categories />
      <section className={styles.content}>
        <h1>¡Bienvenido a Me la Juego!</h1>
        <p>Elegí una herramienta del destino desde la barra superior.</p>
      </section>
    </main>
  );
};

export default Home;