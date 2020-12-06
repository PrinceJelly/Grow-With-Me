export default function Button({ id, addClass, children, handleClick }) {
  return (
    <button
      id={id ? id : ""}
      className={`${addClass}` ? addClass : ""}
      onClick={handleClick && ((event) => handleClick(event))}
    >
      {children}
    </button>
  );
}
