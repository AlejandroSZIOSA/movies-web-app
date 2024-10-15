export default function BackBtn({ onClickFn }) {
  return (
    <>
      <button
        style={{ background: "green", color: "white" }}
        onClick={onClickFn}
      >
        Go back
      </button>
    </>
  );
}
