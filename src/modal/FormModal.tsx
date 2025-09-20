import { useEffect, useRef, useState } from "react";
import FormField from "./FormField";
import ModalContainer from "./ModalContainer";
import SubmitButton from "./SubmitButton";

interface FormModalProps {
  closeModal: () => void;
}

const FormModal = ({ closeModal }: FormModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const titleRef = useRef<HTMLHeadingElement>(null);

  const titleId = "form-modal-title";
  const descriptionId = "form-modal-description";

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name:", name, "Email:", email);
    closeModal();
  };

  return (
    <ModalContainer
      onClose={closeModal}
      titleId={titleId}
      descriptionId={descriptionId}
    >
      <div className="p-6 bg-white rounded-lg shadow-xl">
        <h1
          ref={titleRef}
          id={titleId}
          tabIndex={-1}
          className="text-xl font-semibold mb-4"
        >
          연락처 폼
        </h1>
        <p id={descriptionId} className="sr-only">
          이름과 이메일을 입력하여 연락처 정보를 제출하세요.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            id="name"
            label="이름"
            type="text"
            value={name}
            onChange={setName}
            required
          />
          <FormField
            id="email"
            label="이메일"
            type="email"
            value={email}
            onChange={setEmail}
            required
          />
          <SubmitButton />
        </form>
      </div>
    </ModalContainer>
  );
};

export default FormModal;
