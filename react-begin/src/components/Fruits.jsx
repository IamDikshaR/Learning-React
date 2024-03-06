export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Mango", price: 7, emoji: "🥭" },
    { name: "Banana", price: 3, emoji: "🍌" },
    { name: "Orange", price: 5, emoji: "🍊" },
    { name: "pineapple", price: 13, emoji: "🍍" },
  ];
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.emoji} {fruit.name}
          </li>
        ))}
      </ul>
    </>
  );
}
