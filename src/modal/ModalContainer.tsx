import React, { useEffect } from "react";

interface ModalContainerProps {
  onClose: () => void;
  children: React.ReactNode;
}

const ModalContainer = ({ onClose, children }: ModalContainerProps) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="max-h-[90vh] overflow-y-auto w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
