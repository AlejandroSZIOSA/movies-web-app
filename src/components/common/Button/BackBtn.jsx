import "./BackBtn.css";
export default function BackBtn({ children, onClickFn, bgColor }) {
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
