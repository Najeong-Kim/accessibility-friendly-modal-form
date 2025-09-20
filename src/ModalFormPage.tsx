import ModalContainer from "./modal/ModalContainer";
import useModal from "./useModal";

const ModalFormPage = () => {
  const { open, openModal, closeModal } = useModal();

  return (
    <div className="m-10">
      <button
        className="border border-gray-100 hover:bg-gray-50 focus:bg-gray-100 rounded-2xl px-4 py-2"
        onClick={openModal}
      >
        Open Modal
      </button>
      {open && (
        <ModalContainer onClose={closeModal}>
          <div className="p-6 bg-white rounded-lg shadow-xl">
            <h1 className="text-xl font-semibold mb-4">Modal Title</h1>
          </div>
        </ModalContainer>
      )}
    </div>
  );
};

export default ModalFormPage;
