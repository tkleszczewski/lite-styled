import { Outlet } from "react-router-dom";

import styles from "./SectionContainer.module.scss";

interface SectionContainerProps {
  title: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ title }) => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
      </header>
      <Outlet />
    </section>
  );
};

export default SectionContainer;
