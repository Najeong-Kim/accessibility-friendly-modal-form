import ModalContainer from "./modal/ModalContainer";
import useModal from "./useModal";

const ModalFormPage = () => {
  const { open, openModal, closeModal } = useModal();

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {open && (
        <ModalContainer onClose={closeModal}>
          <div className="p-10 bg-white">Form</div>
        </ModalContainer>
      )}
    </div>
  );
};

export default ModalFormPage;
