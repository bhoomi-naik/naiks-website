export default function MenuPreview() {
  const items = [
    {name: "Surmai Fry", price: "₹380"},
    {name: "Prawns Masala", price: "₹320"},
    {name: "Fish Thali", price: "₹450"},
  ];

  return (
    <div style={{ padding: "70px 10%" }}>
      <h2>Special Menu</h2>

      {items.map(item => (
        <div 
          key={item.name}
          style={{ 
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 0",
            borderBottom: "1px solid #ddd"
          }}
        >
          <span>{item.name}</span>
          <span>{item.price}</span>
        </div>
      ))}
    </div>
  );
}
