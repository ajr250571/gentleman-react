interface Props {
  label: string;
  onClick: () => void;
}
export function Button({ label, onClick }: Props) {
  return (
    <>
      <button className="btn btn-primary btn-sm mt-2" onClick={onClick}>
        {label}
      </button>
    </>
  );
}
