export default function About() {
  return (
    <section style={styles.section}>
      <div style={styles.inner}>

        {/* LEFT CONTENT */}
        <div style={styles.textBlock}>
          <h2 style={styles.heading}>
            An Exceptional Journey of Taste
          </h2>

          <div style={styles.divider}></div>

          <p style={styles.description}>
            From the heart of Konkan to the streets of Mumbai, Naik’s brings you soulful
            flavours of home-style coastal food crafted with the freshest ingredients
            and timeless recipes.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Reserve a Table</h3>
          <p style={styles.cardText}>
            Call or WhatsApp us to book your dining experience.
          </p>

          <div style={styles.phone}>
            +91 92211 79999
          </div>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
  background: "#faf7f2",
  padding: "80px 8%",
},

 inner: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto",
  gap: "50px",
  flexWrap: "wrap"
},


  textBlock: {
    maxWidth: "550px",
    flex: 1,
  },

  heading: {
    fontSize: "clamp(28px, 4vw, 42px)",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "20px",
    lineHeight: "1.2",
  },

  divider: {
    width: "60px",
    height: "3px",
    background: "#c89b63",
    marginBottom: "30px",
  },

  description: {
    fontSize: "clamp(16px, 2vw, 18px)",
    lineHeight: "1.7",
    color: "#555",
  },

  card: {
    background: "#0f172a",
    color: "white",
    padding: "45px 50px",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
  },

  cardTitle: {
    fontSize: "22px",
    marginBottom: "15px",
    color: "#c89b63",
    letterSpacing: "1px",
  },

  cardText: {
    fontSize: "15px",
    opacity: 0.9,
    marginBottom: "25px",
  },

  phone: {
    fontSize: "20px",
    fontWeight: "600",
    letterSpacing: "1px",
    background: "rgba(200,155,99,0.15)",
    padding: "14px 20px",
    borderRadius: "8px",
    display: "inline-block",
    color: "#c89b63",
  },
};
