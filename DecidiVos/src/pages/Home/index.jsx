import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.home}>
      <section className={styles.content}>
        <h1>¡Welcome to Choose for Me!</h1>
        <p>Choose a tool from the top bar and let fate decide for you.</p>
      </section>
    </main>
    
  );
};

export default Home;