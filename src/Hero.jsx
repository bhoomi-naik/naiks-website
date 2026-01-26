export default function Hero() {
  return (
    <div 
      style={{
        height: "90vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center"
      }}
    >
      <div>
        <h1 style={{ fontSize: "45px", fontWeight: "bold" }}>
          IT’S TIME TO ENJOY <br /> THE FINER THINGS IN LIFE
        </h1>

        <p style={{ marginTop: "15px", fontSize: "18px" }}>
          Coastal flavours made with love — fresh, homely & unforgettable.
        </p>

        <button 
          style={{
            marginTop: "25px",
            padding: "12px 25px",
            background: "#d4a373",
            border: "none",
            color: "white",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          DISCOVER OUR MENU
        </button>
      </div>
    </div>
  );
}
