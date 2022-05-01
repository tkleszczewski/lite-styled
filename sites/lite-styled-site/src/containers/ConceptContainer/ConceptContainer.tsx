import { Outlet } from "react-router-dom";

import styles from "./ConceptContainer.module.scss";

const ConceptContainer = () => {
  return (
    <section>
      <header className={styles.header}>
        <h2>Concept</h2>
      </header>
      <Outlet />
    </section>
  );
};

export default ConceptContainer;
