import FileCode from "../../components/FileCode/FileCode";

import detailContainerStyles from "../DetailContainer.module.scss";
import styles from "./UsageContainer.module.scss";

const jsImport = {
  fileName: "index.js / index.ts / main.js / main.ts /  App.jsx / App.tsx",
  code: `
        import '../node_modules/lite-styled/dist/style.css';

        // rest of the code
    `,
};

const cssImport = {
  fileName: "index.css",
  code: `
        @import url("../node_modules/lite-styled/dist/style.css");

        // rest of the code
    `,
};

const componentFullLibraryImport = {
  fileName: "MyComponent.jsx / js / tsx / ts",
  code: `
        import { Dialog } from 'lite-styled'
    `,
};

const UsageContainer = () => {
  return (
    <div>
      <h3 className={detailContainerStyles.detailHeading}>Usage guide</h3>
      <h4 className={detailContainerStyles.detailHeadingLowerPriority}>
        Default styles import
      </h4>
      <p className={detailContainerStyles.paragraph}>
        In order to apply default styles of the library (this is obligatory){" "}
        <strong className={detailContainerStyles.strongWithUnderline}>
          import
        </strong>{" "}
        <code className={detailContainerStyles.file}>style.css</code>{" "}
        <strong className={detailContainerStyles.strongWithUnderline}>
          file
        </strong>{" "}
        from{" "}
        <code className={detailContainerStyles.directoryPath}>
          node_modules/lite-styled/dist/style.css
        </code>
      </p>
      <p className={detailContainerStyles.paragraph}>
        There are two ways to inlude this styling
      </p>
      <p className={detailContainerStyles.paragraph}>
        First one (through JS/TS bundler):
      </p>
      <FileCode fileName={jsImport.fileName} code={jsImport.code} />

      <p className={detailContainerStyles.paragraph}>
        Second one (through CSS import):
      </p>
      <FileCode
        fileName={cssImport.fileName}
        language="css"
        code={cssImport.code}
      />
      <h4 className={detailContainerStyles.detailHeadingLowerPriority}>
        Specific Component import
      </h4>
      <p className={detailContainerStyles.paragraph}>
        Currently there is only one way to import component from the library. In
        plans for next steps there is importing of a single component not the
        entire library
      </p>
      <FileCode
        fileName={componentFullLibraryImport.fileName}
        language="jsx"
        code={componentFullLibraryImport.code}
      />
    </div>
  );
};

export default UsageContainer;
