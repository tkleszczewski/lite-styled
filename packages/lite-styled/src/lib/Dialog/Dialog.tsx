import React, { useState, useCallback } from "react";

import clsx from "clsx";

import styles from "./Dialog.module.scss";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  onBackdropClick?: () => void;
  shouldBackdropClickClose?: boolean;
  backdropClassNames?: string;
  dialogClassNames?: string;
  children?: JSX.Element;
}

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  onBackdropClick = () => {},
  shouldBackdropClickClose = true,
  backdropClassNames = "",
  dialogClassNames = "",
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
            className={clsx(styles.dialog, dialogClassNames)}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
