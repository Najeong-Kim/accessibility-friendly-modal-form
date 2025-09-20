import { useEffect, useRef, useState } from "react";
import ModalContainer from "./ModalContainer";

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
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              이름
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              제출
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </ModalContainer>
  );
};

export default FormModal;
