import styles from "./page.module.css";
import Title from "./components/title/title";
import About from "./components/about/about";
import Projects from "./components/projects/projects";

export default function Home() {
  return (
    <main className={styles.main}>
      <Title/>
      <About/>
      <Projects/>
    </main>
  );
}
