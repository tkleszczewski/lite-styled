import clsx from "clsx";
import React, { useCallback } from "react";

import capitalize from "../utlis/capitalize";

import styles from "./SideDrawer.module.scss";

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  sideDrawerPosition?: "left" | "right";
  shouldBackdropClickClose?: boolean;
  onBackdropClick?: () => void;
  backdropClassNames?: string;
  sideDrawerClassNames?: string;
  children?: JSX.Element;
}

const SideDrawer: React.FC<SideDrawerProps> = ({
  isOpen,
  onClose,
  sideDrawerPosition = "right",
  shouldBackdropClickClose = true,
  onBackdropClick = () => {},
  backdropClassNames = "",
  sideDrawerClassNames = "",
  children,
}) => {
  const handleBackdropClick = useCallback(() => {
    onBackdropClick();
    if (shouldBackdropClickClose) {
      onClose();
    }
  }, []);

  const handleStopPropagation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <>
      {isOpen && (
        <div
          onClick={handleBackdropClick}
          className={clsx(styles.backdrop, backdropClassNames)}
        >
          <div
            onClick={handleStopPropagation}
            className={clsx(
              styles.sideDrawer,
              styles[`sideDrawerPosition${capitalize(sideDrawerPosition)}`],
              sideDrawerClassNames
            )}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default SideDrawer;
