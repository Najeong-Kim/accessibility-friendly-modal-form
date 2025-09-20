import { useRef } from "react";
import FormModal from "./modal/FormModal";
import useModal from "./useModal";

const ModalFormPage = () => {
  const { open, openModal, closeModal } = useModal();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleCloseModal = () => {
    closeModal();
    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.focus();
      }
    }, 0);
  };

  return (
    <div className="m-10">
      <button
        ref={buttonRef}
        className="border border-gray-100 hover:bg-gray-50 focus:bg-gray-100 rounded-2xl px-4 py-2"
        onClick={openModal}
      >
        Open Modal
      </button>
      {open && <FormModal closeModal={handleCloseModal} />}
    </div>
  );
};

export default ModalFormPage;
