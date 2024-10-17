import "./CustomBtn.css";
export default function CustomBtn({ children, onClickFn, bgColor }) {
  return (
    <>
      <button
        id="btn-back"
        style={{ background: bgColor, color: "white" }}
        onClick={onClickFn}
      >
        {children}
      </button>
    </>
  );
}
