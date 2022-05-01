import clsx from "clsx";

import detailContainerStyles from "../DetailContainer.module.scss";
import styles from "./ComponentContainer.module.scss";

interface StackBlitzLink {
  description: string;
  url: string;
}

interface ComponentContainerProps {
  componentTag: string;
  componentTitle: string;
  componentProps: string[];
  stackBlitzLinks: StackBlitzLink[];
}

const ComponentContainer: React.FC<ComponentContainerProps> = ({
  componentTag,
  componentTitle,
  componentProps,
  stackBlitzLinks,
}) => {
  return (
    <>
      <h3 className={styles.componentTitle}>{componentTitle}</h3>
      <code className={styles.componentTag}>{componentTag}</code>
      <h4 className={styles.propsHeading}>Dialog props:</h4>
      <ul className={styles.propsList}>
        {componentProps.map((componentProp, index) => (
          <li className={styles.propItem} key={index}>
            <code>{componentProp}</code>
          </li>
        ))}
      </ul>
      <h4 className={styles.propsHeading}>Stackblitz examples:</h4>
      <ul className={styles.stackBlitzLinkList}>
        {stackBlitzLinks.map(({ description, url }) => (
          <li className={styles.stackBlitzItem}>
            <span className={styles.stackBlitzItemDescription}>
              {description}
            </span>
            <a target="_blank" className={styles.stackBlitzItemLink} href={url}>
              stackblitz example
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ComponentContainer;
