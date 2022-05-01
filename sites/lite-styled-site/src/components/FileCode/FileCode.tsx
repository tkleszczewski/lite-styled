import clsx from "clsx";
import Highlight, { defaultProps, Language } from "prism-react-renderer";

import styles from "./FileCode.module.scss";

interface FileCodeProps {
  code: string;
  fileName?: string | null;
  language?: Language;
  codeClassName?: string;
}

const FileCode: React.FC<FileCodeProps> = ({
  fileName = null,
  code,
  language = "ts" as Language,
  codeClassName = "",
}) => {
  return (
    <>
      <p className={styles.fileName}>{fileName}</p>
      <Highlight {...defaultProps} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={clsx(className, styles.code, codeClassName)}
            style={style}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </>
  );
};

export default FileCode;
