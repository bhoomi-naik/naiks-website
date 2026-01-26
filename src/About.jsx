export default function About() {
  return (
    <div style={{ padding: "70px 10%", textAlign: "center", background: "#faf7f2" }}>
      <h4>ABOUT RESTAURANT</h4>

      <h2 style={{ fontSize: "30px" }}>
        ENJOY AN EXCEPTIONAL JOURNEY OF TASTE
      </h2>

      <p style={{ marginTop: "15px", fontSize: "18px" }}>
        From the heart of Konkan to the streets of Mumbai — 
        Naik’s brings you soulful flavours of home-style coastal food  
        using the freshest seafood & aromatic masalas.
      </p>

      <button 
        style={{
          marginTop: "20px",
          padding: "10px 25px",
          border: "1px solid black",
          background: "transparent",
          cursor: "pointer"
        }}
      >
        READ MORE ABOUT US
      </button>
    </div>
  );
}

