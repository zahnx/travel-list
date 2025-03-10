export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        {" "}
        &copy; Jonas Schmedtmann's course work. Redesigned by ZAHN.
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {" "}
      {percentage === 100
        ? "You got everything! Ready to go ✈️"
        : ` You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
    </footer>
  );
}
