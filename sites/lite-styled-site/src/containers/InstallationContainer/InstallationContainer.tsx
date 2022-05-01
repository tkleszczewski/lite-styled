import detailContainerStyles from "../DetailContainer.module.scss";
import styles from "./InstallationContainer.module.scss";

const InstallationContainer = () => {
  return (
    <div>
      <h3 className={detailContainerStyles.detailHeading}>
        Installation guide
      </h3>
      <p className={detailContainerStyles.paragraph}>
        lite-styled is distributed through npm
      </p>
      <p className={detailContainerStyles.paragraph}>
        To install lite-styled, run
        <code className={detailContainerStyles.codeQuote}>
          npm install lite-styled
        </code>
        in your npm project
      </p>
      <p className={detailContainerStyles.paragraph}>
        lite-styled dependencies are: React, ReactDOM, clsx. Considering that
        you most probably have working React project install clsx. run
        <code className={detailContainerStyles.codeQuote}>
          npm install clsx
        </code>
        in your npm project
      </p>
    </div>
  );
};

export default InstallationContainer;
