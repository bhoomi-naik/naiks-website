import heroImg from "./assets/hero.jpg";

export default function Hero() {
  return (
    <section style={styles.hero}>
      {/* LEFT */}
      <div style={styles.left} className="hero-left">
        <h1 style={styles.title}>NAIKS</h1>
        <div style={styles.line} />
        <p style={styles.text}>
          Savour the flavours of Goa at our cozy restaurant.
        </p>
        <button style={styles.button}>EXPLORE OUR MENU</button>
      </div>

      {/* RIGHT */}
      <div style={styles.right} className="hero-image">
        <img src={heroImg} alt="Naik's Kitchen" style={styles.image} />
      </div>

      {/* Animation Styles */}
      <style>{`
        .hero-left {
          animation: fadeSlide 1s ease forwards;
        }

        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-image img {
          transition: transform 1.5s ease;
        }

        .hero-image:hover img {
          transform: scale(1.04);
        }

        button {
          transition: all 0.3s ease;
        }

        button:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 30px rgba(200,155,99,0.5);
          background: #b2834b;
        }
      `}</style>
    </section>
  );
}

const styles = {
  hero: {
  display: "grid",
  gridTemplateColumns: "minmax(360px, 42%) 1fr",
  width: "100%",
  height: "calc(100vh - 80px)",   // subtract navbar height
  minHeight: "600px",
  overflow: "hidden"
},


  left: {
    background: "#faf7f2",
    padding: "clamp(32px, 6vw, 70px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  right: {
    minHeight: "60vh",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  title: {
    fontSize: "clamp(36px, 5vw, 52px)",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "18px",
    letterSpacing: "1px",
  },

  line: {
    width: "60px",
    height: "3px",
    background: "#c89b63",
    marginBottom: "25px",
  },

  text: {
    fontSize: "clamp(16px, 2vw, 20px)",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "35px",
    maxWidth: "420px",
  },

  button: {
    width: "220px",
    padding: "15px",
    background: "#c89b63",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(200,155,99,0.35)",
  },
};
