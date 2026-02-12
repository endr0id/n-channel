interface SubmitBUttonProps {
  label: string;
  onClick?: () => void;
}

const SubmitButton = ({ label, onClick }: SubmitBUttonProps) => {
  return (
    <button type="submit" onClick={onClick}>
      {label}
    </button>
  );
};

export default SubmitButton;
