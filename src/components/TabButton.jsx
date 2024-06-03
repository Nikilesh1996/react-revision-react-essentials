export default function TabButton({ children }) {
  const handleClick = () => {
    console.log("Hello World!", children);
  }

  return (
    <list>
      <button onClick={handleClick}>{children}</button>
    </list>
  );
}
