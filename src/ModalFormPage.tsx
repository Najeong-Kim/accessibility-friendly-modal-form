import FormModal from "./modal/FormModal";
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
      {open && <FormModal closeModal={closeModal} />}
    </div>
  );
};

export default ModalFormPage;
