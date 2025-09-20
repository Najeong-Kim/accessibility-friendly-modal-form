interface SubmitButtonProps {
  submitText?: string;
}

const SubmitButton = ({ submitText = "제출" }: SubmitButtonProps) => {
  return (
    <div className="pt-4">
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {submitText}
      </button>
    </div>
  );
};

export default SubmitButton;
