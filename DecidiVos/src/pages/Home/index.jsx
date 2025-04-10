import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.home}>
      <section className={styles.content}>
        <h1>¡Bienvenido a Me la Juego!</h1>
        <p>Elegí una herramienta del destino desde la barra superior.</p>
      </section>
    </main>
  );
};

export default Home;