import useModal from "./useModal";

const ModalFormPage = () => {
  const { open, openModal } = useModal();

  return (
    <div>
      <button onClick={openModal}>trigger</button>
      {open && <div>Form</div>}
    </div>
  );
};

export default ModalFormPage;
