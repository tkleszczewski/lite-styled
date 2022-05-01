import detailContainerStyles from "../DetailContainer.module.scss";
import styles from "./AboutContainer.module.scss";

const AboutContainer = () => {
  return (
    <div>
      <h3 className={detailContainerStyles.detailHeading}>About</h3>;
      <p className={detailContainerStyles.paragraph}>
        The goal of lite-styled is to provide React component library easy to
        style through:
        <ul className={detailContainerStyles.unorderedList}>
          <li className={detailContainerStyles.unorderedListItem}>
            SCSS/CSS modules
          </li>
          <li className={detailContainerStyles.unorderedListItem}>
            Global stylesheet
          </li>
        </ul>
      </p>
      <p className={detailContainerStyles.paragraph}>
        Currently there are no plans to provide support for CSS in JS solutions
      </p>
      <p className={detailContainerStyles.paragraph}>
        lite-styled is compatible with all major bundlers. Works well both with
        JS and TS
      </p>
      <p className={detailContainerStyles.paragraph}>
        Components are developed with a11y guidelines provided by W3C ARiA
      </p>
      <p className={detailContainerStyles.paragraph}>
        Styling of the components is restricted to the minimum, but each part of
        the component is easy to style through props
      </p>
      <p className={detailContainerStyles.paragraph}>
        This documentation is written to provide installation guides as well as
        components docs combining props of each component and usage examples
      </p>
    </div>
  );
};

export default AboutContainer;
