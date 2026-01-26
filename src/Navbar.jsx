export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 25px",
      background: "#0f172a",
      color: "white"
    }}>
      <h2>Naik's Kitchen</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <span>Home</span>
        <span>Menu</span>
        <span>Contact</span>
        <span>Order Online</span>
      </div>
    </nav>
  );
}
