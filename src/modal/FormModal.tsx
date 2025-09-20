import ModalContainer from "./ModalContainer";

interface FormModalProps {
  closeModal: () => void;
}

const FormModal = ({ closeModal }: FormModalProps) => {
  return (
    <ModalContainer onClose={closeModal}>
      <div className="p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-xl font-semibold mb-4">Modal Title</h1>
      </div>
    </ModalContainer>
  );
};

export default FormModal;
