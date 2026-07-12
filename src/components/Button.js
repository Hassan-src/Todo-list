export default function Button({ children, className, onClick }) {
  // Adding a button function so that we can use it as much as we need
  return (
    <>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
