import styles from "./IndexContainer.module.scss";

const IndexContainer = () => {
  return (
    <div className={styles.indexContainer}>
      <h2 className={styles.heading}>
        <a
          className={styles.link}
          target="_blank"
          href="https://www.npmjs.com/package/lite-styled"
        >
          lite-styled
        </a>
      </h2>
    </div>
  );
};

export default IndexContainer;
